import React from 'react';
import { CellularRowInputProps } from './CellularRowInput.types';
import { StyledCell } from '../CellularRow/CellularRow.styles';
import { Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export const CellularRowInput: React.FC<CellularRowInputProps> = ({ row, rowDispatch }) => {

  const toggleCell = (index: number) => {
    rowDispatch({
      type: 'toggleInitCellularData',
      index,
    });
  };

  return (
    <Stack
      direction={ 'row' }
    >
      {
        row.map((value, index) => (
          <StyledCell
            key={ uuidv4() }
            isActive={ value === '1' }
            onClick={ () => toggleCell(index) }
          />
        ))
      }
    </Stack>
  );
};
