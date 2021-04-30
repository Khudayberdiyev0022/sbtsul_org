import api from '../API'
//Selected Product Tanlangan Pradukta
export const addProduct = product => async dispatch => {
    const response = await api.post('/products', product);
    dispatch({
        type: 'ADD_PRODUCT',
        payload: response.data
    })
}


export const editProduct = (id, formValues) => async dispatch => {
    const response = await api.put(`/products/${id}`, formValues);
    dispatch({
        type: 'EDIT_PRODUCT',
        payload: response.data
    })
}

export const deleteProduct = id => async dispatch => {
    await api.delete(`/products/${id}`);
    dispatch({
        type: 'DELETE_PRODUCT',
        payload: id
    })
}
