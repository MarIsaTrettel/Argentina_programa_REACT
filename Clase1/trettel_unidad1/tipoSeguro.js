function enviar (form){
    var nombre = form.name.value;
    var apellido = form.surname.value;
    var documento = form.dni.value;
    var email = form.email.value;
    var telefono = form.phone.value;
    var seguro = form.seguro.value;

    const params ={
        name: nombre,
        surname: apellido,
        dni: documento,
        email: email,
        phone: telefono,  
        seguro: seguro,      
    }

    console.log(params);
    alert("Su mensaje ha sido enviado correctamente");
    resetForm();
}

function resetForm() {
    document.querySelector("form").reset();
}