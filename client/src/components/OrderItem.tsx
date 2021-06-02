import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Order } from "./contexts/OrderContext";

interface Props {
    order: Order;
  }
  
export default function OrderItem(props: Props) {
const { createdAt, _id} = props.order;

function getDay(date:Date) {
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0'); 
const yyyy = date.getFullYear();
let day = yyyy + '-' + mm + '-' + dd;
return day;
}

return (
    <>
        <Grid item xs={5} sm={3} md={2} lg={2}>
            <Typography variant="body1">Skapad</Typography>
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