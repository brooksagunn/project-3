import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import './Checkout.css'

const steps = ['Shipping Address', 'Payment Details'];

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
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
            </Paper>
        </div>
    );
} 