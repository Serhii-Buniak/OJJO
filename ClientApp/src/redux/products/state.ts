interface ProductsState {
    items: Product[]
}

export interface Product {
    id: number,
    name: string,
    price: number
}

export type CreatedProduct = Omit<Product, 'id'>;

export default ProductsState;