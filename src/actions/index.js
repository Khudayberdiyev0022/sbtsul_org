import api from "../API";

export const fetchQuotasProducts = () => async (dispatch) => {
  const response = await api.get(`/quotas/`);
  dispatch({
    type: "FETCH_API_QUOTAS",
    payload: response.data,
  });
};
export const fetchMessagesProducts = () => async (dispatch) => {
  const response = await api.get(`/messages/`);
  dispatch({
    type: "FETCH_API_MESSAGES",
    payload: response.data,
  });
};
export const fetchStudentProducts = () => async (dispatch) => {
  const response = await api.get(`/students/`);
  dispatch({
    type: "FETCH_API_STUDENTS",
    payload: response.data,
  });
};
export const fetchNewsProducts = () => async (dispatch) => {
  const response = await api.get(`/news/`);
  dispatch({
    type: "FETCH_API_NEWS",
    payload: response.data,
  });
};
export const fetchImagesProducts = () => async (dispatch) => {
  const response = await api.get(`/images/`);
  dispatch({
    type: "FETCH_API_IMAGES",
    payload: response.data,
  });
};
export const fetchVacancysProducts = () => async (dispatch) => {
  const response = await api.get(`/vacancy/`);
  dispatch({
    type: "FETCH_API_VACANCYES",
    payload: response.data,
  });
};
export const fetchAdminsProducts = () => async (dispatch) => {
  const response = await api.get(`/admin/`);
  dispatch({
    type: "FETCH_API_ADMINS",
    payload: response.data,
  });
};


//CRUD OPERATIONS

export const addProduct = (name, product) => async (dispatch) => {
  const response = await api.post(`/${name}/add/`, product);
  dispatch({
    type: `ADD_PRODUCT`,
    payload: response.data,
  });
};

export const editProduct = (name, id, formValues) => async (dispatch) => {
  const response = await api.post(`/${name}/edit/${id}/`, formValues);
  dispatch({
    type: "EDIT_PRODUCT",
    payload: response.data,
  });
};

export const deleteProduct = (name, id) => async (dispatch) => {
  await api.delete(`/${name}/delete/${id}/`);
  dispatch({
    type: "DELETE_PRODUCT",
    payload: id,
  });
};
export const selectedAnyItem = (item) => {
  return {
    type: "SELECTED_ANY_ITEM",
    payload: item,
  };
};

// Chane language
export const changeLanguage = (name) => {
  return {
    type: "CHANGE_LANGUAGE",
    payload: name,
  };
};

// Fetch Selected News
export const SelectedNew = (newObject) => {
  return {
    type: "SELECTED_NEW",
    payload: newObject,
  };
};
// Open modal
export const ModalPicture = (image) => {
  return {
    type: "MODAL_OPEN",
    payload: image
  }
}



// Curent Admin
export const CurentAdmin = data => {
  if (data === '') {
    return {
      type: "CURENT_ADMIN_LOGOUT",
    }
  }
  return {
    type: "CURENT_ADMIN",
    payload: data
  }
}
//CRUD OPERATIONS CONTINUE !!!!!!!!!!READ!!!!!!!!!!!!!!


//Read Admin

export const ReadAdmin = admin => {
  return {
    type: "READ_ADMIN",
    payload: admin
  }
}
//Read Quota

export const ReadQuota = quota => {
  return {
    type: "READ_QUOTA",
    payload: quota
  }
}

//Read new

export const ReadNew = news => {
  return {
    type: "READ_NEW",
    payload: news
  }
}
//Read image

export const ReadImage = image => {
  return {
    type: "READ_IMAGE",
    payload: image
  }
}

//Read message

export const ReadMessage = message => {
  return {
    type: "READ_MESSAGE",
    payload: message
  }
}
//Read vacancy

export const ReadVacancy = vacancy => {
  return {
    type: "READ_VACANCY",
    payload: vacancy
  }
}

//Read student

export const ReadStudent = student => {
  return {
    type: "READ_STUDENT",
    payload: student
  }
}