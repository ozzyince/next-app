import { Suspense } from 'react';
import Search from '@/app/ui/search';
import { CreateReservation } from '@/app/ui/reservations/buttons';
import { ReservationsTableSkeleton } from '@/app/ui/skeletons';
import TableWrapper from './table-wrapper';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <h2>Reservations</h2>
      <div>
        <Search placeholder="Search reservations..." />
        <CreateReservation />
      </div>
      <Suspense key={query + currentPage} fallback={<ReservationsTableSkeleton />}>
        <TableWrapper query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
