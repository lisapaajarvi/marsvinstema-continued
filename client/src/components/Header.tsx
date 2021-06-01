import React, { useState, CSSProperties, useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { CartContext, CartProduct } from './contexts/CartContext';
import ProfileCard from './ProfileCard';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { Button, Hidden } from '@material-ui/core';
import { UserContext } from './contexts/UserContext';
import CategoryBar from './CategoryBar';
import '../css/header.css';

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0px',
	},
}))(Badge);

function Header() {
	const [openLogin, setOpenLogin] = useState(false);
	const [openSignup, setOpenSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const { user, login, signup } = useContext(UserContext);
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
		alert('New user created!');
	};

	return (
		<CartContext.Consumer>
			{({ cart }) => {
				const getCartLength = (cartCount: CartProduct[]) => {
					let length = 0;
					cartCount.forEach((CartProduct) => {
						length += CartProduct.quantity;
					});
					return length;
				};

				let cartLength = getCartLength(cart);

				return (
					<div className="headerContainer">
						<div className="headerStyle">
							<div style={{ marginLeft: '1rem' }}>
								<Typography>
									<Link className="logoStyle" to="/">
										MARSVINSTEMA
									</Link>
								</Typography>
							</div>
							<Hidden smUp>
								<Link style={cartStyle} to="/kundvagn">
									<IconButton aria-label="cart">
										<StyledBadge
											badgeContent={cartLength}
											color="secondary"
											style={{
												color: '#F0F0F0',
												marginRight: '1rem',
												marginLeft: '0rem',
											}}
										>
											<ShoppingCartIcon />
										</StyledBadge>
									</IconButton>
								</Link>
							</Hidden>
							<div
								style={{
									display: 'flex',
									marginRight: '1rem',
									alignItems: 'center',
								}}
							>
								<div>
									<Hidden xsDown>
										<Link style={cartStyle} to="/kundvagn">
											<IconButton aria-label="cart">
												<StyledBadge
													badgeContent={cartLength}
													color="secondary"
													style={{
														color: '#F0F0F0',
														marginRight: '1rem',
														marginLeft: '0rem',
													}}
												>
													<ShoppingCartIcon />
												</StyledBadge>
											</IconButton>
										</Link>
									</Hidden>
								</div>
								<div>
									{!user ? (
										<div className="buttonContainer">
											<Button
												size="medium"
												variant="contained"
												color="primary"
												style={buttonStyle}
												onClick={openLoginModal}
											>
												LOGGA IN
											</Button>
											<Button
												size="medium"
												variant="contained"
												color="primary"
												style={buttonStyle}
												onClick={openSignupModal}
											>
												REGISTRERA
											</Button>
											<Dialog
												open={openLogin}
												onClose={handleLoginClose}
												aria-labelledby="form-dialog-login"
											>
												<DialogTitle id="login">
													Logga in
												</DialogTitle>
												<DialogContent>
													<TextField
														autoFocus
														margin="dense"
														id="email"
														label="E-mail"
														type="text"
														onChange={handleLoginEmail}
														defaultValue={email}
														fullWidth
													/>
													<TextField
														margin="dense"
														id="password"
														label="Lösenord"
														type="password"
														onChange={handleLoginPassword}
														defaultValue={password}
														fullWidth
													/>
												</DialogContent>
												<DialogActions>
													<Button
														onClick={handleLoginClose}
														color="primary"
													>
														Tillbaka
													</Button>
													<Button
														onClick={handleLogin}
														variant="contained"
														color="primary"
													>
														Bekräfta
													</Button>
												</DialogActions>
											</Dialog>
											<Dialog
												open={openSignup}
												onClose={handleSignupClose}
												aria-labelledby="form-dialog-signup"
											>
												<DialogTitle id="signup">
													Registrering
												</DialogTitle>
												<DialogContent>
													<TextField
														autoFocus
														margin="dense"
														id="username"
														label="Användarnamn"
														type="text"
														value={username}
														onChange={handleSignupUsername}
														fullWidth
													/>
													<TextField
														margin="dense"
														id="email"
														label="E-mail"
														type="text"
														value={email}
														onChange={handleSignupEmail}
														fullWidth
													/>
													<TextField
														margin="dense"
														id="password"
														label="Lösenord"
														type="password"
														onChange={handleSignupPassword}
														value={password}
														fullWidth
													/>
												</DialogContent>
												<DialogActions>
													<Button
														onClick={handleSignupClose}
														color="primary"
														style={buttonStyle}
													>
														Tillbaka
													</Button>
													<Button
														onClick={handleSignup}
														variant="contained"
														color="primary"
														style={buttonStyle}
													>
														Bekräfta
													</Button>
												</DialogActions>
											</Dialog>
										</div>
									) : (
										<div style={{ marginLeft: '1rem' }}>
											<ProfileCard />
										</div>
									)}
								</div>
							</div>
						</div>
						<div>
							<CategoryBar />
						</div>
					</div>
				);
			}}
		</CartContext.Consumer>
	);
}

const buttonStyle: CSSProperties = {
	margin: '0.5rem',
};

const cartStyle: CSSProperties = {
	textDecoration: 'none',
	color: 'white',
};

export default Header;
