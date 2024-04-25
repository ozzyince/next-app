'use client';

import { useCallback } from 'react';
import { DataGrid } from 'devextreme-react';
import { Column, IColumnProps } from 'devextreme-react/data-grid';
import { OptionChangedEventInfo } from 'devextreme/core/dom_component';
import dxDataGrid, { CellPreparedEvent } from 'devextreme/ui/data_grid';

export default function NQDataGrid({
  keyExpr,
  data,
  columns,
  sortCol,
  sortDir,
  onSortChanged,
}: {
  keyExpr: string | string[];
  data: any[];
  columns: IColumnProps[];
  sortCol?: string;
  sortDir?: 'asc' | 'desc';
  onSortChanged?: (sortCol?: string, sortDir?: 'asc' | 'desc') => void;
}) {
  const optionChanged = useCallback(
    (e: OptionChangedEventInfo<dxDataGrid<any, any>>) => {
      if (!e.fullName.endsWith('sortOrder')) return;
      const idx = +(e.fullName.match(/\d+/) ?? -1);
      const sortCol = columns[idx]?.dataField;
      const sortDir = e.value;
      onSortChanged?.(sortCol, sortDir);
    },
    [columns, onSortChanged]
  );

  const cellPrepared = useCallback((e: CellPreparedEvent<any, any>) => {
    if (e.rowType !== 'data') return;
    const colors: { [key: number]: string } = { 2: '$CBC0FF', 3: '$C0C0C0' };
    let color;
    switch (e.column.dataField) {
      case 'Durum':
        color = e.data.SonStatu_TabanRenk;
        break;
      case 'RezDurum':
        color = colors[e.value as number];
        break;
      default:
        color = e.data[`${e.column.dataField}_TabanRenk`];
        if (!color && e.data[`${e.column.dataField}Diff`]) color = '$CBC0FF';
    }
    if (!color) return;
    const [blue, green, red] = color.slice(1).match(/(..)/g);
    color = `#${red}${green}${blue}`;
    e.cellElement.style.backgroundColor = color;
  }, []);

  return (
    <DataGrid
      keyExpr={keyExpr}
      dataSource={data}
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
      {columns.map((column, index) => (
        <Column key={index} {...column} defaultSortOrder={sortCol === column.dataField ? sortDir : undefined} />
      ))}
    </DataGrid>
  );
}
