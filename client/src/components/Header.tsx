import React, { useState, CSSProperties, useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CartContext, CartProduct } from './contexts/CartContext';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ProfileCard from './ProfileCard'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { UserContext } from './contexts/UserContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0px',
    },
}))(Badge);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
       padding: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
       fontSize: '2rem',
      },
      [theme.breakpoints.up('sm')]: {
       fontSize: '3rem',
      },
      [theme.breakpoints.up('md')]: {
       fontSize: '4.5rem',
      },
    },
  }),
);


function Header() { 
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user } = useContext(UserContext)
    
    const handleLoginClose = () => {
        setOpenLogin(false);
    };
    
    function openLoginModal() {
        setOpenLogin(true);
    }
    
    const handleSignupClose = () => {
        setOpenSignup(false);
    };
    
    function openSignupModal() {
        setOpenSignup(true);
    }
    
    // const signup = ()=> {
    //   const newUser = {
    //     username: username,
    //     password: password,
    //   }
    //   console.log(newUser)
    //   axios
    //     .post('/api/users/register', newUser)
    //     .then(res => {
    //       console.log(res)
    //       setPassword('')
    //       setUsername('')
    //       setOpenSignup(false);
    //       alert('New user created!');
    //   })
    // }
    
    // const login = ()=> {
    //   const body = {
    //     username: username,
    //     password: password
    //   }
    //   axios
    //     .post('/api/users/login', body)
    //     .then(({ data: user }) => {
    //       setUser(user);
    //       setOpenLogin(false);          
    //       setPassword('')
    //       setUsername('')
    //   })
    // }
    
    const handleSignupUsername = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUsername(e.target.value)
    }
    const handleSignupPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPassword(e.target.value)
    }
    
    const handleLoginUsername = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setUsername(e.target.value)
    }
    
    const handleLoginPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPassword(e.target.value)
    }

    const classes = useStyles();
    console.log(user)
    return (
        <CartContext.Consumer>
            {({ cart }) => {
                const getCartLength = (cartCount: CartProduct[]) => {
                    let length = 0;
                    cartCount.forEach((CartProduct) => {
                        length += CartProduct.quantity
                    })
                    return length;                    
                }
                
                let cartLength = getCartLength(cart)

                return (
                    <div style={headerStyle}>
                        <div style={{ marginLeft: '1rem' }}>
                            <Typography gutterBottom>
                                <Link className={classes.header} style={linkStyle} to="/">
                                    MARSVINSTEMA
                                </Link>
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', marginRight: '1rem', alignItems: 'center' }}>


                        {/* {!user? ( */}

          <div className="buttonContainer">

            <Button size="medium" variant="contained" onClick={openLoginModal}>LOGIN</Button>
            <Button size="medium" variant="contained" onClick={openSignupModal}>SIGNUP</Button>

          <Dialog open={openLogin} onClose={handleLoginClose} aria-labelledby="form-dialog-login">
            <DialogTitle id="login">Login</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                onChange={handleLoginUsername}
                defaultValue={username}
                fullWidth
                />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handleLoginPassword}
                defaultValue={password}
                fullWidth
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleLoginClose} color="primary">
                Go back
                  </Button>
              <Button onClick={handleLoginClose} variant="contained" color="primary">
                Submit
                  </Button>
            </DialogActions>
          </Dialog>

          <Dialog open={openSignup} onClose={handleSignupClose} aria-labelledby="form-dialog-signup">
            <DialogTitle id="signup">Signup</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="text"
                value={username}
                onChange={handleSignupUsername}
                fullWidth
                />
              <TextField
                margin="dense"
                id="password"
                label="Password"
                type="password"
                onChange={handleSignupPassword}
                value={password}
                fullWidth
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignupClose} color="primary">
                Go back
                  </Button>
              <Button onClick={handleSignupClose} variant="contained" color="primary">
                Register
                  </Button>
            </DialogActions>
          </Dialog>

        </div> 
        {/* ):(  */}
          <ProfileCard />
          {/* )} */}
      </div>
      <div>
                            <Link style={linkStyle} to="/kundvagn">
                                <IconButton aria-label="cart">
                                    <StyledBadge badgeContent={cartLength} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </div>
                    </div>
                )
            }}
        </CartContext.Consumer>        
    )
}

const headerStyle: CSSProperties = {
    background: 'linear-gradient(90deg, rgba(7,0,129,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between'
}

const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: 'white',
    fontFamily: 'Changa One'
}

export default Header;