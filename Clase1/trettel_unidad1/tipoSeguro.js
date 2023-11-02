function enviar (form){
    var nombre = form.name.value;
    var email = form.email.value;
    var mensaje = form.message.value;

    const params ={
        name: nombre,
        email: email,
        msj: mensaje
    }
    console.log(params);
    alert("Su mensaje ha sido enviado correctamente");
    resetForm();
}

function resetForm() {
    document.querySelector("form").reset();
}