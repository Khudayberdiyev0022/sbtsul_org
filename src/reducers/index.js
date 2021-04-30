import { combineReducers } from 'redux'
import _ from 'lodash'


const productReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, [action.payload.id]: action.payload };
        case 'EDIT_PRODUCT':
            return { ...state, [action.payload.id]: action.payload }
        case 'DELETE_PRODUCT':
            return _.omit(state, action.payload)
        default:
            return state;
    }
}




export default combineReducers({
    productReducer: productReducer
})