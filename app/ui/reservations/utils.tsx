import { CellPreparedEvent } from 'devextreme/ui/data_grid';
import { Reservation } from '@/app/lib/definitions';

export const cellPrepared = (e: CellPreparedEvent<Reservation, any>) => {
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
};
