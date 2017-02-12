/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var URL = "https://itesis.herokuapp.com/";
var cod = localStorage.getItem("cod");

$(document).ready(function () {
    if (cod === null) {
        window.location.href = "login.html";
    }
});