import React from 'react';
import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';
import Header from './Header'
import Main from './Main'

function Layout() {
   
    return (
        <div>
            <UserProvider>
                <CartProvider>
                    <Header />
                    <Main />
                </CartProvider>
            </UserProvider>
        </div>
    )
}

export default Layout;