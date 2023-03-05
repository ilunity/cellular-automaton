import { Rule } from './get-rule';
import { CellularString } from '../components/CellularRow/CellularRow.types';

export const transformCell = (cellPattern: string, rule: Rule): CellularString => {
  return rule[cellPattern];
};
