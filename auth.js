

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDrxEQhNa_k9eYHUVtg_AeUh2WcbCRAK4E",
    authDomain: "dailydigest-d71c1.firebaseapp.com",
    projectId: "dailydigest-d71c1",
    storageBucket: "dailydigest-d71c1.appspot.com",
    messagingSenderId: "225122117676",
    appId: "1:225122117676:web:ce2576c8376753fca68989",
    measurementId: "G-J8ZK5Z4V4H"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
const analytics = getAnalytics(app);

//getting objects from html
var firstname=document.getElementById("firstName")
var lastname=document.getElementById("lastName")
var email=document.getElementById("email")
var password=document.getElementById("password")

//function
window.signup=function(e){
    e.preventDefault();
    var obj={
        firstname:firstname.value,
        lastname:lastname.value,
        email:email.value,
        password:password.value,
    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        alert("Signup Successfull")
    })
    .catch(function(err){
        alert("error" +err)
    })
    console.log(obj)
}
