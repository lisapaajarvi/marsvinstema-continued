import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Order } from "./contexts/OrderContext";

interface Props {
    order: Order;
  }
  
export default function OrderItem(props: Props) {
    const { createdAt, _id} = props.order;

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
            <Grid item xs={5} sm={3} md={2} lg={2}>
                <Typography variant="body1">{getOrderDate()}</Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={6}>
                <Typography variant="body1">{_id}</Typography>
            </Grid>
            <Grid item xs={4} sm={3} md={1} lg={1}>
                <Typography variant="body1">Skickad</Typography>
            </Grid>
        </>
    );
}