
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { ChangeEvent, useState } from "react";

export type PasswordInputProps = {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error: string;
}

export default function PasswordInput({ value, onChange, error }: PasswordInputProps) {


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };



    return (
        <>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" error={!!error}>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    name="password" endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {error && <FormHelperText id="password-error-text">{error}</FormHelperText>}
            </FormControl>
        </>
    )
}
