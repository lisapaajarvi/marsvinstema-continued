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
import { Product, NewProduct, ProductContext } from './contexts/ProductContext';
import axios from "axios";
import { Footer } from './Footer';
import FileUploadSnackbar from './FileUploadSnackbar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        fileUpload: {
            margin: '1rem 0 0.5rem 0',
            fontFamily: 'Roboto',
            fontSize: '0.75rem',
            color: 'rgba(0, 0, 0, 0.54)',
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

export default function CrudPage() {
  const { products, editProduct, deleteProduct, addProduct } = useContext(ProductContext)
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product>();
  const [title, setTitle] = useState('');
  const [stock, setStock] = useState<number>();
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState<[string] | any>();
  const [price, setPrice] = useState<number>();
  const [newImageId, setNewImageId] = useState('')
  const [titleError, setTitleError] = useState<boolean>(false);
  const [stockError, setStockError] = useState<boolean>(false);
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [categoriesError, setCategoriesError] = useState<boolean>(false);
  const [priceError, setPriceError] = useState<boolean>(false);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const saveFile = (e: any) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const uploadFile = async (e: any) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      setIsUploading(true)
      const { data: imageId } = await axios.post(
        "/api/upload",
        formData
      );
      if(editingProduct) {
        setEditingProduct((prev) => ({ ...prev, imageId} as Product))
      }
      else {
        setNewImageId(imageId)
      }
      setIsUploading(false)
    } catch (ex) {
      console.log(ex);
    }
  };

  function isAllRequiredFieldsOk() {
    return (
      stock
      && title
      && price
      && description
      && categories
    )
  }

  function isFormValid() {
    return (
      isAllRequiredFieldsOk()
      && !stockError
      && !titleError
      && !priceError
      && !descriptionError
      && !categoriesError
      && !isUploading
    )
  }

  function saveEditedProduct() {
    editProduct({ ...editingProduct, stock, title, price, description, categories } as Product)
    setOpen(false);
  }

  function saveNewProduct() {
    const newProduct = {
      title: title,
      price: price,
      description: description,
      stock: stock,
      categories: categories,
      imageId: newImageId
    }
    addProduct(newProduct as NewProduct)
  }

  function openEditProductModal(product: Product) {
    setTitle(product.title)
    setDescription(product.description)
    setStock(product.stock)
    setCategories(product.categories)
    setPrice(product.price)
    setEditingProduct(product)
    setOpen(true);
  }

  function openAddProductModal() {
    setEditingProduct(undefined)
    setTitle('')
    setDescription('')
    setStock(undefined)
    setPrice(undefined)
    setCategories([])
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(editingProduct) {
      saveEditedProduct() 
    }
    else {
      saveNewProduct()
    }
  setOpen(false);  
  }

  const handleTitleInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{2,}$/.test(e.target.value)) {
      setTitleError(false);
    }
    else {
      setTitleError(true);
    }
    setTitle(e.target.value)
  };

  const handleStockInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value)) {
      setStockError(false);
    }
    else {
      setStockError(true);
    }
    setStock(Number(e.target.value))
  };
  const handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{2,}$/.test(e.target.value)) {
      setDescriptionError(false);
    }
    else {
      setDescriptionError(true);
    }
    setDescription(e.target.value)
  };

  const handleCategoriesInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^.{2,}$/.test(e.target.value)) {
      setCategoriesError(false);
    }
    else {
      setCategoriesError(true);
    }
    setCategories((e.target.value))
  };

  const handlePriceInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value)) {
      setPriceError(false);
    }
    else {
      setPriceError(true);
    }
    setPrice(Number(e.target.value))
  };


  return (    
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box pt={5} pb={5}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.paper}>
              <Typography variant="h5">
                <div style={{ marginBottom: '1rem' }}>
                  Produktlista
                </div>
              </Typography>
              <div style={{ borderBottom: '0.1rem solid lightgrey', marginBottom: '2rem', width: '12rem', margin: 'auto' }}>
              </div>
              <Grid container spacing={2}>
                <Grid item xs={3} sm={2} md={2} lg={1}>
                </Grid>
              </Grid>

              <>
                {/* PRODUCT MAP */}
                {products.map((product, index) => (
                  <Grid item xs={12} key={index}>
                    <CrudItem product={product} deleteProduct={deleteProduct} openEditProductModal={openEditProductModal} />
                    <Divider />
                  </Grid>
                ))}
              </>

              {/* DIALOG MODALS */}
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="edit-product">??ndra produkt</DialogTitle>
                <DialogContent>
                  <TextField
                    margin="dense"
                    label="Produktnamn"
                    defaultValue={title}
                    type="text"
                    onChange={handleTitleInput}
                    fullWidth
                    error={titleError}
                    />
                  <TextField
                    margin="dense"
                    label="Pris"
                    defaultValue={price}
                    type="text"
                    onChange={handlePriceInput}
                    fullWidth
                    error={priceError}
                    />
                  <TextField
                    margin="dense"
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
                    label="Lagersaldo"
                    multiline
                    defaultValue={stock}
                    type="text"
                    onChange={handleStockInput}
                    fullWidth
                    error={stockError}
                    />
                  <TextField
                    margin="dense"
                    label="Kategori"
                    multiline
                    defaultValue={categories}
                    type="text"
                    onChange={handleCategoriesInput}
                    fullWidth
                    error={categoriesError}
                    />
        {/* FILE UPLOAD */}
                  <div className={classes.fileUpload}>
                    Bilduppladdning
                  </div>
                  <div style={{ overflowX: 'hidden' }}>
                    <input type='file' onChange={saveFile} />
                    <div onClick={uploadFile}>
                      <FileUploadSnackbar />
                    </div>
                  </div>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Tillbaka
                  </Button>
                  <Button onClick={handleSubmit} disabled={!isFormValid()} variant="contained" color="primary">
                    Spara
                  </Button>
                </DialogActions>
              </Dialog>

              {/* BUTTONS */}
              <div className={classes.paper} style={container}>
                <Link className={classes.link} to="/admin">
                  <Button variant="contained" color="primary" style={{ margin: '1rem' }}>Tillbaka</Button>
                </Link>
                <Button variant="contained" onClick={openAddProductModal} color="primary" style={{ margin: '1rem' }}>L??gg till</Button>
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
  marginTop: '1rem'
}