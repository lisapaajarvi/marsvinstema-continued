import React from "react";
import CartProvider from "./contexts/CartContext";
import UserProvider from "./contexts/newContext";
import ProductProvider from "./contexts/ProductContext";
import OrderProvider from "./contexts/OrderContext";
import Header from "./Header";
import Main from "./Main";

function Layout() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <OrderProvider>
              <Header />
              <Main />
            </OrderProvider>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default Layout;
