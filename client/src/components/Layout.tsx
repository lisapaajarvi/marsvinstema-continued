import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';
import ProductProvider from './contexts/ProductContext';
import Header from './Header';
import Main from './Main';

function Layout() {
	return (
		<div>
			<UserProvider>
				<CartProvider>
					<ProductProvider>
						<Header />
						<Main />
					</ProductProvider>
				</CartProvider>
			</UserProvider>
		</div>
	);
}

export default Layout;
