import { fetchFilteredReservations } from '@/app/lib/data';
import Table from '@/app/ui/reservations/table';

export default async function TableWrapper({ query, currentPage }: { query: string; currentPage: number }) {
  return <Table reservations={await fetchFilteredReservations(query, currentPage)} />;
}
