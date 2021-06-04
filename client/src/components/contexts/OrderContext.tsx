import axios from 'axios';
import { Component, createContext } from 'react';
import { Customer } from '../CustomerForm';
import { Product } from './ProductContext';

interface State {
    orders?: Order[]
    shippingMethods?: ShippingMethod[]      
}

export interface Order {
    _id: string
    createdAt: Date
    user: string
    totalPrice: number
    products: Product[]
    shippingMethod: ShippingMethod
    shippingAddress: Customer
    isShipped: boolean
}

export interface NewOrder {
    totalPrice: number
    cart: Product[]
    shippingMethod: ShippingMethod
    customer: Customer
}

export interface ShippingMethod {
    name: string
    expectedDeliveryTime: number
    price: number
}
interface ContextValue extends State {
    addNewOrder: (newOrder:NewOrder) => void
    getOrders: () => void
    editOrderStatus: (order:Order) => void
}    

export const OrderContext = createContext<ContextValue>({
    orders: [],
    shippingMethods: [],
    addNewOrder: () => {},
    getOrders: () => {},
    editOrderStatus: () => {}
});

class OrderProvider extends Component<{}, State> {
   
    state: State = {}
    
    getOrders = async () => {
        axios
        .get('/api/orders')
        .then(res => {
            this.setState({ orders: res.data })
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
        })
        .catch(err =>{
          console.log(err);
        })
    }

    async addNewOrder(newOrder:NewOrder) {
        axios
            .post('/api/orders', newOrder)
            .then(res => {
                console.log(res.data)
            })
            .catch(err =>{
                console.log(err);
            })    
    }
    async editOrderStatus(order: Order) {
        const response = await fetch('/api/orders/' + order._id.toString(), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        });

        if (response.ok) {
            const updatedOrder = await response.json();
            console.log(updatedOrder)
        }
    }
    // async editOrderStatus(order:Order) {
    //     console.log(order)
    //     axios
    //         .put('/api/orders', JSON.stringify(order))
    //         .then(res => {
    //             console.log(res.data)
    //         })   
    //         .catch(err =>{
    //             console.log(err);
    //         })   
    // }
 
    componentDidMount() {
        this.getShippingMethods()
        this.getOrders()
    }
    
    render() {
        return (
            <OrderContext.Provider value={{
                addNewOrder: this.addNewOrder,
                getOrders: this.getOrders,
                editOrderStatus: this.editOrderStatus,
                orders: this.state.orders,
                shippingMethods: this.state.shippingMethods
            }}>
            {this.props.children}
        </OrderContext.Provider>
    );
}
}

export default OrderProvider;