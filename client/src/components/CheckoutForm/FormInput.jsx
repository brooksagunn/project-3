import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

export default function FormInput({ name, label }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller 
                control={control}
                name={name}
                as={<TextField InputProps={{ disableUnderline: true }} />}
                fullWidth
                label={label}
                required
            />
        </Grid>
    );
}