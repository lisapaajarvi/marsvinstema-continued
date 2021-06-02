import { Grid, Switch, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Order, OrderContext } from "./contexts/OrderContext";

interface Props {
    order: Order;
}

export default function OrderItem(props: Props) {
    const { createdAt, _id, isShipped} = props.order;
    const { editOrderStatus } = useContext(OrderContext);
    const [state, setState] = useState({
        shipped: isShipped,
        });
            
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        props.order.isShipped = !props.order.isShipped
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

    return (
        <>
            <Grid item xs={4}>
                <Typography variant="body1">{getOrderDate()}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1">{_id}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Switch
                    checked={state.shipped}
                    onChange={handleChange}
                    color="primary"
                    name="shipped"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </Grid>
        </>
    );
}