import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Box, Button } from '@material-ui/core';

interface Props {
  handleNext: () => void;
  customer: Customer;
  onCustomerChange: (customer: Customer) => void;
}

export interface Customer {
  firstName?: string
  lastName?: string
  streetAddress?: string
  zipCode?: string
  city?: string
  phoneNr?: string
}

export default function CustomerForm(props: Props) {
  const { customer, onCustomerChange } = props
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<boolean>(false);
  const [zipError, setZipError] = useState<boolean>(false);
  const [cityError, setCityError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  
  function isAllRequiredFieldsOk() {
    return (
      customer.firstName
      && customer.lastName
      && customer.streetAddress
      && customer.zipCode
      && customer.city
      && customer.phoneNr
    )
  }

  function isFormValid() {
    return (
      isAllRequiredFieldsOk()
      && !firstNameError
      && !lastNameError
      && !addressError
      && !zipError
      && !cityError
      && !phoneNumberError
    )
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/[a-ö][A-Ö]/.test(e.target.value)) {  
      setFirstNameError(false);
    }
    else {
      setFirstNameError(true);
    }
      onCustomerChange({ ...customer, firstName: e.target.value });
  };
  
  const handleLastNameChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/[a-ö][A-Ö]/.test(e.target.value)) {  
      setLastNameError(false);
    }
    else {
     setLastNameError(true);
    }
    onCustomerChange({ ...customer, lastName: e.target.value });
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{3,}$/.test(e.target.value)) {  
      setAddressError(false);
    }
    else {
      setAddressError(true);
    }
    onCustomerChange({ ...customer, streetAddress: e.target.value });
  };
  
  const handleZipChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^[0-9]{3}\s?[0-9]{2}$/.test(e.target.value)) {  
      setZipError(false);
    }
    else {
     setZipError(true);
    }
    onCustomerChange({ ...customer, zipCode: e.target.value });
  };
  
  const handleCityChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/[a-ö][A-Ö]/.test(e.target.value)) {  
      setCityError(false);
    }
    else {
      setCityError(true);
    }
    onCustomerChange({ ...customer, city: e.target.value });
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^07([0-9][ -]*){7}[0-9]$/.test(e.target.value)) {  
      setPhoneNumberError(false);
    }
    else {
      setPhoneNumberError(true);
    }
    onCustomerChange({ ...customer, phoneNr: e.target.value });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Leveransadress
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.firstName}
            onChange={handleFirstNameChange}
            required
            id="firstName"
            name="firstName"
            label="Förnamn"
            fullWidth
            autoComplete="given-name"
            helperText={firstNameError && "Fyll i ditt förnamn"}
            error={firstNameError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.lastName}
            onChange={handleLastNameChange}
            required
            id="lastName"
            name="lastName"
            label="Efternamn"
            fullWidth
            autoComplete="family-name"
            helperText={lastNameError && "Fyll i ditt efternamn"}
            error={lastNameError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.streetAddress}
            onChange={handleAddressChange}
            required
            id="address"
            name="address"
            label="Gatuadress"
            fullWidth
            autoComplete="shipping address-line1"
            helperText={addressError && "Fyll i din adress"}
            error={addressError}
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.zipCode}
            onChange={handleZipChange}
            required
            id="zip"
            name="zip"
            label="Postnummer"
            fullWidth
            autoComplete="shipping postal-code"
            helperText={zipError && "Fyll i ditt postnummer"}
            error={zipError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.city}
            onChange={handleCityChange}
            required
            id="city"
            name="city"
            label="Ort"
            fullWidth
            autoComplete="shipping address-level2"
            helperText={cityError && "Fyll i din postort"}
            error={cityError}
          />
        </Grid>  
        <Grid item xs={12} sm={6}>
          <TextField
            value={customer.phoneNr}
            onChange={handlePhoneNumberChange}
            required
            id="phoneNumber"
            name="phonenumber"
            label="Mobilnummer"
            fullWidth
            autoComplete="tel"
            helperText={phoneNumberError && "Ange ett korrekt mobilnummer"}
            error={phoneNumberError}
          />
        </Grid>
        <Grid container justify="space-evenly">
          <Box m={2}>
            <Button disabled={!isFormValid()} variant="contained" color="primary" onClick={props.handleNext}>
              Nästa
            </Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
