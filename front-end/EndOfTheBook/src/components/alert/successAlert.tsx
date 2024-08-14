import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { AlertTypeProps } from './alert.type';

export default function SuccessAlert({text}: AlertTypeProps) {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {text}
    </Alert>
  );
}
