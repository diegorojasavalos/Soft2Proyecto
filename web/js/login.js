/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var URL = "https://itesis.herokuapp.com/";
var cod = localStorage.getItem("cod");

$(document).ready(function () {
    if (cod !== null) {
        window.location.href = "index.html";
    }
    var login = function login() {
        var cod = $("#codigo").val();
        var pwd = $("#pass").val();
        if (cod === "" && pwd === "") {
            Materialize.toast('Ingrese sus credenciales', 3000, 'rounded');
        } else if (cod === "") {
            Materialize.toast('Ingrese su código', 3000, 'rounded');
        } else if (pwd === "") {
            Materialize.toast('Ingrese su contraseña', 3000, 'rounded');
        } else {
            var user =
                    {
                        "cod": cod,
                        "pwd": pwd
                    };
            $.ajax({
                type: "POST",
                url: URL + "login/",
                processData: false,
                contentType: 'application/json',
                data: JSON.stringify(user),
                success: function (r) {
                    //1=correcto, 2=incorrecto
                    if (r.cod === 1) {
                        //1=docente, 2=alumno
                        if (r.type === 2) {
                            localStorage.setItem("cod", cod);
                            localStorage.setItem("fullname", r.fullname);
                            window.location.href = "index.html";
                        } else if (r.type === 1) {
                            Materialize.toast('Aún no hay pantallas para docentes', 3000, 'rounded');
                            //window.location.href = "/profesor.html";
                        }
                    } else {
                        Materialize.toast('Credenciales incorrectas', 3000, 'rounded');
                    }
                }});
        }
    };

    $("#login").click(login);
    $(document).keypress(function (e) {
        if (e.which === 13) {
            login();
        }
    });
});