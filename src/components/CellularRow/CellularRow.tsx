import React from 'react';
import { CellularRowProps } from './CellularRow.types';
import { StyledCell } from './CellularRow.styles';
import { Stack } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

export const CellularRow: React.FC<CellularRowProps> = ({ row }) => {
  return (
    <Stack
      direction={ 'row' }
    >
      {
        row.map((value) => (
          <StyledCell
            key={ uuidv4() }
            isActive={ value === '1' }
          />
        ))
      }
    </Stack>
  );
};
