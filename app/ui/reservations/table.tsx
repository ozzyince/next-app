'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NQDataGrid from '@/app/ui/nq-data-grid';
import { Reservation } from '@/app/lib/definitions';
import { columns } from './columns';

export default function ReservationsTable({ reservations, sortCol, sortDir }: { reservations: Reservation[]; sortCol?: string; sortDir?: 'asc' | 'desc' }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortChanged = useCallback(
    (sortCol?: string, sortDir?: 'asc' | 'desc') => {
      const params = new URLSearchParams(searchParams);
      if (sortCol) params.set('sort', `${sortCol} ${sortDir}`);
      else params.delete('sort');
      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  return <NQDataGrid keyExpr={'RezId'} columns={columns} data={reservations} sortCol={sortCol} sortDir={sortDir} onSortChanged={sortChanged} />;
}
