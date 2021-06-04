import React, { useContext } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { Product } from './contexts/ProductContext';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		maxWidth: 345,
	},
	media: {
		height: 200,
	},
	snackbar: {
		width: '100%',
		'& > * + *': {
			marginTop: theme.spacing(2),
		},
	},
}));

interface Props {
	product: Product;
}

export default function ProductCard(props: Props) {
	const classes = useStyles();
	const cart = useContext(CartContext);
	const { title, img, price, _id, imageUrl } = props.product;
	const productUrl = `/produkt/${_id}`;

	function Alert(props: AlertProps) {
		return <MuiAlert elevation={6} variant='filled' {...props} />;
	}

	const [open, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	return (
		<Card className={classes.root}>
			<CardActionArea component={Link} to={productUrl}>
				<CardMedia
					className={classes.media}
					image={imageUrl || img}
					title={title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						Pris: {price} kr
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Grid container justify='flex-end'>
					<Button
						size='small'
						variant='contained'
						color='primary'
						onClick={() => {
							cart.addToCart(props.product);
							handleClick();
						}}
					>
						Lägg i kundvagn
					</Button>
					<Snackbar
						open={open}
						autoHideDuration={6000}
						onClose={handleClose}
					>
						<Alert onClose={handleClose} severity='success'>
							{title} har lagts till i kundvagnen!
						</Alert>
					</Snackbar>
				</Grid>
			</CardActions>
		</Card>
	);
}
