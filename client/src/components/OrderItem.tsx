import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Hidden, Switch, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Order, OrderContext } from "./contexts/OrderContext";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


interface Props {
    order: Order;
}    

export default function OrderItem(props: Props) {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = useState(false);
    const { createdAt, _id, isShipped, products, shippingMethod, shippingAddress, totalPrice} = props.order;
    const { editOrderStatus } = useContext(OrderContext);
    const [state, setState] = useState({
        shipped: isShipped,
        });
            
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.order.isShipped = !isShipped
        editOrderStatus(props.order)
        };

    const getOrderDate = () => {
        const orderDate = new Date(createdAt);
        let month:number|string = (orderDate.getMonth() + 1);
        if (month < 10) {
            month = '0' + month;
        }
        const year = orderDate.getFullYear();
        let date : number|string = orderDate.getDate();
        if (date < 10) {
            date = '0' + date;
        }
        const formattedDate = year + '-' + month + '-' + date;
        return formattedDate;
    }

    const openOrderModal = () => {
        setModalOpen(true)
    }

    const handleClose = () => {
        setModalOpen(false);
      };

    return (
        <>
            <Grid item xs={12} sm={4}>
                <Hidden smUp>
                    <Typography variant="body1">Orderdatum:{''}{getOrderDate()}</Typography>
                </Hidden>
                <Hidden xsDown>
                    <Typography variant="body1">{getOrderDate()}</Typography>
                </Hidden>
            </Grid>
            <Grid item xs={12} sm={4} onClick={openOrderModal}>
                <Typography variant="body1" className={classes.linkColor} >{_id}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Hidden smUp>
                    <Typography>Skickad:</Typography>
                </Hidden>
                <Switch
                    checked={state.shipped}
                    onChange={handleChange}
                    color="primary"
                    name="shipped"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Grid>


            <Dialog open={modalOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle>Orderdetaljer</DialogTitle>
                <DialogContent>
                    <Typography className={classes.marginBottom}><b>Orderdatum:</b> {getOrderDate()}</Typography>
                    <Typography><b>Produkter: </b></Typography>
                    <ul>
                        {products.map((product, index) => (
                            <li className={classes.marginLeft} key={index}>
                                <Typography>{product.quantity} st {product.title} à {product.price} kr</Typography>
                            </li>
                        ))}
                    </ul>
                    <Typography className={classes.marginBottom}><b>Fraktsätt:</b> {shippingMethod.name}</Typography>
                    <Typography><b>Leveransadress:</b></Typography>
                    <Typography> {shippingAddress.firstName} {shippingAddress.lastName}</Typography>
                    <Typography> {shippingAddress.streetAddress}</Typography>
                    <Typography className={classes.marginBottom}> {shippingAddress.zipCode} {shippingAddress.city}</Typography>
                    <Typography className={classes.marginBottom}> <b>Ordersumma:</b> {totalPrice} kr</Typography>
                    <Typography className={classes.marginBottom}> <b>Orderstatus:</b> {isShipped?("Skickad"):("Ej skickad")}</Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    STÄNG
                  </Button>
                </DialogActions>
              </Dialog>
              </>
    );
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		marginLeft: {
			marginLeft: '-1rem',
        },
        marginBottom: {
			marginBottom: '0.5rem',
        },
        linkColor: {
            cursor: 'pointer',
			color: '#3f51b5',
        },
    }),
);
