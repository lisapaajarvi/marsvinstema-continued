import React, { CSSProperties } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Footer } from './Footer';

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

export default function AdminPage() {
  const classes = useStyles();

  return (
      <>
          <div className={classes.root}>
              <Container maxWidth="sm">
                  <Box pt={5} pb={5}>
                      <Grid container spacing={2}>
                          <Grid item xs={12} className={classes.paper}>
                              <Typography variant="h5">
                                    <div style={{ marginBottom: '1rem' }}>
                                        Administratörspanel
                                    </div>
                              </Typography>
                              <div style={{ borderBottom: '0.1rem solid lightgrey', width: '16rem', margin: 'auto' }}>
                              </div>
                              <div className={classes.paper} style={container}>
                                  <Link className={classes.link} to="/crud">
                                      <Button variant="contained" color="primary" size="large" style={{ margin: '1rem' }}>Hantera produkter</Button>
                                  </Link>
                                  <Link className={classes.link} to="/orders">
                                      <Button variant="contained" color="primary" size="large" style={{ margin: '1rem' }}>Hantera ordrar</Button>
                                  </Link>
                                  <Link className={classes.link} to="/">
                                      <Button variant="contained" color="primary" size="large" style={{ margin: '1rem' }}>Tillbaka</Button>
                                  </Link>
                                  <Footer/>
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