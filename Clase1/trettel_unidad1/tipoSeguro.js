function apareceTexto(elementoUno, elementoDos, elementoTres) {
    
    elementoUno.style.visibility = "visible";
    elementoDos.style.visibility = "hidden";
    elementoTres.style.visibility = "hidden";
}

document.getElementById("miFormulario").addEventListener("submit",
function(event) {
 event.preventDefault(); // Prevenir el comportamiento por defecto
 alert("Formulario enviado");
});
