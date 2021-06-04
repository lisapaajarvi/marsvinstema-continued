import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminPage from './AdminPage';
import Cart from './Cart';
import Checkout from './Checkout';
import CrudPage from './CrudPage';
import OrderPage from './OrderPage';
import ProductDetail from './ProductDetail';
import ProductView from './ProductView';
import ProtectedRoute from './ProtectedRoute';

function Main() {   
    return (
        <Switch>
            <Route exact path="/">
                <ProductView />
            </Route>
            <ProtectedRoute adminOnly path="/admin" component={AdminPage} />
            <Route path="/kundvagn" component={Cart} />
            <ProtectedRoute adminOnly path="/crud" component={CrudPage} />
            <Route path="/checkout" component={Checkout} />
            <ProtectedRoute adminOnly path="/orders" component={OrderPage} />
            <Route path="/produkt/:_id" component={ProductDetail} />
        </Switch>
    )    
}

export default Main;