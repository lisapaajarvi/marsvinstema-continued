import { Component, createContext } from 'react';
import { Customer } from '../CustomerForm';
import { Product } from './ProductContext';

interface State {
    orders?: Order[]
    //shippingMethods: ShippingMethod[]      
}

interface Order {
    _id: string
    createdAt: Date
    user: string
    totalPrice: number
    products: Product[]
    shippingMethod: ShippingMethod
    shippingAddress: Customer
}

interface ShippingMethod {
    name: string
    expectedDeliveryTime: number
    price: number

}
interface ContextValue extends State {
    // addProduct: (newProduct: Product) => void;
}    

export const OrderContext = createContext<ContextValue>({
    orders: []
    // addNewOrder: () => {}
});


class OrderProvider extends Component<{}, State> {
   
    state: State = {}
    
    async getOrders() {
        const response = await fetch('/api/orders');
        if (response.ok) {
            const orders = await response.json();
            this.setState({orders});
        }
        return [];
    }
 
    componentDidMount() {
        
    }
    
    render() {
        return (
            <OrderContext.Provider value={{
                // addNewOrder: this.addNewOrder,
                orders: this.state.orders
            }}>
            {this.props.children}
        </OrderContext.Provider>
    );
}
}

export default OrderProvider;