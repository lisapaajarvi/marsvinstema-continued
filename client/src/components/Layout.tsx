import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext-old';
import Header from './Header';
import Main from './Main';

export default function Layout() {
	return (
		<div>
			<UserProvider>
				<CartProvider>
					<Header />
					<Main />
				</CartProvider>
			</UserProvider>
		</div>
	);
}
