'use client';

import ReservationStatus from '@/app/ui/reservations/status';
import { Button, DataGrid } from 'devextreme-react';
import { Column, ColumnChooser, Export, FilterRow, Pager, Paging, RemoteOperations, Summary, TotalItem } from 'devextreme-react/cjs/data-grid';
import { Reservation } from '@/app/lib/definitions';

export default function ReservationsTable({ reservations }: { reservations: Reservation[] }) {
  return (
    <DataGrid
      className="dx-card wide-card"
      dataSource={reservations}
      showColumnLines
      showRowLines
      showBorders
      rowAlternationEnabled
      allowColumnResizing
      allowColumnReordering
      columnResizingMode="widget"
      focusedRowEnabled
      autoNavigateToFocusedRow={false}
      filterSyncEnabled
    >
      <Export enabled />
      <Paging defaultPageSize={50} />
      <Pager showPageSizeSelector displayMode="compact" />
      <FilterRow visible />
      <RemoteOperations paging filtering sorting summary />
      <ColumnChooser enabled />
      <Column type="buttons" width={50} caption="Action" fixed fixedPosition="right" allowResizing={false}></Column>
      <Column dataField="RezId" dataType="number" caption="Res.ID" width={70} fixed allowResizing={false} />
      <Column dataField="Hacim" dataType="number" caption="Volume" width={70} />
      <Column dataField="KayitTarih" dataType="date" caption="Created" width={100} format="shortDate" />
      <Column dataField="SonStatu" caption="Status" width={100} cellRender={ReservationStatus} />
      <Column dataField="KayitKullanici" caption="Created By" width={100} />
      <Summary>
        <TotalItem column="RezId" summaryType="count" displayFormat="{0}" valueFormat="#,##0" />
      </Summary>
    </DataGrid>
  );
}
