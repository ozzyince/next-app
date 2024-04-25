'use client';

import { useCallback } from 'react';
import { DataGrid } from 'devextreme-react';
import { Column } from 'devextreme-react/data-grid';
import { Reservation } from '@/app/lib/definitions';
import { cellPrepared } from './utils';

export default function ReservationsTable({ reservations }: { reservations: Reservation[] }) {
  const optionChanged = useCallback((e: any) => console.log('Option Changed:', e), []);

  return (
    <DataGrid
      className="dx-card wide-card w-full h-full"
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
      onCellPrepared={cellPrepared}
      onOptionChanged={optionChanged}
    >
      <Column dataField="RezId" dataType="number" caption="Res.ID" width={70} fixed allowResizing={false} />
      <Column dataField="RezDurum" dataType="number" caption="Res.Status" width={76} minWidth={76}></Column>
      <Column dataField="KirmiziVarWeb" dataType="boolean" caption="Blue" width={60} minWidth={60} />
      <Column dataField="KalanSure" dataType="number" caption="Remaining Time" width={100} minWidth={100} />
      <Column dataField="Durum" dataType="number" caption="Load Status" width={133} minWidth={133} calculateDisplayValue="DurumName"></Column>
      <Column dataField="DurumNot" dataType="string" caption="Status Note" width={123} minWidth={123} />
      <Column dataField="YurtDisiFirmaId" dataType="number" caption="Shipper" width={110} minWidth={110} calculateDisplayValue="YurtDisiFirmaName"></Column>
      <Column dataField="YurtIciFirmaId" dataType="number" caption="Consignee" width={110} minWidth={110} calculateDisplayValue="YurtIciFirmaName"></Column>
      <Column dataField="SOStatus" dataType="number" caption="SO Status" width={133} minWidth={133}></Column>
      <Column dataField="Hacim" dataType="number" caption="Volume" width={50} minWidth={50} format="#,##0.000" />
      <Column dataField="KapAdet" dataType="number" caption="Package" width={40} minWidth={40} format="#,##0" />
      <Column dataField="Kilo" dataType="number" caption="Weight" width={55} minWidth={55} format="#,##0.00" />
      <Column dataField="Istif" dataType="boolean" caption="Stacking Status" width={76} minWidth={76}></Column>
      <Column dataField="CikisYeriId" dataType="number" caption="POE" width={90} minWidth={90} calculateDisplayValue="CikisYeriName"></Column>
      <Column dataField="CikisLimaniId" dataType="number" caption="POL" width={90} minWidth={90} calculateDisplayValue="CikisLimaniName"></Column>
      <Column dataField="VarisYeriId" dataType="number" caption="POD" width={90} minWidth={90} calculateDisplayValue="VarisYeriName"></Column>
      <Column dataField="YukHazirTarihi" dataType="date" caption="Ready Date" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="PickUpTarihi" dataType="date" caption="Pick Up Date" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="BargePortSailingDate" dataType="date" caption="Barge Port Sailing" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="YDAntrepoTarih" dataType="date" caption="WH Arrival Date" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="CutOffTarihi" dataType="date" caption="Document Cut-Off" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="ArmatorCutOff" dataType="date" caption="VGM Cut-Off" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="MuhtemelCikisTarihi" dataType="date" caption="ETD" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="MuhtemelVarisTarihi" dataType="date" caption="ETA" width={68} minWidth={68} format="dd.MM.yyyy" />
      <Column dataField="TeslimSekli" dataType="string" caption="Incoterms" width={60} minWidth={60} calculateDisplayValue="TeslimSekli"></Column>
      <Column dataField="HatId" dataType="number" caption="Line" width={110} minWidth={110} calculateDisplayValue="HatName"></Column>
      <Column dataField="ArakonsimentoNo" dataType="string" caption="HBL No" width={113} minWidth={113} />
      <Column dataField="SabitNot" dataType="string" caption="HBL Type" width={68} minWidth={68}></Column>
      <Column dataField="AnaKonsimentoNo" dataType="string" caption="MBL No" width={113} minWidth={113} />
      <Column dataField="KonteynerList" dataType="string" caption="Container Info" width={123} minWidth={123} />
      <Column dataField="GemiAdi" dataType="string" caption="Vessel Name" width={140} minWidth={140} />
      <Column dataField="GondericiOdemeBekliyor" dataType="boolean" caption="Shipper waiting for payment" width={68} minWidth={68} />
      <Column dataField="AcenteLocalMasrafBekliyor" dataType="boolean" caption="Agency expects local charges" width={68} minWidth={68} />
      <Column dataField="MalinCinsi" dataType="string" caption="Goods Desc." width={120} minWidth={120} />
      <Column dataField="KayitTarih" dataType="datetime" caption="Rec.Date" width={116} minWidth={116} format="dd.MM.yyyy HH:mm:ss" />
      <Column dataField="GuncellemeKullanici" dataType="string" caption="Last Edit User" width={100} minWidth={100} />
      <Column dataField="GuncellemeTarih" dataType="datetime" caption="Last Edit Date" width={116} minWidth={116} format="dd.MM.yyyy HH:mm:ss" />
      <Column dataField="KonsolNo" dataType="string" caption="Console No" width={66} minWidth={66} />
      <Column dataField="KonsolPlan" dataType="string" caption="Console Plan" width={66} minWidth={66} />
      <Column dataField="AktarmaGemiAdi" dataType="string" caption="Trn. Vessel" visible={false} showInColumnChooser={false} />
    </DataGrid>
  );
}
