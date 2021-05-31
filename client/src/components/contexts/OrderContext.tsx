import axios from 'axios';
import { Component, createContext } from 'react';
import { Customer } from '../CustomerForm';
import { Product } from './ProductContext';

interface State {
    orders?: Order[]
    shippingMethods?: ShippingMethod[]      
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
    // addNewOrder: () => {}
}    

export const OrderContext = createContext<ContextValue>({
    orders: [],
    shippingMethods: []
    // addNewOrder: () => {}
});


class OrderProvider extends Component<{}, State> {
   
    state: State = {}
    
    async getOrders() {
        axios
        .get('/api/orders')
        .then(res => {
            this.setState({ orders: res.data })
            console.log(this.state.orders)
        })
        .catch(err =>{
            console.log(err);
        })    
    }

    async getShippingMethods() {
        axios
        .get('/api/shippingMethods')
        .then(res => {
          this.setState({ shippingMethods: res.data })
          console.log(this.state.shippingMethods)
        })
        .catch(err =>{
          console.log(err);
        })
    }
 
    componentDidMount() {
        this.getShippingMethods()
    }
    
    render() {
        return (
            <OrderContext.Provider value={{
                // addNewOrder: this.addNewOrder,
                orders: this.state.orders,
                shippingMethods: this.state.shippingMethods
            }}>
            {this.props.children}
        </OrderContext.Provider>
    );
}
}

export default OrderProvider;