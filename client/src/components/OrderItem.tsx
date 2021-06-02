import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Switch, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Order, OrderContext } from "./contexts/OrderContext";

interface Props {
    order: Order;
}

export default function OrderItem(props: Props) {
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
                <Typography variant="body1">{getOrderDate()}</Typography>
            </Grid>
            <Grid item xs={12} sm={4} onClick={openOrderModal}>
                <Typography variant="body1">{_id}</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
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
                    <Typography><b>Orderdatum:</b> {getOrderDate()}</Typography>
                    <Typography><b>Produkter: </b>
                        <ul>
                            {products.map((product, index) => (
                                <li key={index}>
                                    {product.quantity} st {product.title} à {product.price} kr
                                </li>
                            ))}
                        </ul>
                    </Typography>
                    <Typography><b>Fraktsätt:</b> {shippingMethod.name}</Typography>
                    <Typography><b>Leveransadress:</b></Typography>
                    <Typography> {shippingAddress.firstName} {shippingAddress.lastName}</Typography>
                    <Typography> {shippingAddress.streetAddress}</Typography>
                    <Typography> {shippingAddress.zipCode} {shippingAddress.city}</Typography>
                    <Typography> <b>Ordersumma:</b> {totalPrice} kr</Typography>
                    <Typography> <b>Orderstatus:</b> {isShipped?("Skickad"):("Ej skickad")}</Typography>
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