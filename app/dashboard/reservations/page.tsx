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
    <div className="w-full h-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Reservations</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search reservations..." />
        <CreateReservation />
      </div>
      <Suspense key={query + currentPage} fallback={<ReservationsTableSkeleton />}>
        <TableWrapper query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center" />
    </div>
  );
}
