import React from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import FormInput from './FormInput';

export default function AddressForm() {
    const methods = useForm();

    return (
        <div>
            <Typography variant="h6" gutterButtom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name" />
                        <FormInput required name="lastName" label="Last Name" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="E-mail" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zipcode" label="Zip Code" />
                    </Grid>
                </form>
            </FormProvider>
        </div>
    );
}