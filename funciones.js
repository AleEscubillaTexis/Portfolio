window.onload = function () {
    if (window.navigator.language === "es-ES") {
        var btnLanguage = document.getElementById("btnLanguage");
        btnLanguage.innerHTML = "ES";
        $("#languageFlag").attr("src", "images/arg2.png");
        $("#texto").html(MostrarTexto("spanish"));
    }
};
$(function () {
    $('#btnLanguage').on('click', CambiarIdioma);
});
function CambiarIdioma() {
    var btnLanguage = document.getElementById("btnLanguage");
    if (btnLanguage.innerHTML == "ES") {
        btnLanguage.innerHTML = "EN";
        $("#languageFlag").attr("src", "images/eng.png");
        $("#texto").html(MostrarTexto("english"));
    }
    else if (btnLanguage.innerHTML == "EN") {
        btnLanguage.innerHTML = "ES";
        $("#languageFlag").attr("src", "images/arg2.png");
        $("#texto").html(MostrarTexto("spanish"));
    }
}
function MostrarTexto(idioma) {
    var tabla = "";
    if (idioma == "spanish") {
        tabla = "<div class=\"info\">\n                                \n                                <h1 class=\"titulo\">Hola, soy <span class=\"nombre\">Ale.</span></h1>\n                                <h2>Front-end developer</h2>\n    \n                                <div class=\"texto\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                                        dolore\n                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                        commodo\n                                        consequat.</p>\n                                </div>\n    \n                                <div id=\"botones\">\n                                    <a class=\"boton1\">Trabajos</a>\n                                    <a href=\"contact.html\" class=\"boton2\">Contacto</a>\n                                </div>\n                            </div> ";
    }
    else if (idioma == "english") {
        tabla = "<div class=\"info\">\n                                \n                                <h1 class=\"titulo\">Hello, I'm <span class=\"nombre\">Ale.</span></h1>\n                                <h2>Front-end developer</h2>\n    \n                                <div class=\"texto\">\n                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                                        dolore\n                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n                                        commodo\n                                        consequat.</p>\n                                </div>\n    \n                                <div id=\"botones\">\n                                    <a class=\"boton1\">Works</a>\n                                    <a href=\"contact.html\" class=\"boton2\">Contact</a>\n                                </div>\n                            </div> ";
    }
    return tabla;
}
