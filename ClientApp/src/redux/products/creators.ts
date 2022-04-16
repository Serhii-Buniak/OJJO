import { CreatedProduct } from './state';
import { AddProductAction, DeleteProductAction } from "./actions"
import ProductsTypes from "./types"

export function addProduct(product: CreatedProduct): AddProductAction {
    return ({
        type: ProductsTypes.Add,
        product: product,
    })
}

export function deleteProduct(id: number): DeleteProductAction {
    return ({
        type: ProductsTypes.Delete,
        id: id,
    })
}