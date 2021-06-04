import React, { CSSProperties, useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
	Box,
	Button,
	Container,
	Grid,
	Paper,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import CartItem from './CartItem';
import { UserContext } from './contexts/UserContext';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(3),
			textAlign: 'center',
			color: theme.palette.text.secondary,
			backgroundImage: 'linear-gradient(20deg, rgb(230, 230, 230), white)',
			boxShadow:
				'0 6px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 20%)',
		},
	}),
);

export default function Cart() {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [openSignup, setOpenSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [openLogin, setOpenLogin] = useState(false);
	const { user, login, signup } = useContext(UserContext);
	const { cart } = useContext(CartContext);

	function getTotalPrice() {
		let total = 0;
		cart.forEach((item) => {
			const subtotal = item.price * item.quantity;
			total += subtotal;
		});
		return total;
	}
	const totalPrice = getTotalPrice();

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
	const handleSignupUsername = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setUsername(e.target.value);
	};
	const handleSignupEmail = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setEmail(e.target.value);
	};
	const handleSignupPassword = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setPassword(e.target.value);
	};
	const handleLoginEmail = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setEmail(e.target.value);
	};
	const handleLoginPassword = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setPassword(e.target.value);
	};
	const handleLogin = () => {
		const loginBody = {
			email: email,
			password: password,
		};
		login(loginBody);
		setOpenLogin(false);
		setPassword('');
		setEmail('');
	};
	const handleSignup = () => {
		const newUser = {
			username: username,
			email: email,
			password: password,
		};
		signup(newUser);
		setUsername('');
		setEmail('');
		setPassword('');
		setOpenSignup(false);
	};

	return (
		<div className={classes.root}>
			<Container maxWidth='md'>
				<Box pt={3} pb={3}>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Box pb={2}>
									<Typography variant='h4'>Kundvagn</Typography>
								</Box>
								{cart.map((product, index) => (
									<CartItem product={product} key={index} />
								))}
								<Box pt={3} pb={2}>
									<Typography
										variant='h5'
										style={{ fontWeight: 'bold' }}
									>
										Summa: {totalPrice} kr
									</Typography>
								</Box>
								<Box m={0} pt={0}>
									<Grid container justify='space-evenly'>
										<Box m={1}>
											<Link style={linkStyle} to='/'>
												<Button variant='contained' color='primary'>
													Tillbaka
												</Button>
											</Link>
										</Box>
										{user ? (
											<Box m={1}>
												<Link style={linkStyle} to='/checkout'>
													<Button
														variant='contained'
														color='primary'
													>
														Gå till kassan
													</Button>
												</Link>
											</Box>
										) : (
											<div>
												<Button
													size='medium'
													variant='contained'
													color='primary'
													style={buttonStyle}
													onClick={openLoginModal}
												>
													Logga in
												</Button>
												<Button
													size='medium'
													variant='contained'
													color='primary'
													style={buttonStyle}
													onClick={openSignupModal}
												>
													Registrera
												</Button>
												<p>
													Logga in eller registrera dig för att
													fortsätta till kassan
												</p>

												<Dialog
													open={openLogin}
													onClose={handleLoginClose}
													aria-labelledby='form-dialog-login'
												>
													<DialogTitle id='login'>
														Logga in
													</DialogTitle>
													<DialogContent>
														<TextField
															autoFocus
															margin='dense'
															id='email'
															label='E-mail'
															type='text'
															onChange={handleLoginEmail}
															defaultValue={email}
															fullWidth
														/>
														<TextField
															margin='dense'
															id='password'
															label='Lösenord'
															type='password'
															onChange={handleLoginPassword}
															defaultValue={password}
															fullWidth
														/>
													</DialogContent>
													<DialogActions>
														<Button
															onClick={handleLoginClose}
															color='primary'
														>
															Tillbaka
														</Button>
														<Button
															onClick={handleLogin}
															variant='contained'
															color='primary'
														>
															Bekräfta
														</Button>
													</DialogActions>
												</Dialog>
												<Dialog
													open={openSignup}
													onClose={handleSignupClose}
													aria-labelledby='form-dialog-signup'
												>
													<DialogTitle id='signup'>
														Registrering
													</DialogTitle>
													<DialogContent>
														<TextField
															autoFocus
															margin='dense'
															id='username'
															label='Användarnamn'
															type='text'
															value={username}
															onChange={handleSignupUsername}
															fullWidth
														/>
														<TextField
															margin='dense'
															id='email'
															label='E-mail'
															type='text'
															value={email}
															onChange={handleSignupEmail}
															fullWidth
														/>
														<TextField
															margin='dense'
															id='password'
															label='Lösenord'
															type='password'
															onChange={handleSignupPassword}
															value={password}
															fullWidth
														/>
													</DialogContent>
													<DialogActions>
														<Button
															onClick={handleSignupClose}
															color='primary'
															style={buttonStyle}
														>
															Tillbaka
														</Button>
														<Button
															onClick={handleSignup}
															variant='contained'
															color='primary'
															style={buttonStyle}
														>
															Bekräfta
														</Button>
													</DialogActions>
												</Dialog>
											</div>
										)}
									</Grid>
								</Box>
							</Paper>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
}

const linkStyle: CSSProperties = {
	textDecoration: 'none',
};

const buttonStyle: CSSProperties = {
	margin: '0.5rem',
};
