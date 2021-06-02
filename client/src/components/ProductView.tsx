import { useEffect, useState, useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Container } from '@material-ui/core';
import ProductCard from './ProductCard';
import { Footer } from './Footer';
import { Product, ProductContext } from './contexts/ProductContext';
import './ProductView.css';

interface CategoryButtonProps {
	name: string;
	handleSetCategories: any;
	categoriesActive: any;
}

export default function ProductView() {
	const { products } = useContext(ProductContext);
	const classes = useStyles();
	const [categories, setCategories] = useState('Alla');
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

	useEffect(() => {
		categories === 'Alla'
			? setFilteredProducts(products)
			: setFilteredProducts(
					products.filter((products) =>
						products.categories.includes(categories),
					),
			  );
	}, [categories, products]);

	return (
		<div className={classes.root}>
			<div className={classes.categories}>
				<CategoryButton
					name="Alla"
					categoriesActive={categories === 'Alla' ? true : false}
					handleSetCategories={setCategories}
				/>{' '}
				<CategoryButton
					name="Leksaker"
					categoriesActive={categories === 'Leksaker' ? true : false}
					handleSetCategories={setCategories}
				/>{' '}
				<CategoryButton
					name="Kläder"
					categoriesActive={categories === 'Kläder' ? true : false}
					handleSetCategories={setCategories}
				/>{' '}
				<CategoryButton
					name="Mat"
					categoriesActive={categories === 'Mat' ? true : false}
					handleSetCategories={setCategories}
				/>
			</div>
			<Container maxWidth="lg">
				<Box pt={5} pb={0}>
					<Grid container spacing={3}>
						{filteredProducts.map((product, index) => (
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
				</Box>
				<Footer />
			</Container>
		</div>
	);
}

const CategoryButton = ({
	name,
	handleSetCategories,
	categoriesActive,
}: CategoryButtonProps) => {
	return (
		<button
			// className="category"
			className={`category ${categoriesActive ? 'active' : null}`}
			onClick={() => handleSetCategories(name)}
		>
			{name.toUpperCase()}
		</button>
	);
};

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
			margin: 'auto',
		},
		categories: {
			textAlign: 'center',
			padding: '20px 0px',
			backgroundColor: 'rgb(43, 92, 226)',
		},
		category: {
			outline: 'none',
			border: 'none',
			color: '#eee',
			margin: '0px 10px',
			backgroundColor: 'transparent',
			cursor: 'pointer',
		},
		active: {
			fontWeight: 'bold',
			bordeBottom: '1px solid #eee',
		},
	}),
);
// const category: CSSProperties = {
// 	outline: 'none',
// 	border: 'none',
// 	color: '#eee',
// 	margin: '0px 10px',
// 	backgroundColor: 'transparent',
// 	cursor: 'pointer',
// };
