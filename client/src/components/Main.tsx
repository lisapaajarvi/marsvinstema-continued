import { Route, Switch } from 'react-router-dom';
import AdminPage from './AdminPage';
import Cart from './Cart';
import CategoryView from './CategoryView';
import Checkout from './Checkout';
import CrudPage from './CrudPage';
import OrderPage from './OrderPage';
import ProductDetail from './ProductDetail';
import ProductView from './ProductView';

function Main() {
	return (
		<Switch>
			<Route exact path="/">
				<ProductView />
			</Route>
			<Route path="/admin" component={AdminPage} />
			<Route path="/kundvagn" component={Cart} />
			<Route path="/crud" component={CrudPage} />
			<Route path="/checkout" component={Checkout} />
			<Route path="/orders" component={OrderPage} />
			<Route path="/produkt/:_id" component={ProductDetail} />
			<Route path="/category/:category" component={CategoryView} />
		</Switch>
	);
}

export default Main;
