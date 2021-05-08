import { combineReducers } from "redux";
import _ from "lodash";

//ALL APIS
const fetchQuotasReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_QUOTAS":
      return [action.payload];
    default:
      return state;
  }
};
const fetchMessagesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_MESSAGES":
      return [action.payload];
    default:
      return state;
  }
};
const fetchStudentsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_STUDENTS":
      return [action.payload];
    default:
      return state;
  }
};
const fetchNewsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_NEWS":
      return [action.payload];
    default:
      return state;
  }
};

const fetchImagesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_IMAGES":
      return [action.payload];
    default:
      return state;
  }
};
const fetchVacancysReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_API_VACANCYES":
      return [action.payload];
    default:
      return state;
  }
};
//SELECTED_FOR_ANY_ACTION
const selectedForAnyActionReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_ANY_ITEM":
      return [action.payload];
    default:
      return state;
  }
};
//CRUD OPERATIONS
const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_QUOTAS":
      return { ...state, [action.payload.id]: action.payload };
    case "EDIT_PRODUCT_QUOTAS":
      return { ...state, [action.payload.id]: action.payload };
    case "DELETE_PRODUCT_QUOTAS":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
// Change language
const changeLanguageReducer = (state = "UZB", action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
};
// SelectedNew
const selectedNewReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_NEW":
      return action.payload;
    default:
      return state;
  }
};

// Open Modal
const modalOpenReducer = (state = [], action) => {
  switch (action.type) {
    case "MODAL_OPEN":
      return action.payload;
    default:
      return state;
  }
};


export default combineReducers({
  productReducer: productReducer,
  productsQuotas: fetchQuotasReducer,
  productsMessages: fetchMessagesReducer,
  productsStudents: fetchStudentsReducer,
  productsNews: fetchNewsReducer,
  productsImages: fetchImagesReducer,
  productsVacancys: fetchVacancysReducer,
  selected: selectedForAnyActionReducer,
  language: changeLanguageReducer,
  new: selectedNewReducer,
  modalPicture: modalOpenReducer
});
