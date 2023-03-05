import { CellularRowType, CellularString } from '../components/CellularRow/CellularRow.types';

export type Rule = Record<string, CellularString>

const RULE_PATTERN = ['111', '110', '101', '100', '011', '010', '001', '000'];

export const getRule = (numberRule: number) => {
  const base2Rule = numberRule.toString(2);
  let base2ArrayRule = base2Rule.split('') as CellularRowType;

  // Add insignificant zeros
  const firstZerosCount = 8 - base2ArrayRule.length;
  const firstZeros = [...Array(firstZerosCount).map(() => '0')] as CellularRowType;
  base2ArrayRule = [...firstZeros, ...base2ArrayRule];

  const rule: Rule = {};
  for (let i = 0; i < 8; i++) {
    rule[RULE_PATTERN[i]] = base2ArrayRule[i];
  }

  return rule;
};
