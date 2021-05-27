import { Component, createContext } from 'react';

interface State {
    products: Product[]      
}

export interface Product {
    id: string
    title: string
    price: number
    stock: number
    categories: string[]
    description: string
    img: string
}
interface ContextValue extends State {
    // addProduct: (newProduct: Product) => void;
}    

export const ProductContext = createContext<ContextValue>({
    products: [],
    // addProduct: () => {}
});


class ProductProvider extends Component<{}, State> {
   
    state: State = {
        products: []
    }
    
    async fetchProducts() {
        const response = await fetch('/api/products');
        console.log(response)
        if (response.ok) {
            const products = await response.json();
            console.log(products)
            this.setState({products});
        }
        return [];
    }
    
    // addProduct = () => {
        //     // logik för att lägga till produkt här
        // }
        
        componentDidMount() {
            this.fetchProducts();
        }
        
        render() {
            return (
                <ProductContext.Provider value={{
                    // addProduct: this.addProduct,
                    products: this.state.products
                }}>
                {console.log(this.state)}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export default ProductProvider;