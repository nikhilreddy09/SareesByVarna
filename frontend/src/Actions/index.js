import api from '../apis/index'
import history from '../history';
import Toast from 'light-toast';
export const addProduct = (data,token) => async dispatch => {
    console.log(data)
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
    if(response.data === "email is wrong" || response.data === "password is wrong") {
        Toast.fail('Login failed', 3000, () => {
            history.push('/admin')
        })
        console.log("fail")
    } else {
        Toast.success('Login Success', 2000, () => {
            history.push('/dashboard')
        });
    }
    
}

export const deleteAdmin = data => ({
    type: "LOGOUT_ADMIN",
    payload: data
});

export const GetAllProducts = () => async dispatch => {
    const response = await api.get('/admin/all')
    console.log(response.data)
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

