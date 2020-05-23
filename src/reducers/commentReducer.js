const initState ={};


const replyReducer = (state=initState,action)=>{
    switch(action.type){
        case 'REPLY_SENT':
            return state;
        case 'REPLY_SENT_ERROR':
            return state;
        default:
            return state;
    }
};

export default replyReducer