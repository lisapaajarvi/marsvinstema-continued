// import { Button } from '@material-ui/core';
// import React, { useState, useContext } from 'react';
// import { ProductContext } from './contexts/ProductContext';

// const allCategories = ['All', ...new Set(items.map((item: { category: any; }) => item.category))];

// console.log(allCategories);

export default function CategoryList() {
	//    	const { categories } = useContext(ProductContext);
	//    	const [category, setCategory] = useState('Alla');
	// 	const category_MAP = {
	// 		Alla: () => true,
	// 		Leksaker: product => product.completed,
	// 		Kläder: product => product.completed
	// 		Mat: product => product.completed
	// 		Övrigt: product => product.completed
	// 	};
	//    const category_NAMES = Object.keys(category_MAP);
	//    const categoryList = category_NAMES.map(name => (
	//   <CategoryButton
	//     key={name}
	//     name={name}
	//     isPressed={name === category}
	//     setCategory={setCategory}
	//   />
	// ));
	// 	const productList = products
	// .filter(category_MAP[category])
	// .map(product => (
	//   <Todo
	//     id={product.id}
	//     name={product.name}
	//     completed={product.completed}
	//     key={product.id}
	//   />
	// ));
	// 	const [menuItem, setMenuItem] = useState(items);
	// 	const [buttons, setButtons] = useState(allCategories);
	// 	//Filter Function
	// 	const filter = (button) => {
	// 		if (button === 'All') {
	// 			// setMenuItem(items);
	// 			return;
	// 		}
	// 		const filteredData = items.filter((item) => item.category === button);
	// 		setMenuItem(filteredData);
	// 	};
	// 	return (
	// 		<div className="App">
	// 			<div className="buttons">
	// 				{button.map((cat, i) => {
	// 					return (
	// 						<button
	// 							type="button"
	// 							onClick={() => filter(cat)}
	// 							className="btn"
	// 						>
	// 							{cat}
	// 						</button>
	// 					);
	// 				})}
	// 			</div>
	// 			<Button button={buttons} filter={filter} />
	// 		</div>
	// 	);
}

// const Products = ({ state }) => {
// 	const productsPerCategory = getProductsGroupedByCategory(state.source);

// 	return (
// 		<>
// 			{productsPerCategory.map(({ category }, id) => {
// 				return <button key={id}>{category.name}</button>;
// 			})}

// 			{productsPerCategory.map(({ products, category }, id) => {
// 				return (
// 					<div key={id}>
// 						<h4>{category.name}</h4>
// 						{products.map((product, id) => {
// 							return (
// 								<article key={id}>{product.title.rendered}</article>
// 							);
// 						})}
// 					</div>
// 				);
// 			})}
// 		</>
// 	);
// };

// // const React = require('react');
// // const ReactDOM = require('react-dom');
// // const axios = require('axios');

// // // These should probably be imported from a constants.js file
// // const CATEGORIES_ENDPOINT = 'https://api.gousto.co.uk/products/v2.0/categories';
// // const PRODUCTS_ENDPOINT = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120';

// // const NavContainer = React.createClass({
// //   // All your state lives in your topmost container and is
// //   // passed down to any component that needs it
// //   getInitialState() {
// //     return {
// //       categories: [],
// //       products: [],
// //       selectedCategoryId: null
// //     }
// //   },

// //   // Generic method that's used to set a selectedCategoryId
// //   // Can now be passed into any component that needs to select a category
// //   // without needing to worry about dealing with events and whatnot
// //   selectCategory(category) {
// //     this.setState({
// //       selectedCategoryId: category
// //     });
// //   },

// // componentDidMount() {
// //     this.serverRequest = axios.all([
// //       axios.get(CATEGORIES_ENDPOINT),
// //       axios.get(PRODUCTS_ENDPOINT)
// //     ])
// //     .then(axios.spread((categoriesResponse, productsResponse) => {
// //       console.log('Categories', categoriesResponse.data.data);
// //       console.log('Product', productsResponse.data.data);

