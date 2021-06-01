import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container } from '@material-ui/core';
import ProductCard from './ProductCard';
import { Footer } from './Footer';
import { ProductContext } from './contexts/ProductContext';

export default function ProductView() {
	const { products } = useContext(ProductContext);
	const classes = useStyles();

	// HÄR BEHÖVER VI TA EMOT ETT VÄRDE FRÅN CATEGORYBAR
	// SOM VI SEDAN DYNAMISKT MAPPAR UT DESSA FILTRERADE PRODUKTER

	return (
		<div className={classes.root}>
			<Container maxWidth="lg">
				<Box pt={5} pb={0}>
					<Grid container spacing={3}>
						{products.map((product, index) => (
							<Grid
								item
								className={classes.item}
								xs={12}
								sm={6}
								md={3}
								key={index}
							>
								<ProductCard product={product} />
							</Grid>
						))}
					</Grid>
					<Button variant="contained">HEJ</Button>
					<Button variant="contained">PÅ</Button>
					<Button variant="contained">DIG</Button>
				</Box>
				<Footer />
			</Container>
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		item: {
			display: 'flex',
			justifyContent: 'center',
		},
	}),
);

// function getProductList() {
//   const productListFromLS = localStorage.getItem('productList');
//   if (productListFromLS) {
//     return JSON.parse(productListFromLS) as Product[]
//   }
//   localStorage.setItem('productList', JSON.stringify(mockedProducts));
//   return mockedProducts;
// }

// const productList = getProductList();
