import mssql from 'mssql';
import { unstable_noStore as noStore } from 'next/cache';

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

interface RezCounts {
  Waiting: number;
  Processing: number;
  Canceled: number;
  Transferred: number;
}

export async function getRezCounts(): Promise<RezCounts> {
  noStore();
  try {
    await mssql.connect(sqlConfig);
    const result = await mssql.query`
      select SUM(IIF(RezDurum = 0, 1, 0)) Waiting, SUM(IIF(RezDurum = 1, 1, 0)) Processing,
             SUM(IIF(RezDurum = 2, 1, 0)) Canceled, SUM(IIF(RezDurum = 3, 1, 0)) Transferred
        from [10.10.10.11].UNIQUE_DB.dbo.Web_Rezervasyon;`;
    console.log('Database Result:', result.recordset[0]);
    return result.recordset[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}
