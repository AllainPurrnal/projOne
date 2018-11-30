// If the user is signed in
// Push user's data


// firebase initialization
var config = {
    apiKey: "AIzaSyDzixpXHU87uZ_gbAfy6YP3btwUVek9rWw",
    authDomain: "project-furr.firebaseapp.com",
    databaseURL: "https://project-furr.firebaseio.com",
    projectId: "project-furr",
    storageBucket: "project-furr.appspot.com",
    messagingSenderId: "654872510123"
};
firebase.initializeApp(config);

// database ref
var userData = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        console.log('display name: ' + user.displayName);
        console.log('email: ' + user.email);
        console.log('verified? : ' + user.emailVerified);
        console.log('photoURL: ' + 'user.photoURL');
        console.log('uid: ' + user.uid);
        console.log('phone: ' + user.phoneNumber);
        console.log('providerData: ' + user.providerData);

        
        var name = user.displayName;
        var email = user.email;
        var userID = user.uid;
        
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('userID', userID);
    };
});