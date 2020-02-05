const initilState = {  email: '',
      password: '',
      picture: '', login:{} };

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_USER': return {
            ...state,
            user: action.payload
        }
        case 'LOGIN_USER': return {
            ...state,
            login: action.payload
        }
        default: return state;
    }
};

export default usersReducer
