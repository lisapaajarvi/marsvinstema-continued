import React, { CSSProperties, useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { ProductContext } from './contexts/ProductContext';
import { Link } from 'react-router-dom';

export default function CategoryBar() {
	// const [category, setCategory] = useState(Alla);
	const { categories, products } = useContext(ProductContext);
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	// const [categories, setCategories] = useState<[string] | any>();

	// const Products = ({ category }) => {
	// const productsPerCategory = getProductsGroupedByCategory(category.source);
	// const handleListItemClick = (
	// 	event: React.MouseEvent<HTMLDivElement, MouseEvent>,
	// 	index: number,
	// ) => {
	// 	setSelectedIndex(index);
	// };
	// const [category, setCategory] = useState('Alla');
	// 	const category_MAP = {
	// 		Alla: () => true,
	// 		Leksaker: product => product.completed,
	// 		Kläder: product => product.completed
	// 		Mat: product => product.completed
	// 		Övrigt: product => product.completed
	// 	};
	// 	const category_NAMES = Object.keys(category_MAP);
	// 	const categoryList = category_NAMES.map(name => (
	// <CategoryButton
	// 	key={name}
	// 	name={name}
	// 	//  isPressed={name === category}
	// 	setCategory={setCategory}
	// />
	// ));
	// 	const productList = products
	// .filter(category_MAP[category])
	// .map(product => (
	// <Todo
	// 	id={product.id}
	// 	name={product.name}
	// 	completed={product.completed}
	// 	key={product.id}
	// />
	// ));

	// const [category, setcategory] = useState('Alla');
	// const [filteredProducts, setFilteredProducts] = useState([]);

	// useEffect(() => {
	// 	category === 'all'
	// 		? setFilteredProducts(products)
	// 		: setFilteredProducts(products.filter((product) => product.category === category));
	// }, [category]);

	// const CategoryButton = ({ name, handleSetcategory, CategoryActive }) => {
	// 	return (
	// 		<button
	// 			className={`category ${categoryActive ? 'active' : null}`}
	// 			onClick={() => handleSetcategory(name)}
	// 		>
	// 			{name.toUpperCase()}
	// 		</button>
	// 	);
	// };

	return (
		<div className={classes.root}>
			<List
				component="nav"
				aria-label="main mailbox folders"
				style={{ display: 'flex', flexDirection: 'row' }}
			>
				<ListItem>
					<Link to="/" style={linkStyle}>
						<ListItemText primary="Alla" style={linkStyle} />
					</Link>
				</ListItem>

				{/* HÄR BEHÖVER VI SKICKA VIDARE NÅT MED VARJE LÄNK SOM TAS EMOT I CATEGORYVIEW.TSX*/}
				{/* SKAPA EN PORTAL? PROP? CONTEXT? */}
				{categories.map((category, index) => (
					<ListItem
						component={Link}
						to={`/category/${category}`}
						key={index}
						button
						// selected={selectedIndex === index}
						// onClick={handleListItemClick}
					>
						<ListItemText primary={category} />
					</ListItem>
				))}
			</List>
			{/* <List
				component="nav"
				aria-label="main mailbox folders"
				className={classes.flexDirectionRow}
			>
				<ListItem button onClick={(event) => handleListItemClick(event, 1)}>
					<Link to="/" style={linkStyle}>
						<ListItemText primary="Alla" />
					</Link>
				</ListItem>
				{products
					.filter((product) => product.categories)
					.map((filteredProduct) => (
						<li>{filteredProduct.categories}</li>
					))}
				{/* {categories.map((category, index) => (
                <ListItem key={index} button
                selected={selectedIndex === index}
						onClick={(event) => handleListItemClick(event, index)}
						// aria-pressed={props.isPressed}
      				onClick={() => props.setFilter(props.name)}>
                    <ListItemText primary={category}/>
                </ListItem>
            ))} */}
			{/* {categoryName === 'all' ? { ' '} categories.map((category, index) => */}
			{/* category==='all'? productPerCategory.map(({ products, category }, index) =>  */}
			{/* {category==='Alla'? productPerCategory.map((category, index) =>  */}
			{/* (
					<ListItem
						key={index}
						button
						selected={selectedIndex === index}
						onClick={() => setCategory(category.name)}>
						{category.name}
						 onClick={(event) => handleListItemClick(event, index)}
					>
						<ListItemText primary={category.name} />
					</ListItem>
				))} */}
			{/* </List> */}
		</div>
	);
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
			borderBottom: '1px solid lightgray',
		},
		flexDirectionRow: {
			display: 'flex',
			flexDirection: 'row',
		},
	}),
);
const linkStyle: CSSProperties = {
	textDecoration: 'none',
	color: 'black',
};

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// import DraftsIcon from '@material-ui/icons/Drafts';

// const handleCategoryClick = () => {
// 	console.log('clicked');
// };

// function getProductList() {
// 	const productListFromLS = localStorage.getItem('productList');
// 	if (productListFromLS) {
// 		return JSON.parse(productListFromLS) as Product[];
// 	}
// 	localStorage.setItem('productList', JSON.stringify(mockedProducts));
// 	return mockedProducts;
// }

// const productList = getProductList();
