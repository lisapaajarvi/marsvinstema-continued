import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import { Product } from './contexts/ProductContext';
import CardMedia from '@material-ui/core/CardMedia';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    media: {
      height: 50,
      width: 50,
      borderRadius: '3rem'
    },
    deleteIcon: {
      margin: '0 1rem',
      padding: '0'
    },
    iconButton: {
      margin: '0 0rem',
      padding: '0'
    },
    container: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',  
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    icons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
  }),
);
interface Props {
  product: Product;
  // removeFromProductList: (product:Product) => void;
  openEditProductModal: (product:Product) => void;
  deleteProduct: (product:Product) => void;
}

export default function CrudItem(props: Props) {
  const classes = useStyles();
  const { title, img, stock } = props.product;

  return (
    <div style={{ margin: '0.5rem 0rem' }}>
      <Grid container spacing={4}>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <CardMedia className={classes.media} image={img} />
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <IconButton edge="end" aria-label="delete" onClick={() => props.deleteProduct(props.product)}>
          <DeleteIcon className={classes.deleteIcon} />
          </IconButton>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
          <IconButton aria-label="edit" onClick={() => props.openEditProductModal(props.product)}>
            <EditIcon className={classes.deleteIcon} />
          </IconButton>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <p style={{ color: 'black', marginLeft: '0.5rem', fontFamily: 'Helvetica' }}>{title}</p>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1}>
        </Grid>
        <Hidden xsDown>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <p style={{ color: 'black', marginLeft: '0.5rem', fontFamily: 'Helvetica' }}>Lager: {stock} st</p>
        </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}