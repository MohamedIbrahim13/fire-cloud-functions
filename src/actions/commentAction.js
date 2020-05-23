const sendReply =(reply)=>{
    return (dispatch,getState,{getFirestore})=>{
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const currentUserId = getState().firebase.auth.uid;

        firestore.collection('replies').add({...reply,owner:profile.username,owner_id:currentUserId,reply_time: new Date(), likes: 0}).then(()=>{dispatch({type:'REPLY_SENT',reply})}).catch(error=>{dispatch({type:'REPLY_SENT_ERROR',error})})
    }
};

export default sendReply