import React, { CSSProperties, useContext, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { OrderContext } from './contexts/OrderContext'
import OrderItem from './OrderItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.primary,
      marginBottom: '1rem',
    },
    link: {
      textDecoration: 'none',
      color: 'grey'
    },
    icon: {
      marginLeft: '1rem'
    }
  }),
);

export default function OrderPage() {
  const { orders, getOrders } = useContext(OrderContext);
  const classes = useStyles();

  useEffect(() => {
    getOrders()
  });

  return (
      <>
          <div className={classes.root}>
              <Container maxWidth="sm">
                  <Box pt={5} pb={5}>
                      <Grid container spacing={2}>
                          <Grid item xs={12} className={classes.paper}>
                              <Typography variant="h5">
                                  <div style={{ marginBottom: '1rem' }}>
                                      Orderhantering
                                   </div>
                              </Typography>
                              <div style={{ borderBottom: '0.1rem solid lightgrey', width: '12rem', margin: 'auto', marginBottom: '2rem' }}>
                              </div>
                              <Grid container spacing={2}>
                                  <Grid item xs={4} >
                                      <Typography variant="body1">Skapad</Typography>
                                  </Grid>
                                  <Grid item xs={4} >
                                      <Typography variant="body1">OrderId</Typography>
                                  </Grid>
                                  <Grid item xs={4} >
                                      <Typography variant="body1">Skickad</Typography>
                                  </Grid>

                              {orders&& (      
                                orders.map((order, index) => (
                                    <OrderItem order={order} key={index}/>
                              )))}
                              </Grid>


                              <div className={classes.paper} style={container}>
                                  <Link className={classes.link} to="/admin">
                                      <Button variant="contained" color="primary" style={{ margin: '1rem' }}>Tillbaka</Button>
                                  </Link>
                                  <Footer />
                              </div>
                          </Grid>
                      </Grid>
                  </Box>
              </Container>
          </div>
      </>
  );
}

const container: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem'
}