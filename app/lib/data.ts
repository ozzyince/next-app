import sql from 'mssql';
import { unstable_noStore as noStore } from 'next/cache';
import { RezCounts, Reservation } from '@/app/lib/definitions';

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER ?? 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    trustServerCertificate: true,
    cryptoCredentialsDetails: {
      ciphers: 'DEFAULT@SECLEVEL=0',
    },
  },
};

export async function getRezCounts() {
  noStore();
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query<RezCounts>(`
      select SUM(IIF(RezDurum = 0, 1, 0)) Waiting, SUM(IIF(RezDurum = 1, 1, 0)) Processing,
             SUM(IIF(RezDurum = 2, 1, 0)) Canceled, SUM(IIF(RezDurum = 3, 1, 0)) Transferred
        from ${process.env.DB_PREFIX}dbo.Web_Rezervasyon;`);
    console.log('Database Result:', result.recordset[0]);
    return result.recordset[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 20;
export async function fetchFilteredReservations(query: string, currentPage: number, sortCol?: string, sortDir?: 'asc' | 'desc') {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    await sql.connect(sqlConfig);
    const request = new sql.Request();
    request.input('query', sql.NVarChar, `%${query}%`);
    request.input('offset', sql.Int, offset);
    request.input('itemsPerPage', sql.Int, ITEMS_PER_PAGE);
    const result = await request.query<Reservation[]>(`
      select *
        from ${process.env.DB_PREFIX}dbo._OZGUR_vw_SeaReservation
       where RezDurum = 0 and (KayitKullanici like @query)
       order by ${sortCol ? sortCol + ' ' + sortDir : 'RezId desc'}
       offset @offset rows fetch next @itemsPerPage rows only;`);
    return result.recordset;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch reservations.');
  }
}
