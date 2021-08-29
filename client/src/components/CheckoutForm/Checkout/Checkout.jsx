import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import './Checkout.css';

const steps = ['Shipping Address', 'Payment Details'];

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const [shippingData, setShippingData] = useState({});

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const test = (data) => {
        setShippingData(data);
        nextStep();
    };

    const Form = () => activeStep === 0 ? <AddressForm next={nextStep} setShippingData={setShippingData} test={test} /> : <PaymentForm nextStep={nextStep} shippingData={shippingData} />
    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );
    return (
        <div className="checkout">
            <Paper>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : <Form />}
            </Paper>
        </div>
    );
} 