import axios from 'axios';
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
    quantity?: number
    imageId: string
    imageUrl: string
}

export type NewProduct = Omit<Product, "_id" | "imageUrl">
interface ContextValue extends State {
    addProduct: (newProduct: NewProduct) => void;
    editProduct: (product: Product) => void;
    deleteProduct: (deletedProduct: Product) => void;
}

export const ProductContext = createContext<ContextValue>({
    products: [],
    categories: [],
    addProduct: () => {},
    editProduct: () => {},
    deleteProduct: () => {}
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
            this.setState({ products });
        }
        return [];
    }

    async fetchAllCategories() {
        const response = await fetch('/api/products/categories');
        if (response.ok) {
            const categories = await response.json();
            this.setState({ categories });
        }
        return [];
    }

    editProduct = async (editedProduct: Product) => {
        const response = await fetch('/api/products/' + editedProduct._id.toString(), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProduct)
        });

        if (response.ok) {
            await response.json();
            this.fetchProducts()
        }
    }

    deleteProduct = async (deletedProduct: Product) => {
        const response = await fetch('/api/products/' + deletedProduct._id.toString(), {
            method: 'DELETE',
            body: JSON.stringify(deletedProduct)
        });

        if (response.ok) {
            await response.json();
            this.fetchProducts()
        }
    }

    addProduct = (newProduct: NewProduct) => {
        axios
            .post('/api/products', newProduct)
            .then(res => {
                this.fetchProducts()
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.fetchProducts();
        this.fetchAllCategories();
    }

    render() {
        return (
            <ProductContext.Provider value={{
                products: this.state.products,
                categories: this.state.categories,
                editProduct: this.editProduct,
                deleteProduct: this.deleteProduct,
                addProduct: this.addProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export default ProductProvider;