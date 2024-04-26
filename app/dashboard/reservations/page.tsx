import { Suspense } from 'react';
import Search from '@/app/ui/search';
import { CreateReservation } from '@/app/ui/reservations/buttons';
import ReservationsTableSkeleton from '@/app/ui/reservations/skeleton';
import TableWrapper from './table-wrapper';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    sort?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const [sortCol, sortDir] = (searchParams?.sort?.split(' ') as [string?, ('asc' | 'desc')?]) ?? [undefined, undefined];

  return (
    <main>
      <h2>Reservations</h2>
      <div className="flex flex-col md:flex-row">
        <Search placeholder="Search reservations..." />
        <CreateReservation />
      </div>
      <Suspense key={`${query}${currentPage}${sortCol ?? ''}${sortDir ?? ''}`} fallback={<ReservationsTableSkeleton />}>
        <TableWrapper query={query} currentPage={currentPage} sortCol={sortCol} sortDir={sortDir} />
      </Suspense>
    </main>
  );
}
