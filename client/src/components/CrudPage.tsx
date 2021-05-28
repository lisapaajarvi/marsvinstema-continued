import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Hidden, Typography } from '@material-ui/core';
import CrudItem from './CrudItem';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { ProductContext } from './contexts/ProductContext';
// import  { mockedProducts, Product } from '../ProductList'

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
      color: 'grey'
    },
    icon: {
      marginLeft: '1rem'
    }
  }),
);

export default function CrudPage() {
  const { products } = useContext(ProductContext)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [url, setUrl] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [categories, setCategories] = React.useState([]);
  const [price, setPrice] = React.useState('')
  const [img, setImg] = React.useState('')
  // const [productList, setProductList] = React.useState(getProductList())
  // const [isFieldDisabled, setIsFieldDisabled] = React.useState(true)
  // const [urlError, setUrlError] = React.useState<boolean>(false);
  const [titleError, setTitleError] = React.useState<boolean>(false);
  const [descriptionError, setDescriptionError] = React.useState<boolean>(false);
  const [categoriesError, setCategoriesError] = React.useState<boolean>(false);
  const [priceError, setPriceError] = React.useState<boolean>(false);
  const [imgError, setImgError] = React.useState<boolean>(false);

  function isAllRequiredFieldsOk() {
    return (
      title
      && description
      && categories
      && price
      && img
    )
  }

  function isFormValid() {
    return (
      isAllRequiredFieldsOk()
      && !titleError
      && !descriptionError
      && !categoriesError
      && !priceError
      && !imgError
    )
  }

  // // Denna funktionen måste ändras!

  // function removeFromProductList(product:Product) {
  //   const updatedProductList = productList.filter(item => item._id !== product._id);
  //   setProductList(updatedProductList);
  //   updateProductListInLocalStorage(updatedProductList);
  // }

  // function updateProductListInLocalStorage(newProductList:Product[]) {
  //   localStorage.setItem('productList', JSON.stringify(newProductList))
  // }

  // function openEditProductModal(product:Product) {
  //   // setIsFieldDisabled(true)
  //   setTitle(product.title)
  //   setDescription(product.description)
  //   // setCategories(product.categories)
  //   setPrice(product.price.toString())
  //   setImg(product.img)
  //   setOpen(true);
  // }

  function openAddProductModal() {
    setTitle('')
    setDescription('')
    setPrice('')
    setCategories([])
    setImg('')
    // setIsFieldDisabled(false)
    setOpen(true);
  }

  const handleClose = () => {
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

  const handleTitleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{3,}$/.test(e.target.value)) {  
      setTitleError(false);
    }
    else {
      setTitleError(true);
    }
    setTitle(e.target.value)
  };
  const handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{3,}$/.test(e.target.value)) {  
      setDescriptionError(false);
    }
    else {
      setDescriptionError(true);
    }
    setDescription(e.target.value)
  };

  const handleCategoriesInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{3,}$/.test(e.target.value)) {  
      setCategoriesError(false);
    }
    else {
      setCategoriesError(true);
    }
    // setCategories(e.target.value)
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^[0-9]{1,15}$/.test(e.target.value)) {  
      setPriceError(false);
    }
    else {
      setPriceError(true);
    }
    setPrice(e.target.value)
  };

  const handleImgInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/.test(e.target.value)) {  
      setImgError(false);
    }
    else {
     setImgError(true);
    }
    setImg(e.target.value)
  };

  return (
    <>
      <div className={classes.root}>
        <Container maxWidth="lg">
          <Box pt={2} pb={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.paper}>
                <h2>Produktlista</h2>
              </Grid>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="edit-product">Ändra / lägg till produkt</DialogTitle>
                <DialogContent>
                  <TextField
                    margin="dense"
                    id="title"
                    label="Namn"
                    defaultValue={title}
                    type="text"
                    onChange={handleTitleInput}
                    fullWidth
                    error={titleError}
                  />
                  <TextField
                    margin="dense"
                    id="description"
                    label="Beskrivning"
                    multiline
                    defaultValue={description}
                    type="text"
                    onChange={handleDescriptionInput}
                    fullWidth
                    error={descriptionError}
                  />
                  <TextField
                    margin="dense"
                    id="categories"
                    label="Kategori"
                    multiline
                    defaultValue={categories}
                    type="text"
                    onChange={handleCategoriesInput}
                    fullWidth
                    error={categoriesError}
                  />
                  <TextField
                    margin="dense"
                    id="price"
                    label="Pris"
                    defaultValue={price}
                    type="text"
                    onChange={handlePriceInput}
                    fullWidth
                    error={priceError}
                  />
                  <TextField
                    margin="dense"
                    id="img"
                    label="Länk till bild"
                    multiline
                    defaultValue={img}
                    type="text"
                    onChange={handleImgInput}
                    fullWidth
                    error={imgError}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Tillbaka
                  </Button>
                  <Button disabled={!isFormValid()} variant="contained" color="primary">
                    Spara
                  </Button>
                </DialogActions>
              </Dialog>
              <Hidden xsDown>
                <Grid container spacing={2}>
                  <Grid item xs={3} sm={2} md={2} lg={1}>
                  </Grid>
                  <Grid item xs={5} sm={3} md={2} lg={2}>
                    <Typography variant="body1">
                      Namn
                    </Typography>
                  </Grid>
                  <Hidden smDown>
                    <Grid item xs={6} sm={4} md={4} lg={6}>
                      <Typography variant="body1">Beskrivning</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={4} sm={3} md={1} lg={1}>
                    <Typography variant="body1">Pris</Typography>
                  </Grid>
                  <Grid item xs={4} sm={3} md={1} lg={1}>
                    <Typography variant="body1">Lagersaldo</Typography>
                  </Grid>
                  <Grid item xs={12} sm={1}>
                    <Typography variant="body1"></Typography>
                  </Grid>
                </Grid>
              </Hidden>
              {products.map((product, index) => (
                <Grid item xs={12} key={index}>
                  {/* <CrudItem products={products} removeFromProductList={removeFromProductList} openEditProductModal={openEditProductModal} /> */}
                  <CrudItem product={product} />
                </Grid>
              ))}
              <Grid item xs={12} sm={6} className={classes.paper}>
                <Link className={classes.link} to="/admin">
                  <Button variant="contained" color="primary">Tillbaka</Button>
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.paper}>
                <Button variant="contained" color="primary" onClick={openAddProductModal}>Lägg till<AddCircleIcon className={classes.icon} /></Button>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="subtitle2" color="textSecondary" align="center">
                  {'Copyright © '}
                  <Link className={classes.link} to="/">
                    {' Marsvinstema '}
                  </Link>
                  {new Date().getFullYear()}
                </Typography>
              </Grid> */}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}