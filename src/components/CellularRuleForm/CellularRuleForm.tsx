import React, { useState } from 'react';
import { CellularRuleFormInputs, CellularRuleFormProps } from './CellularRuleForm.types';
import { useForm } from 'react-hook-form';
import { Alert, Button, Snackbar, Stack, TextField } from '@mui/material';

export const CellularRuleForm: React.FC<CellularRuleFormProps> = ({ onSubmit, initRule }) => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<CellularRuleFormInputs>({
    defaultValues: { rule: initRule },
  });

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Stack
      component={ 'form' }
      direction={ 'column' }
      spacing={ 1 }
      onSubmit={ handleSubmit((data) => {
        onSubmit(data);
        setIsSnackbarOpen(true);
      }) }
    >
      <TextField
        { ...register('rule', {
          min: 0,
          max: 255,
          required: true,
        }) }
        label={ 'Rule' }
        error={ !!errors.rule }
        helperText={ !!errors.rule && 'Введите число от 0 до 255' }
      />
      <Button
        type={ 'submit' }
        variant={ 'outlined' }
      >
        Установить правило
      </Button>
      <Snackbar
        open={ isSnackbarOpen }
        autoHideDuration={ 3000 }
        onClose={ closeSnackbar }
        sx={ {
          position: 'absolute',
        } }
      >
        <Alert
          severity='success'
          sx={ { width: '100%' } }
        >
          Правило изменено
        </Alert>
      </Snackbar>
    </Stack>
  );
};
