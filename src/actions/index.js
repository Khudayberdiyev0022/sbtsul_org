import api from '../API'



export const fetchQuotasProducts = () => async dispatch => {
    const response = await api.get(`/quotas/`)
    dispatch({
        type: 'FETCH_API_QUOTAS',
        payload: response.data
    })
}
export const fetchMessagesProducts = () => async dispatch => {
    const response = await api.get(`/messages/`)
    dispatch({
        type: 'FETCH_API_MESSAGES',
        payload: response.data
    })
}
export const fetchStudentProducts = () => async dispatch => {
    const response = await api.get(`/students/`)
    dispatch({
        type: 'FETCH_API_STUDENTS',
        payload: response.data
    })
}
export const fetchNewsProducts = () => async dispatch => {
    const response = await api.get(`/news/`)
    dispatch({
        type: 'FETCH_API_NEWS',
        payload: response.data
    })
}



//CRUD OPERATIONS

export const addProduct = (name, product) => async dispatch => {
    const response = await api.post(`/${name}/add/`, product);
    dispatch({
        type: `ADD_PRODUCT`,
        payload: response.data
    })
}


export const editProduct = (name, id, formValues) => async dispatch => {
    const response = await api.post(`/${name}/edit/${id}/`, formValues);
    dispatch({
        type: 'EDIT_PRODUCT',
        payload: response.data
    })
}

export const deleteProduct = (name, id) => async dispatch => {
    await api.delete(`/${name}/delete/${id}/`);
    dispatch({
        type: 'DELETE_PRODUCT',
        payload: id
    })
}
export const selectedAnyItem = item => {
    return {
        type: 'SELECTED_ANY_ITEM',
        payload: item
    }
}

// Chane language
export const changeLanguage = name => {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: name
    }
}



