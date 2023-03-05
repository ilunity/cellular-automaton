import React, { Reducer, useEffect, useReducer, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { CellularRow } from '../CellularRow';
import { CellularRowType } from '../CellularRow/CellularRow.types';
import { transformRow } from '../../utils/transform-row';
import { getRule, Rule } from '../../utils';
import { CellularDataAction, cellularDataReducer } from './reducer';
import { v4 as uuidv4 } from 'uuid';
import { CellularRuleForm } from '../CellularRuleForm';
import { CellularRuleFormInputs } from '../CellularRuleForm/CellularRuleForm.types';
import { CellularRowInput } from '../CellularRowInput';
import { INIT_ARRAY, INIT_RULE } from '../../utils/consts';


export const CellularFrame: React.FC = () => {
  const [rule, setRule] = useState<Rule>(getRule(INIT_RULE));
  const [isActive, setIsActive] = useState<boolean>(false);
  const [cellularData, cellularDataDispatch] = useReducer<Reducer<CellularRowType[], CellularDataAction>>(cellularDataReducer, [INIT_ARRAY]);
  const [hasBeenLaunched, setHasBeenLaunched] = useState<boolean>(false);

  const toggleActive = () => {
    setIsActive(prevState => !prevState);
  };

  const handleStartStopClick = () => {
    toggleActive();
    setHasBeenLaunched(true);
  };

  const changeRule = ({ rule: numericRule }: CellularRuleFormInputs) => {
    setRule(getRule(numericRule));
  };

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const interval = setInterval(() => {
      const chartLastIndex = cellularData.length - 1;

      cellularDataDispatch({
        type: 'updateCellularData',
        payload: transformRow(cellularData[chartLastIndex], rule),
      });

    }, 500);

    return () => clearInterval(interval);
  }, [isActive, cellularData]);

  return (
    <Stack
      direction={ 'row' }
      spacing={ 5 }
      sx={ { mt: 5 } }
    >
      <Stack
        spacing={ 2 }
      >
        <CellularRuleForm
          onSubmit={ changeRule }
          initRule={ INIT_RULE }
        />
        <Button
          variant={ 'outlined' }
          onClick={ handleStartStopClick }
        >
          { isActive ? 'Stop' : 'Start' }
        </Button>
      </Stack>
      <Stack
        direction={ 'column' }
      >
        { !hasBeenLaunched
          ? (<CellularRowInput row={ cellularData[0] } rowDispatch={ cellularDataDispatch } />)
          : cellularData.map((row) => (
            <CellularRow key={ uuidv4() } row={ row } />
          ))
        }
      </Stack>
    </Stack>
  );
};
