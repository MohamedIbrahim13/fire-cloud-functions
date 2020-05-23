const sendTwiit = (twiit)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        const profile =getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('twiits').add({...twiit,authorName:profile.username,twiit_time: new Date(),likes: 0,authorId:authorId}).then(
            ()=>{dispatch({type:'TWIIT_ADDED',twiit})}
        ).catch(error=>{dispatch({type:'TWIIT_ERROR',error})})
    }
};

export default sendTwiit
