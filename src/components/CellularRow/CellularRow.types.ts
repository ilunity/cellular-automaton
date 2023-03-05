export type CellularString = '1' | '0'

export type CellularRowType = Array<CellularString>;

export interface CellularRowProps {
  row: CellularRowType;
}
