window.onload = function () {

    if (window.navigator.language === "es-ES")
    {
        let btnLanguage = document.getElementById("btnLanguage");
        btnLanguage.innerHTML = "ES";
        $("#languageFlag").attr("src","images/arg2.png");
        $("#texto").html(MostrarTexto("spanish"));
    }
}


$(function(){

    $('#btnLanguage').on('click', CambiarIdioma);
});

function CambiarIdioma() : void
{
    let btnLanguage = document.getElementById("btnLanguage");

    if(btnLanguage.innerHTML == "ES")
    {    
        btnLanguage.innerHTML = "EN";
        $("#languageFlag").attr("src","images/eng.png");
        $("#texto").html(MostrarTexto("english"));
    }
    else if (btnLanguage.innerHTML == "EN")
    {
        btnLanguage.innerHTML = "ES";
        $("#languageFlag").attr("src","images/arg2.png");
        $("#texto").html(MostrarTexto("spanish"));
    }   
}

function MostrarTexto(idioma : string)
{
    let tabla:string = "";
    if(idioma == "spanish")
    {
        tabla = `<div class="info">
                                
                                <h1 class="titulo">Hola, soy <span class="nombre">Ale.</span></h1>
                                <h2>Front-end developer</h2>
    
                                <div class="texto">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat.</p>
                                </div>
    
                                <div id="botones">
                                    <a class="boton1">Trabajos</a>
                                    <a href="contact.html" class="boton2">Contacto</a>
                                </div>
                            </div> `;

    }
    else if(idioma == "english")
    {
        tabla = `<div class="info">
                                
                                <h1 class="titulo">Hello, I'm <span class="nombre">Ale.</span></h1>
                                <h2>Front-end developer</h2>
    
                                <div class="texto">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore
                                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo
                                        consequat.</p>
                                </div>
    
                                <div id="botones">
                                    <a class="boton1">Works</a>
                                    <a href="contact.html" class="boton2">Contact</a>
                                </div>
                            </div> `;
    }
    return tabla;
}