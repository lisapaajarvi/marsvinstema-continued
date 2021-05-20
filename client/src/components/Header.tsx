import React, { CSSProperties } from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { Typography, useTheme } from "@material-ui/core";
import { CartContext, CartProduct } from "./contexts/CartContext";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
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
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
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
						<div style={{ marginLeft: "1rem" }}>
							<Typography gutterBottom>
								<Link
									className={classes.header}
									style={linkStyle}
									to="/"
								>
									MARSVINSTEMA
								</Link>
							</Typography>
						</div>
						<div style={{ marginRight: "1rem" }}>
							<Link style={linkStyle} to="/kundvagn">
								<IconButton aria-label="cart">
									<StyledBadge
										badgeContent={cartLength}
										color="secondary"
									>
										<ShoppingCartIcon />
									</StyledBadge>
								</IconButton>
							</Link>
						</div>
					</div>
				);
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
