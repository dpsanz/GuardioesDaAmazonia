const firebaseConfig = {
    apiKey: "AIzaSyCn-ukMfhelHgCLhNRWU7YY8X4weGj8pHw",
    authDomain: "guardioes-da-ia.firebaseapp.com",
    projectId: "guardioes-da-ia",
    storageBucket: "guardioes-da-ia.appspot.com",
    messagingSenderId: "76961747495",
    appId: "1:76961747495:web:4c98cf49a21def2dfdb402",
    measurementId: "G-8B8JT84CKZ"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  function logout() {
    firebase
    .auth()
    .signOut()
    .then(() => {
      alert("Usuario deslogado");
    });
  }