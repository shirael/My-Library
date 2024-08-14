import * as React from 'react';
import Alert from '@mui/material/Alert';
import {Check,ErrorOutline} from '@mui/icons-material';
import { AlertTypeProps } from './alert.type';

export default function ErrorAlert({text}:AlertTypeProps) {
  return (
    <Alert icon={<ErrorOutline fontSize="inherit" />} severity="error">
      {text}
    </Alert>
  );
}
