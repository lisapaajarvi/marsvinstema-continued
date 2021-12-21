import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { Box, Button } from "@material-ui/core";
import { CartContext } from "./contexts/CartContext";
import { Customer } from "./CustomerForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import { CardInfo } from "./CardPayment";
import { ShippingMethod } from "./contexts/OrderContext";
import { UserContext } from "./contexts/newContext";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
  customer: Customer;
  paymentOption: string;
  shippingMethod: ShippingMethod;
  isLoading: boolean;
  cardInfo: CardInfo;
  totalPrice: number;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
    padding: theme.spacing(1, 0),
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props: Props) {
  const classes = useStyles();
  const {
    customer,
    paymentOption,
    shippingMethod,
    isLoading,
    cardInfo,
    totalPrice,
  } = props;
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Beställning
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem className={classes.listItem} key={product.title}>
            <ListItemText primary={product.title} />
            <Typography variant="body1">
              {product.quantity} st à {product.price} kr
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Fraktkostnad" />
          <Typography variant="body1">{shippingMethod.price} kr</Typography>
        </ListItem>
        <ListItem className={classes.total}>
          <ListItemText primary="Att betala:" />
          <Typography variant="h6" className={classes.total}>
            {totalPrice} kr
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText />
          <Typography variant="body2">
            <i>(varav moms {Math.round(totalPrice * 0.2)} kr)</i>
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Dina uppgifter
          </Typography>
          <Typography gutterBottom>
            {customer.firstName} {customer.lastName}
          </Typography>
          <Typography gutterBottom>{customer.streetAddress}</Typography>
          <Typography gutterBottom>
            {customer.zipCode} {customer.city}
          </Typography>
          <br />
          <Typography gutterBottom>{customer.phoneNr}</Typography>
          <Typography gutterBottom>{user!.email}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Betalsätt
          </Typography>
          <Grid container>
            <Typography gutterBottom>{paymentOption}</Typography>
          </Grid>
          {paymentOption === "Bankkort" && (
            <Grid item>
              <Typography gutterBottom variant="body2">
                Namn: {cardInfo.name}
              </Typography>
              <Typography gutterBottom variant="body2">
                Kortnummer: {cardInfo.cardNumber!.substring(0, 4)} XXXX XXXX
                XXXX
              </Typography>
              <Typography gutterBottom variant="body2">
                Utgångsdatum: {cardInfo.expireDate}
              </Typography>
              <Typography gutterBottom variant="body2">
                Säkerhetskod: XXX
              </Typography>
            </Grid>
          )}
        </Grid>
        <Grid container justify="space-evenly">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              <Box m={1}>
                <Button color="primary" onClick={props.handleBack}>
                  Tillbaka
                </Button>
              </Box>
              <Box m={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.handleNext}
                >
                  Slutför köp
                </Button>
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
