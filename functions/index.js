const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// const onCreateReply =(reply)=>{
//     admin.firestore().collection('notifications').add(reply).then(doc=>console.log('Reply added',doc)).catch(err=>console.log(err));
// };

// exports.onReply = functions.firestore.document('replies/{replyId}').onCreate(doc=>{
//     const reply = doc.data();
//     const notiReply = {text: 'replied to your twiit.', user:reply.owner,noti_time:admin.firestore.FieldValue.serverTimestamp()};
//     return onCreateReply(notiReply);
// });

// const onCreateUser =(user)=>{
//     admin.firestore().collection('notifications').add(user).then(doc=>console.log('User joined',doc)).catch(err=>console.log(err));
// };

// exports.onJoin = functions.firestore.document('users/userId').onCreate(doc=>{
//     const user = doc.data();
//     const notiJoin = { text:'has joined.' ,user: user.username,noti_time: admin.firestore.FieldValue.serverTimestamp()};
//     return onCreateUser(notiJoin);
// });

exports.twiitLikes= functions.https.onCall(async(data,context)=>{
    if(!context.auth){
        throw new functions.https.HttpsError('unauthenticated','Not permitted user');
    }
    const user =admin.firestore().collection('users').doc(context.auth.uid);
    const twiit = admin.firestore().collection('twiits').doc(data.id);

    const doc = await user.get();
    if(doc.data().likes.includes(data.id)){
        throw new functions.https.HttpsError('failed-precondition','You can only vote once');
    }

    await user.update({
        likes: [...doc.data().likes,data.id]
    });

    await twiit.update({likes:admin.firestore.FieldValue.increment(1)});
});

exports.replyLikes= functions.https.onCall(async(data,context)=>{
    if(!context.auth){
        throw new functions.https.HttpsError('unauthenticated','Not permitted user');
    }
    const user =admin.firestore().collection('users').doc(context.auth.uid);
    const reply = admin.firestore().collection('replies').doc(data.id);

    const doc = await user.get();
    if(doc.data().likes.includes(data.id)){
        throw new functions.https.HttpsError('failed-precondition','You can only vote once');
    }

    await user.update({
        likes: [...doc.data().likes,data.id]
    });

    await reply.update({likes:admin.firestore.FieldValue.increment(1)});
});


exports.onAction =functions.firestore.document('/{collection}/{id}').onCreate((snap,context)=>{
    const collection = context.params.collection;
    const notifications = admin.firestore().collection('notifications');
    if(collection === 'replies'){
        return notifications.add({text: 'A reply added to the twiit.',noti_time:admin.firestore.FieldValue.serverTimestamp()})
    }
    if(collection === 'users'){
        return notifications.add({text:'A new user has joined.' ,noti_time: admin.firestore.FieldValue.serverTimestamp()})
    }
    return null;
});