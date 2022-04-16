import ProductsAction, { AddProductAction, DeleteProductAction } from './actions';
import ProductsState, { Product } from './state';
import Types from "./types";

const initialState: ProductsState = {
    items: [
        {
            id: 1,
            name: 'dasdfsaf',
            price: 523.3
        },
        {
            id: 2,
            name: 'rwer',
            price: 123
        },
        {
            id: 3,
            name: 'hgfh',
            price: 23
        },
        {
            id: 4,
            name: 'sdfgd',
            price: 3.3
        },
        {
            id: 5,
            name: 'rewrw',
            price: 13
        },
    ]
}

function productReducer(state = initialState, action: ProductsAction): ProductsState {
    const newState = { ...state };

    switch (action.type) {
        case Types.Add:
            const addAction = action as AddProductAction;
            const ids: number[] = state.items
                .map((p) => p.id)

            const newProduct: Product = {
                ...addAction.product,
                id: Math.max(...ids) + 1
            }
            newState.items.push(newProduct)
            break;

        case Types.Delete:
            const deleteAction = action as DeleteProductAction;

            newState.items = newState.items
                .filter((p) => p.id !== deleteAction.id)
            break;
    }

    return newState;
}

export default productReducer;