const initState = {authError:null};

const authReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'JOIN_SUCCESS' :
            return {...state,authError:null};
        case 'JOIN_ERROR' :
            return {...state,authError:action.error.message};
        case 'LOGIN_SUCCESS' :
            return {...state,authError:null};
        case 'LOGIN_ERROR' :
            return {...state,authError:'Login Failed'};
        case 'LOGOUT_SUCCESS' :
            return state;
        default:
            return state;
    }
};

export default authReducer