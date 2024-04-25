import { fetchFilteredReservations } from '@/app/lib/data';
import Table from '@/app/ui/reservations/table';

export default async function TableWrapper({
  query,
  currentPage,
  sortCol,
  sortDir,
}: {
  query: string;
  currentPage: number;
  sortCol?: string;
  sortDir?: 'asc' | 'desc';
}) {
  return <Table reservations={await fetchFilteredReservations(query, currentPage, sortCol, sortDir)} sortCol={sortCol} sortDir={sortDir} />;
}
