import { Component, createContext } from 'react';

interface State {
    products: Product[]      
}

export interface Product {
    id: string
    name: string
    description: string
    category: string
    price: number
    img: string
}

interface ContextValue extends State {
    // addProduct: (newProduct: Product) => void;
}    

export const ProductContext = createContext<ContextValue>({
    products: [],
    // addProduct: () => {}
});

async function fetchProducts() {
    const response = await fetch('/api/products');
    if (response.ok) {
        const products = await response.json();
        return products as Product[]
        // this.setState({ products });
    }
    return [];
}

class ProductProvider extends Component<{}, State> {
    // state: State = Products[];
 
    state: State = {
        products: fetchProducts()
    }

    // addProduct = () => {
    //     // logik för att lägga till produkt här
    // }

    componentDidMount() {
        // fetchProducts();
    }

    render() {
        return (
            <ProductContext.Provider value={{
                // addProduct: this.addProduct,
                products: this.state.products
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export default ProductProvider;