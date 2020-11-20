// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
    switch(action.type) {
        case 'CREATE_PRODUCT':
            return {...state , product: action.payload}
        case 'LOGIN_ADMIN':
            return {...state, loggedin: action.payload}
        case 'ALL_PRODUCTS':
            return {...state, products: action.payload}
        default:
            return state;
    }
}