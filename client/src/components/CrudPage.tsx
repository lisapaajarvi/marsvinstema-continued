import React, { CSSProperties, useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Divider, Typography } from '@material-ui/core';
import CrudItem from './CrudItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import { Product, ProductContext } from './contexts/ProductContext';
import axios from 'axios';
import { Footer } from './Footer';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export default function CrudPage() {
	const { products, editProduct, deleteProduct } = useContext(ProductContext);
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [editingProduct, setEditingProduct] = useState<Product>();
	const [title, setTitle] = useState('');
	const [stock, setStock] = useState<number>();
	const [description, setDescription] = useState('');
	const [categories, setCategories] = useState<[string] | any>();
	const [price, setPrice] = useState<number>();
	const [img, setImg] = useState('');
	// const [productList, setProductList] = React.useState(getProductList())
	// const [isFieldDisabled, setIsFieldDisabled] = React.useState(true)
	const [titleError, setTitleError] = useState<boolean>(false);
	const [stockError, setStockError] = useState<boolean>(false);
	const [descriptionError, setDescriptionError] = useState<boolean>(false);
	const [categoriesError, setCategoriesError] = useState<boolean>(false);
	const [priceError, setPriceError] = useState<boolean>(false);
	const [imgError, setImgError] = useState<boolean>(false);
	const [file, setFile] = useState('');
	const [fileName, setFileName] = useState('');
	const saveFile = (e: any) => {
		setFile(e.target.files[0]);
		setFileName(e.target.files[0].name);
	};

	const uploadFile = async (e: any) => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('fileName', fileName);
		try {
			const res = await axios.post('http://localhost:4000/upload', formData);
			console.log(res);
		} catch (ex) {
			console.log(ex);
		}
	};

	function Alert(props: AlertProps) {
		return <MuiAlert elevation={6} variant='filled' {...props} />;
	}

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	function isAllRequiredFieldsOk() {
		return stock && title && price && description && img && categories;
	}

	function isFormValid() {
		return (
			isAllRequiredFieldsOk() &&
			!stockError &&
			!titleError &&
			!priceError &&
			!descriptionError &&
			!imgError &&
			!categoriesError
		);
	}

	function saveEditedProduct() {
		editProduct({
			...editingProduct,
			stock,
			title,
			price,
			description,
			img,
			categories,
		} as Product);
		setOpen(false);
	}

	function openEditProductModal(product: Product) {
		// setIsFieldDisabled(true)
		setTitle(product.title);
		setDescription(product.description);
		setStock(product.stock);
		setCategories(product.categories);
		setPrice(product.price);
		setImg(product.img);
		setEditingProduct(product);
		setOpen(true);
	}

	// function openAddProductModal() {
	//   setTitle('')
	//   setDescription('')
	//   // setPrice()
	//   setCategories([])
	//   setImg('')
	//   // setIsFieldDisabled(false)
	//   setOpen(true);
	// }

	const handleClosed = () => {
		setOpen(false);
	};

	// const handleSubmit = () => {
	//   if(isFieldDisabled) {
	//     let editedProduct = productList.find(item=> item._id === _id);
	//     if(editedProduct) {
	//       editedProduct.title = title;
	//       editedProduct.description = description;
	//       editedProduct.category = category;
	//       editedProduct.price = parseInt(price);
	//       editedProduct.img = img;
	//       setProductList(productList)
	//       updateProductListInLocalStorage(productList)
	//     }
	//   }
	//   else {
	//     let updatedProductList = [...productList, {title: title, description: description, categories: categories, price: parseInt(price), img: img }];
	//     setProductList(updatedProductList)
	//     setIsFieldDisabled(true)
	//     updateProductListInLocalStorage(updatedProductList);
	//   }
	//   setOpen(false);
	// }

	const handleTitleInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (/^.{2,}$/.test(e.target.value)) {
			setTitleError(false);
		} else {
			setTitleError(true);
		}
		setTitle(e.target.value);
	};

	const handleStockInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (/^[0-9]+$/.test(e.target.value)) {
			setStockError(false);
		} else {
			setStockError(true);
		}
		setStock(Number(e.target.value));
	};
	const handleDescriptionInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (/^.{2,}$/.test(e.target.value)) {
			setDescriptionError(false);
		} else {
			setDescriptionError(true);
		}
		setDescription(e.target.value);
	};

	const handleCategoriesInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (/^.{2,}$/.test(e.target.value)) {
			setCategoriesError(false);
		} else {
			setCategoriesError(true);
		}
		setCategories(e.target.value);
	};

	const handlePriceInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (/^[0-9]+$/.test(e.target.value)) {
			setPriceError(false);
		} else {
			setPriceError(true);
		}
		setPrice(Number(e.target.value));
	};

	const handleImgInput = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		if (
			/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(
				e.target.value,
			)
		) {
			setImgError(false);
		} else {
			setImgError(true);
		}
		setImg(e.target.value);
	};

	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Box pt={5} pb={5}>
					<Grid container spacing={2}>
						<Grid item xs={12} className={classes.paper}>
							<Typography variant='h5'>
								<div style={{ marginBottom: '1rem' }}>Produktlista</div>
							</Typography>
							<div
								style={{
									borderBottom: '0.1rem solid lightgrey',
									marginBottom: '2rem',
									width: '12rem',
									margin: 'auto',
								}}
							></div>
							<Grid container spacing={2}>
								<Grid item xs={3} sm={2} md={2} lg={1}></Grid>
							</Grid>

							<>
								{/* PRODUCT MAP */}
								{products.map((product, index) => (
									<Grid item xs={12} key={index}>
										{/* <CrudItem products={products} removeFromProductList={removeFromProductList} openEditProductModal={openEditProductModal} /> */}
										<CrudItem
											product={product}
											deleteProduct={deleteProduct}
											openEditProductModal={openEditProductModal}
										/>
										{/* <CrudItem product={product} /> */}
										<Divider />
									</Grid>
								))}
							</>

							{/* DIALOG MODALS */}
							<Dialog
								open={open}
								onClose={handleClosed}
								aria-labelledby='form-dialog-title'
							>
								<DialogTitle id='edit-product'>
									Ändra produkt
								</DialogTitle>
								<DialogContent>
									<TextField
										margin='dense'
										id='title'
										label='Produktnamn'
										defaultValue={title}
										type='text'
										onChange={handleTitleInput}
										fullWidth
										error={titleError}
									/>
									<TextField
										margin='dense'
										id='price'
										label='Pris'
										defaultValue={price}
										type='text'
										onChange={handlePriceInput}
										fullWidth
										error={priceError}
									/>
									<TextField
										margin='dense'
										id='description'
										label='Beskrivning'
										multiline
										defaultValue={description}
										type='text'
										onChange={handleDescriptionInput}
										fullWidth
										error={descriptionError}
									/>
									<TextField
										margin='dense'
										id='stock'
										label='Lagersaldo'
										multiline
										defaultValue={stock}
										type='text'
										onChange={handleStockInput}
										fullWidth
										error={stockError}
									/>
									<TextField
										margin='dense'
										id='categories'
										label='Kategori'
										multiline
										defaultValue={categories}
										type='text'
										onChange={handleCategoriesInput}
										fullWidth
										error={categoriesError}
									/>

									<TextField
										margin='dense'
										id='img'
										label='Länk till bild'
										multiline
										defaultValue={img}
										type='text'
										onChange={handleImgInput}
										fullWidth
										error={imgError}
									/>
								</DialogContent>
								{/* FILE UPLOAD */}
								<Typography variant='h6'>
									<div style={{ marginTop: '1rem' }}>
										Bilduppladdning
									</div>
								</Typography>
								<div
									style={{ marginTop: '2rem', marginBottom: '2rem' }}
								>
									<input type='file' onChange={saveFile} />
									<button
										onClick={() => {
											handleClick();
											uploadFile(FormData);
										}}
									>
										Ladda upp
									</button>
								</div>
								<Snackbar
									open={open}
									autoHideDuration={6000}
									onClose={handleClose}
								>
									<Alert onClose={handleClose} severity='success'>
										Bilden har laddats upp!
									</Alert>
								</Snackbar>

								<DialogActions>
									<Button onClick={handleClose} color='primary'>
										Tillbaka
									</Button>
									<Button
										onClick={saveEditedProduct}
										disabled={!isFormValid()}
										variant='contained'
										color='primary'
									>
										Spara
									</Button>
								</DialogActions>
							</Dialog>

							{/* BUTTONS */}
							<div className={classes.paper} style={container}>
								<Link className={classes.link} to='/admin'>
									<Button
										variant='contained'
										color='primary'
										style={{ margin: '1rem' }}
									>
										Tillbaka
									</Button>
								</Link>
								<Link className={classes.link} to='/admin'>
									<Button
										disabled
										variant='contained'
										color='primary'
										style={{ margin: '1rem' }}
									>
										Lägg till
									</Button>
								</Link>
							</div>
							<div>
								<Footer />
							</div>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</div>
	);
}

const container: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '1rem',
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			textAlign: 'center',
			color: theme.palette.text.primary,
			marginBottom: '1rem',
		},
		link: {
			textDecoration: 'none',
			color: 'grey',
		},
		icon: {
			marginLeft: '1rem',
		},
	}),
);
