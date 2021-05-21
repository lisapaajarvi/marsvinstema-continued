import React, { useState, CSSProperties, useContext } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { Typography, useTheme } from '@material-ui/core';
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
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TreeItem from "@material-ui/lab/TreeItem";
import axios from 'axios';

const drawerWidth = 240;

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0px",
	},
}))(Badge);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			padding: theme.spacing(1),
			[theme.breakpoints.down("xs")]: {
				fontSize: "2rem",
			},
			[theme.breakpoints.up("sm")]: {
				fontSize: "3rem",
			},
			[theme.breakpoints.up("md")]: {
				fontSize: "4.5rem",
			},
		},
		root1: {
			display: "flex",
		},
		root: {
			height: 240,
			flexGrow: 1,
			maxWidth: 400,
		},
		menuButton: {
			color: "##f8f7f7",
			marginRight: theme.spacing(2),
		},
		hide: {
			display: "none",
		},
		drawer: {
			width: drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		drawerHeader: {
			display: "flex",
			alignItems: "center",
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: "flex-end",
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			marginLeft: -drawerWidth,
		},
		contentShift: {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	}),
);

function Header() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [openSignup, setOpenSignup] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const { user, setUserInContext } = useContext(UserContext)

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

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

	const signup = ()=> {
	  const newUser = {
	    username: username,
		email: email,
	    password: password,
	  }
	  console.log(newUser)
	  axios
	    .post('/api/users', newUser)
	    .then(res => {
	      console.log(res)
	      setUsername('')
	      setEmail('')
	      setPassword('')
	      setOpenSignup(false);
	      alert('New user created!');
	  })
	}

	// const login = ()=> {
	//   const body = {
	//     email: email,
	//     password: password
	//   }
	//   axios
	//     .post('/api/users/login', body)
	//     .then(({ data: user }) => {
	//       setUserInContext(user)
	//       setOpenLogin(false);          
	//       setPassword('')
	//       setEmail('')
	//   })
	// }

	const handleSignupUsername = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setUsername(e.target.value)
	}

	const handleSignupEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handleSignupPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setPassword(e.target.value)
	}

	const handleLoginEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setEmail(e.target.value)
	}

	const handleLoginPassword = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setPassword(e.target.value)
	}

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
						<div className={classes.root1}>
							<CssBaseline />
							<Toolbar>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									onClick={handleDrawerOpen}
									edge="start"
									className={clsx(
										classes.menuButton,
										open && classes.hide,
									)}
								>
									<MenuIcon />
								</IconButton>
							</Toolbar>
							<Drawer
								className={classes.drawer}
								variant="persistent"
								anchor="left"
								open={open}
								classes={{
									paper: classes.drawerPaper,
								}}
							>
								<div className={classes.drawerHeader}>
									<IconButton onClick={handleDrawerClose}>
										{theme.direction === "ltr" ? (
											<ChevronLeftIcon />
										) : (
											<ChevronRightIcon />
										)}
									</IconButton>
								</div>
								<Divider />
								<TreeView
									className={classes.root}
									defaultCollapseIcon={<ExpandMoreIcon />}
									defaultExpandIcon={<ChevronRightIcon />}
								>
									<TreeItem nodeId="1" label="Kategorier">
										<TreeItem nodeId="2" label="Leksaker" />
										<TreeItem nodeId="3" label="Mat" />
										<TreeItem nodeId="4" label="Kläder" />
										<TreeItem nodeId="5" label="Hygien" />
									</TreeItem>
								</TreeView>
							</Drawer>
							<main
								className={clsx(classes.content, {
									[classes.contentShift]: open,
								})}
							>
								<div className={classes.drawerHeader} />
							</main>
						</div>
						{/* <div>{CategoryDrawer}</div> */}


						<div style={{ marginLeft: '1rem' }}>
							<Typography gutterBottom>
								<Link
									className={classes.header}
									style={linkStyle}
									to="/">
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
											id="username"
											label="Username"
											type="text"
											value={username}
											onChange={handleSignupUsername}
											fullWidth
										/>
										<TextField
											autoFocus
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
										<Button onClick={signup} variant="contained" color="primary">
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
	);
}

const headerStyle: CSSProperties = {
	background:
		"linear-gradient(90deg, rgba(7,0,129,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
	height: "6rem",
	display: "flex",
	alignItems: "center",
	textAlign: "left",
	justifyContent: "flex-start",
};

const linkStyle: CSSProperties = {
	textDecoration: "none",
	color: "white",
	fontFamily: "Changa One",
};

export default Header;
