import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAQPA1XE7dm2cz9cUHeFbTWwDteMvcbHrQ",
    authDomain: "nba-full-bc1f1.firebaseapp.com",
    databaseURL: "https://nba-full-bc1f1.firebaseio.com",
    projectId: "nba-full-bc1f1",
    storageBucket: "nba-full-bc1f1.appspot.com",
    messagingSenderId: "564318422895"
  };
  firebase.initializeApp(config);
  
const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}