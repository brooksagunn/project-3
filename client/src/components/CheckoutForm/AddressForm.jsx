import React, { useState } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';


export default function AddressForm({ test }) {
    const methods = useForm();

    return (
        <div>
            <Typography variant="h6" gutterButtom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((shippingData) => test({ ...shippingData }))}>
                    <Grid container spacing={3}>
                        <FormInput name="firstName" label="First Name" />
                        <FormInput name="lastName" label="Last Name" />
                        <FormInput name="phone" label="Phone Number" />
                        <FormInput name="address" label="Address" />
                        <FormInput name="email" label="E-mail" />
                        <FormInput name="city" label="City" />
                        <FormInput name="state" label="State" />
                        <FormInput name="zipcode" label="Zip Code" />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} to="/bag" variant="outlined">Back to Bag</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}