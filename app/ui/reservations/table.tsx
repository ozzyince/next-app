'use client';

import { useCallback, useRef } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NQDataGrid from '@/app/ui/nq-data-grid';
import { Reservation } from '@/app/lib/definitions';
import { columns } from './columns';

export default function ReservationsTable({ reservations, sortCol, sortDir }: { reservations: Reservation[]; sortCol?: string; sortDir?: 'asc' | 'desc' }) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const sortChanged = useCallback(
    (sortCol?: string, sortDir?: 'asc' | 'desc') => {
      const params = new URLSearchParams(searchParams);
      if (sortCol && sortDir) params.set('sort', `${sortCol} ${sortDir}`);
      else params.delete('sort');
      const replaceId = setTimeout(() => {
        localStorage.setItem('ReservationHTML', ref.current?.innerHTML ?? '');
        replace(`${pathname}?${params.toString()}`);
      }, 200);
      return () => clearTimeout(replaceId);
    },
    [searchParams, pathname, replace]
  );

  return (
    <div ref={ref}>
      <NQDataGrid keyExpr={'RezId'} columns={columns} data={reservations} sortCol={sortCol} sortDir={sortDir} onSortChanged={sortChanged} />
    </div>
  );
}
