import { CellularRowType, CellularString } from '../components/CellularRow/CellularRow.types';
import { Rule } from './get-rule';
import { transformCell } from './transform-cell';

const calculateFirstCell = (row: CellularRowType, rule: Rule): CellularString => {
  const firstCellPattern = [row.at(-1), row.at(0), row.at(1)];
  return transformCell(firstCellPattern.join(''), rule);
};

const calculateLastCell = (row: CellularRowType, rule: Rule): CellularString => {
  const lastCellPattern = [row.at(-2), row.at(-1), row.at(0)];
  return transformCell(lastCellPattern.join(''), rule);
};

export const transformRow = (row: CellularRowType, rule: Rule) => {
  const transformedRow = row.map((value, index, array) => {
    if (index === 0) {
      return calculateFirstCell(array, rule);
    }
    if (index === array.length - 1) {
      return calculateLastCell(array, rule);
    }

    return transformCell(array.slice(index - 1, index + 2).join(''), rule);
  });

  return transformedRow;
};
