import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';
import CustomerForm, { Customer } from './CustomerForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Shipping from './Shipping';
import { CardInfo } from './CardPayment';
import { CartContext } from './contexts/CartContext';
import { NewOrder, OrderContext, ShippingMethod } from './contexts/OrderContext';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Dina uppgifter', 'Fraktsätt', 'Betalsätt', 'Granska din beställning'];

export default function Checkout() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState(0);
  const [cardInfo, setCardInfo] = useState<CardInfo>( { name: '', cardNumber: '', expireDate: '', cvv: '' } );
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>({ name: "PostNord", price: 49, expectedDeliveryTime: 5 });
  const [paymentOption, setPaymentOption] = useState('Bankkort');
  const [customer, setCustomer] = useState<Customer>({  firstName: '', lastName: '', streetAddress: '', zipCode: '',  city: '', phoneNr: ''})
  const [isLoading, setIsLoading] = useState(false);
  const {cart, emptyCart} = useContext(CartContext)
  const [totalPrice] = useState(calculateTotalPrice())
  const { addNewOrder } = useContext(OrderContext)

  function calculateTotalPrice() {
    let total = 0;
    cart.forEach(item => { 
      const subtotal = item.price * item.quantity;
      total += subtotal;  
    });
    total += shippingMethod.price
    return total;
  }  

  const handleNext = async () => {
    if (activeStep === 3) {
      const orderId = createOrderID(); 
      const newOrder: NewOrder = {
        customer,
        shippingMethod,
        totalPrice,
        cart
      }
      setIsLoading(true)
      addNewOrder(newOrder)
      setOrderNumber(orderId)
      setIsLoading(false)
      emptyCart();
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CustomerForm handleNext={handleNext} customer={customer} onCustomerChange={setCustomer} />;
      case 1:
        return <Shipping handleNext={handleNext} handleBack={handleBack} chosenShippingMethod={shippingMethod} setChosenShippingMethod={setShippingMethod}/>;
      case 2:
        return <PaymentForm handleNext={handleNext} handleBack={handleBack} paymentOption={paymentOption} customer={customer} onPaymentOptionChange={setPaymentOption} cardInfo={cardInfo} onCardInfoChange={setCardInfo} />;
      case 3:
        return <Review handleNext={handleNext} handleBack={handleBack} paymentOption={paymentOption} shippingMethod={shippingMethod} customer={customer} isLoading={isLoading} cardInfo={cardInfo} totalPrice={totalPrice}/>;
      default:
        throw new Error('Unknown step');
    }
  }

  function createOrderID() {
    let x = Math.floor((Math.random() * 10000) + 1);
    return x;
  }

  return (
    <React.Fragment>
      <Box pb={2}>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Kassa
          </Typography>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ minWidth: '12rem', paddingLeft: '1.7rem' }}>
                <Stepper activeStep={activeStep} className={classes.stepper} orientation={'vertical'}>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Tack för din order!
                </Typography>
                  <Typography variant="subtitle1">
                    <Typography>
                      Ditt ordernummer är #{orderNumber}
                    </Typography>
                  Vi har skickat ett email med din orderbekräftelse och kommer att skicka en uppdatering när ordern är på väg.
                </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </Box>
    </React.Fragment>
  );
}