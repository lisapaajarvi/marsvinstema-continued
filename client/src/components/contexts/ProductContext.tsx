import { Component, createContext } from 'react';

interface State {
    products: Product[]      
    categories: string[]   
}

export interface Product {
    _id: string
    title: string
    price: number
    stock: number
    categories: string[]
    description: string
    img: string
}
interface ContextValue extends State {
    // addProduct: (newProduct: Product) => void;
    editProduct: (newProduct: Product) => void;
}    

export const ProductContext = createContext<ContextValue>({
    products: [],
    categories: [],
    // addProduct: () => {}
    editProduct: () => {}
});


class ProductProvider extends Component<{}, State> {
   
    state: State = {
        products: [],
        categories: []
    }
    
    async fetchProducts() {
        const response = await fetch('/api/products');
        if (response.ok) {
            const products = await response.json();
            this.setState({products});
        }
        return [];
    }

    async fetchAllCategories() {
        const response = await fetch('/api/products/categories');
        if (response.ok) {
            const categories = await response.json();
            console.log(categories)
            this.setState({categories});
        }
        return [];
    }

    async editProduct(editedProduct: Product) {
        console.log(editedProduct)
        const response = await fetch('/api/product/' + editedProduct._id.toString(), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProduct)
        });

        if (response.ok) {
            const updatedProduct = await response.json();
            console.log(updatedProduct)
            // this.setState({categories});
        }
    }
    
    // addProduct = () => {
        //     // logik för att lägga till produkt här
        // }
        
        componentDidMount() {
            this.fetchProducts();
            this.fetchAllCategories();
        }
        
        render() {
            return (
                <ProductContext.Provider value={{
                    products: this.state.products,
                    categories: this.state.categories,
                    editProduct: this.editProduct
                    // addProduct: this.addProduct,
                }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export default ProductProvider;