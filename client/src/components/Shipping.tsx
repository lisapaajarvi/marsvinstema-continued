import React, { useContext } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { OrderContext, ShippingMethod } from './contexts/OrderContext';

interface Props {
  handleNext: () => void;
  handleBack: () => void;
  chosenShippingMethod: ShippingMethod
  setChosenShippingMethod: (newShippingMethod: ShippingMethod) => void;
}

export default function Shipping(props: Props) {
  const { chosenShippingMethod, setChosenShippingMethod } = props
  const { shippingMethods } = useContext(OrderContext)
  
  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newShippingMethod = shippingMethods?.find(({ name }) => name === event.target.value)
    if(newShippingMethod) {
      setChosenShippingMethod(newShippingMethod);
    }
  };

  function calculateDeliveryDate(days: number) {
    let today = new Date();
    today.setDate(today.getDate() + (days));
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    let day = yyyy + '-' + mm + '-' + dd;
    return day;
  }
  
  return (   
      <React.Fragment>
        <FormControl component="fieldset">
          <FormLabel component="legend">Välj fraktsätt</FormLabel>
          <RadioGroup aria-label="shipping" name="shipping1" value={chosenShippingMethod.name} onChange={handleShippingChange}>

          {shippingMethods!.map((method, index) => (
            <div key= {index}>
              <FormControlLabel value={method.name} control={<Radio color="primary" />} label={method.name} />
              <Typography style={{ fontWeight: 600 }}>
                Fraktkostnad: {method.price} kr
              </Typography>
              <span>Leveransdatum: {calculateDeliveryDate(Number(method.expectedDeliveryTime))} ({method.expectedDeliveryTime} dagar)</span>
            </div>
                ))}
          </RadioGroup>
        </FormControl>
        <Grid container justify="space-evenly">
          <Box m={1}>
            <Button color="primary" onClick={props.handleBack}>
              Tillbaka
            </Button>
          </Box>
          <Box m={1}>
            <Button variant="contained" color="primary" onClick={props.handleNext}>
              Nästa
            </Button>
          </Box>
        </Grid>
      </React.Fragment>
    );
  }
          