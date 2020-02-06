const initialState = {
    email: '',
    password: '',
    picture: '',
    logged:{}
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'POST_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
        case 'POST_PICTURE':
            return {
                ...state,
                picture: action.payload
            }
            case 'LOGIN':
            return {
                ...state,
                logged: action.payload
            }       
        default:
            return state;
    }
};

export default usersReducer
