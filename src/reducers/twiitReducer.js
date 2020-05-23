const initState={};

const twiitReducer = (state=initState,action)=>{
    switch (action.type) {
        case 'TWIIT_ADDED' :
            return state;
        case 'TWIIT_ERROR' :
            return state;
        default:
            return state;
    }
};

export default twiitReducer