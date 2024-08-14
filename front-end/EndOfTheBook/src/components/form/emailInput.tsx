import { FormControl, FormHelperText, Input, InputAdornment } from "@mui/material"
import { Email as EmailIcon } from "@mui/icons-material";
import { ChangeEvent } from "react";

export type EmailInputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error: string;
}

export default function EmailInput({ value, onChange, error }: EmailInputProps) {
    return (
        <>
            <FormControl variant="outlined" sx={{ m: 1, mt: 3, width: '25ch' }} error={!!error}>
                <Input
                    id="mail-input"
                    name="mail"
                    value={value}
                    onChange={onChange}
                    endAdornment={<InputAdornment position="end"><EmailIcon /></InputAdornment>}
                    aria-describedby="mail-error-text" inputProps={{
                        'aria-label': 'mail',
                    }}
                />
                <FormHelperText id="standard-weight-helper-text">Mail</FormHelperText>
                {error && <FormHelperText id="mail-error-text">{error}</FormHelperText>}
            </FormControl>
        </>
    )
}