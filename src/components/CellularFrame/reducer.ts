import { CellularRowType } from '../CellularRow/CellularRow.types';

export type CellularDataAction = {
  type: 'setCellularData';
  payload: CellularRowType;
} | {
  type: 'updateCellularData';
  payload: CellularRowType;
} | {
  type: 'toggleInitCellularData';
  index: number;
}

export const cellularDataReducer = (state: CellularRowType[], action: CellularDataAction) => {
  switch (action.type) {
    case 'setCellularData':
      return [action.payload];
    case 'updateCellularData':
      return [...state, action.payload];
    case 'toggleInitCellularData': {
      const newValue = state[0][action.index] === '1' ? '0' : '1';
      const newInitDataCopy = state[0].slice();
      newInitDataCopy.splice(action.index, 1, newValue);
      return [newInitDataCopy];
    }
  }
};
