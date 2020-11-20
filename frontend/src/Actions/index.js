import api from '../apis/index'
import history from '../history';
export const addProduct = (data,token) => async dispatch => {
    const response = await api.post('/sareeadmin/add', data, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'CREATE_PRODUCT', payload: response.data})
}

export const deleteProduct = (data,token) => async dispatch => {
    const response = await api.delete(`/sareeadmin/delete/${data}`, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'DELETE_PRODUCT', payload: response.data})
}

export const loginAdmin = (data) => async dispatch => {
    const response = await api.post('/admin/loginadmin', data)
    dispatch({type: 'LOGIN_ADMIN', payload: response.data})
    history.push('/dashboard');
}

export const GetAllProducts = () => async dispatch => {
    const response = await api.get('/admin/all')
    dispatch({type: 'ALL_PRODUCTS', payload: response.data})
}

export const Editsaree = (id,data,token) => async dispatch => {
    const response = await api.post(`/sareeadmin/update/${id}`, data, {
        headers: {
            'authorization' : `Bearer ${token}`
        }
    })
    dispatch({type: 'EDIT_PRODUCT', payload: response.data})
}

