import { CreatedProduct } from "./state";
import ProductsTypes from "./types";

interface ProductsAction {
    type: ProductsTypes
}

export interface AddProductAction extends ProductsAction {
    product: CreatedProduct
}

export interface DeleteProductAction extends ProductsAction {
    id: number
}

export default ProductsAction