/*//index.js
var overlay = document.getElementById("overlay");
var loginForm = document.getElementById("loginForm");
var overlay1 = document.getElementById("overlay1");
var registrationForm=document.getElementById("registrationForm");

function openLoginForm() {
  overlay.style.display = "block";
  document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
  overlay.style.display = "none";
  document.getElementById("loginForm").style.display = "none";
}

     function openRegistrationForm() {
        overlay1.style.display = "block";
        document.getElementById("registrationForm").style.display = "block";
      } 
      function closeLoginForm1() {
        overlay1.style.display = "none";
        document.getElementById("registrationForm").style.display = "none";
      }

      function openTenantRegistration() {
        window.location.href = "tenant_registration.html";
    } 

    function openLandlordRegistration(){
        window.location.href = "landlord_registration.html";
    }
    
*/
import React from "react";
import ReactDOM  from "react-dom";
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'));
