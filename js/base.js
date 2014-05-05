"use strict";

// Set desired locale
// For example, setting the language to Spanish
//document.webL10n.setLanguage("es");

// Reload content
var reload = document.querySelector("#reload");
if (reload) {
    reload.onclick = function () {
        location.reload(true);
    };
}