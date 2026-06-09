/**
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
*/

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
$(document).ready(function() {
        // Animación simple de inicio del sistema
        $('.terminal-container').hide().fadeIn(1500);

        // Alternar entre Login y Registro
        $('#show-register').click(function() {
            $('#login-section').slideUp(300, function() {
                $('#register-section').slideDown(300);
            });
        });

        $('#show-login').click(function() {
            $('#register-section').slideUp(300, function() {
                $('#login-section').slideDown(300);
            });
        });

        // Interceptar el Login para tu futura API
        $('#login-form').submit(function(e) {
            e.preventDefault();
            let user = $('#loginUser').val();
            let pass = $('#loginPass').val();
            
            // Aquí irá tu llamada AJAX
            console.log("Intentando acceder a la API con:", user);
            alert("> PROCESANDO SOLICITUD... ESPERANDO RESPUESTA DEL SERVIDOR.");
        });

        // Interceptar el Registro para tu futura API
        $('#register-form').submit(function(e) {
            e.preventDefault();
            // Aquí irá tu llamada AJAX para el registro
            alert("> CREANDO PERFIL EN LA BASE DE DATOS... NO APAGUE EL EQUIPO.");
        });
    });
    $(document).ready(function() {
    // 1. Cargar el sonido del teclado
    // He puesto una URL de prueba, pero te recomiendo descargar tu propio sonido corto (.mp3) 
    // y poner la ruta local de tu proyecto, por ejemplo: 'assets/tecla-mecanica.mp3'
    const sonidoTecla = new Audio('https://cdn.freesound.org/previews/256/256543_4486188-lq.mp3');
    
    // Bajar un poco el volumen para que no sature
    sonidoTecla.volume = 0.5;

    // 2. Escuchar el evento de presionar teclas en los inputs
    $('input').on('keydown', function(e) {
        // Evitar que suene al presionar teclas de control como Shift, Ctrl, Alt
        if (e.key === 'Shift' || e.key === 'Control' || e.key === 'Alt' || e.key === 'Tab') {
            return; 
        }

        // Reiniciar el tiempo del audio a 0. 
        // Esto es súper importante para que el sonido no se retrase cuando escribes muy rápido.
        sonidoTecla.currentTime = 0; 
        
        // Reproducir el sonido
        sonidoTecla.play().catch(function() {
            // Nota: Los navegadores modernos bloquean el audio hasta que el usuario 
            // hace clic por primera vez en la página por políticas de "Autoplay".
            // Una vez que el usuario haga clic en el input, el sonido funcionará.
        });
    });

    // --- EL RESTO DEL CÓDIGO QUE YA TENÍAMOS ---

    // Animación simple de inicio del sistema
    $('.terminal-container').hide().fadeIn(1500);

    // Alternar entre Login y Registro
    $('#show-register').click(function() {
        $('#login-section').slideUp(300, function() {
            $('#register-section').slideDown(300);
        });
    });

    $('#show-login').click(function() {
        $('#register-section').slideUp(300, function() {
            $('#login-section').slideDown(300);
        });
    });

    // Interceptar el Login
    $('#login-form').submit(function(e) {
        e.preventDefault();
        let user = $('#loginUser').val();
        console.log("Intentando acceder a la API con:", user);
        alert("> PROCESANDO SOLICITUD... ESPERANDO RESPUESTA DEL SERVIDOR.");
    });

    // Interceptar el Registro
    $('#register-form').submit(function(e) {
        e.preventDefault();
        alert("> CREANDO PERFIL EN LA BASE DE DATOS... NO APAGUE EL EQUIPO.");
    });
});