// //       // This `this` should work due to ES6 arrow functions
// //       this.setState({
// // 			categories: categoriesResponse.data.data,
// // 			products: productsResponse.data.data,
// // 		});
// //     }));
// //   },

// //   componentWillUnmount() {
// //     this.serverRequest.abort();
// //   },

// //   render() {
// //     const {
// //       categories,
// //       products,
// //       selectedCategoryId
// //     } = this.state;

// //     return (
// //       <div className="navigation">
// //         <h1>
// //           Store Cupboard
// //         </h1>

// //         <NavigationCategoryList
// //           categories={categories}
// //           // Pass the select function into the category list
// //           // so the category products can call it when clicked
// //           selectCategory={this.selectCategory} />

// //         <NavigationSubCategoryList
// //           products={products}
// //           // Pass the selected category into the list of products
// //           // to be used for filtering the list
// //           selectedCategoryId={selectedCategoryId} />
// //       </div>
// //     );
// //   }
// // });

// // const NavigationCategory = React.createClass({
// //   // Prevent natural browser navigation and
// //   // run `selectCategory` passed down from parent
// //   // with the id passed down from props
// //   // No querying DOM for info! when props have the info we need
// //   handleClick(e) {
// //     const { id, selectCategory } = this.props;
// //     // Handle the event here instead of all the way at the top
// //     // You might want to do other things as a result of the click
// //     // Like maybe:
// //     // Logger.logEvent('Selected category', id);
// //     e.preventDefault();
// //     selectCategory(id);
// //   },

// //   render() {
// //     const { id, title } = this.props;
// //     return (
// //       <div className="navigationLink">
// //         <a href={id} onClick={this.handleClick}>
// //           {title}
// //         </a>
// //       </div>
// //     );
// //   }
// // });
// // const NavigationCategoryList = React.createClass({
// //   // If you put your mapping method out here, it'll only
// //   // get instantiated once when the component mounts
// //   // rather than being redefined every time there's a rerender
// //   renderCategories() {
// //     const { selectCategory, categories } = this.props;

// //     return categories.map(category => {
// //       const { id, title } = category;
// //       return (
// // 			<NavigationCategory
// // 				// Every time you have a list you need a key prop
// // 				key={category}
// // 				title={title}
// // 				id={id}
// // 				selectCategory={selectCategory}
// // 			/>
// // 		);
// //     });
// //   },

// //   render() {
// //     return (
// //       <div>
// //         <div className="navigationCategory">
// //           {this.renderCategories()}
// //         </div>
// //       </div>
// //     );
// //   }
// // });

// // const NavigationSubCategoryLink = React.createClass({
// //   render() {
// //     const { name } = this.props;
// //     return (
// //       <div className="navigationSubCategory" id={name}>
// //         {name}
// //       </div>
// //     );
// //   }
// // });
// // const NavigationSubCategoryList = React.createClass({
// //   renderSubCategories() {
// //     const { selectedCategoryId, products } = this.props;
// //     // This is the key to filtering based on selectedCategoryId
// //     return products.filter(product => {
// //       // Checking all the categories in the product's categories array
// //       // against the selectedCategoryId passed in from props
// //       return product.categories.some(category => {
// //         return category.id === selectedCategoryId;
// //       });
// //     })
// //     // After filtering what you need, map through
// //     // the new, shorter array and render each product
// //     .map(product => {
// //       const { title, link, id } = product;
// //       return (
// //         <NavigationSubCategoryLink
// //           key={id}
// //           name={title}
// //           link={link} />
// //       );
// //     });
// //   },

// //   render() {
// //     return (
// //       <div className="subCategoryContainer">
// //         {this.renderSubCategories()}
// //       </div>
// //     );
// //   }
// // });

// // ReactDOM.render(<NavContainer />, document.getElementById('app'));
