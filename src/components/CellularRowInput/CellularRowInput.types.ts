import { CellularRowType } from '../CellularRow/CellularRow.types';
import { Dispatch } from 'react';
import { CellularDataAction } from '../CellularFrame/reducer';

export interface CellularRowInputProps {
  row: CellularRowType;
  rowDispatch: Dispatch<CellularDataAction>;
}
