export interface CellularRuleFormInputs {
  rule: number;
}

export interface CellularRuleFormProps {
  onSubmit: (inputs: CellularRuleFormInputs) => void;
  initRule: number;
}
