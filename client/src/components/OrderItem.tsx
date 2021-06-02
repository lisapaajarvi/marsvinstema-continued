import { Grid, Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Order } from "./contexts/OrderContext";

interface Props {
    order: Order;
  }

  
  
  export default function OrderItem(props: Props) {
    const { createdAt, _id, isShipped} = props.order;
    
    const [state, setState] = useState({
        shipped: isShipped,
        });
            
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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