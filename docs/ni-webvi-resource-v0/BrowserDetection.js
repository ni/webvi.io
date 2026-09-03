/* eslint-disable */ // Disabling all ESLint rules since this file should never be updated to use any modern JS features.

//**********************************************************
// Detect some outdated browsers and display a message to the user
// National Instruments Copyright 2020
//**********************************************************
// This file relies on <script nomodule> to avoid running on modern browsers
// Note: Lack of modules means the browser is unsupported by WebVIs however modules support does not mean WebVIs are fully supported
// Note: strict mode, let/const, and strict equality operators avoided to support older browsers
(function () {
    var windowLoaded = function (callback) {
        if (window.addEventListener) {
            window.addEventListener('load', callback);
        } else if (window.attachEvent) {
            // Note: the on- prefix intended for legacy attachEvent api
            window.attachEvent('onload', callback);
        } else {
            // Generally avoid overwriting onload, but exception made for very old browsers to show banner
            window.onload = callback;
        }
    };
    windowLoaded(function () {
        var outdatedBrowserMessage = document.getElementById('ni-outdated-browser-message');
        if (outdatedBrowserMessage != null) {
            outdatedBrowserMessage.style.display = 'block';
        }
    });
}());
