'use client';

import { useCallback } from 'react';
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';
import { Reservation } from '@/app/lib/definitions';
import { cellPrepared } from './utils';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxDataGrid from 'devextreme/ui/data_grid';
import { columns } from './columns';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function ReservationsTable({ reservations }: { reservations: Reservation[] }) {
  const searchParams = useSearchParams();
  const [sortField, sortDirection] = (searchParams.get('sort')?.split(' ') as [string, 'asc' | 'desc' | undefined]) ?? ['', undefined];
  const pathname = usePathname();
  const { replace } = useRouter();

  const optionChanged = useCallback(
    (e: OptionChangedEventInfo<dxDataGrid<Reservation, any>>) => {
      if (!e.fullName.endsWith('sortOrder')) return;
      const idx = +(e.fullName.match(/\d+/) ?? -1);
      if (idx === -1) return;
      const params = new URLSearchParams(searchParams);
      params.set('sort', `${columns[idx].dataField ?? ''} ${e.value}`);
      replace(`${pathname}?${params.toString()}`);
      console.log('Sort order changed for column', idx, columns[idx].dataField);
    },
    [searchParams, replace, pathname]
  );

  return (
    <DataGrid
      keyExpr={'RezId'}
      dataSource={reservations}
      showColumnLines
      showRowLines
      showBorders
      rowAlternationEnabled
      allowColumnResizing
      allowColumnReordering
      columnResizingMode="widget"
      focusedRowEnabled
      columnChooser={{ enabled: true }}
      onCellPrepared={cellPrepared}
      onOptionChanged={optionChanged}
    >
      {columns.map((column, index) => (
        <Column key={index} {...column} defaultSortOrder={sortField === column.dataField ? sortDirection : undefined} />
      ))}
    </DataGrid>
  );
}
