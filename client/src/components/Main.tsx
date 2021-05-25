import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import Checkout from './Checkout';
import CrudPage from './CrudPage';
import ProductDetail from './ProductDetail';
import ProductView from './ProductView';

export default function Main() {
	return (
		<Switch>
			<Route exact path='/'>
				<ProductView />
			</Route>
			<Route path='/kundvagn' component={Cart} />
			<Route path='/crud' component={CrudPage} />
			<Route path='/checkout' component={Checkout} />
			<Route path='/produkt/:url' component={ProductDetail} />
		</Switch>
	);
}
