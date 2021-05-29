import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import Switch from '@material-ui/core/Switch';

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
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

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
                                  <Grid item xs={3} sm={2} md={2} lg={1}>
                                  </Grid>
                                  <Grid item xs={5} sm={3} md={2} lg={2}>
                                      <Typography variant="body1">Skapad</Typography>
                                  </Grid>
                                  <Grid item xs={6} sm={4} md={4} lg={6}>
                                      <Typography variant="body1">Användare</Typography>
                                  </Grid>
                                  <Grid item xs={4} sm={3} md={1} lg={1}>
                                      <Typography variant="body1">Skickad</Typography>
                                      <Switch
                                          checked={state.checkedB}
                                          onChange={handleChange}
                                          color="primary"
                                          name="checkedB"
                                          inputProps={{ 'aria-label': 'primary checkbox' }}
                                      />
                                  </Grid>
                                  <Grid item xs={12} sm={1}>
                                      <Typography variant="body1"></Typography>
                                  </Grid>
                              </Grid>

                              {/* ORDER MAPPING GOES HERE */}

                              {/* {orders.map((orders, index) => (
                                <Grid item xs={12} key={index}>
                                  <OrderItem orders={orders} />
                                </Grid>
                              ))} */}

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