export const signUp =(newUser)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore= getFirestore();
        const firebase =getFirebase();
        firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                fullName:newUser.fullName,username:newUser.username,address:newUser.address,city:newUser.city,join_time:new Date(),likes: new Array()
            })
        }).then(()=>{
            dispatch({type:'JOIN_SUCCESS'})
        }).catch(error=>dispatch({type:'JOIN_ERROR',error})
        );
    }
};

export const signIn = (credentials)=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email,credentials.password).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch(error=>{
            dispatch({type:'LOGIN_ERROR'},error)
        });
    }
}

export const logOut = ()=>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'LOGOUT_SUCCESS'})
        }).catch(error=>{
            dispatch({type:'LOGOUT_ERROR'},error)
        });
    }
}