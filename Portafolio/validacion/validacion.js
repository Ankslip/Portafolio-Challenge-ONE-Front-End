var nombre = document.querySelector("#nombre");
var e_mail = document.querySelector("#e-mail");
var asunto = document.querySelector("#asunto");
var mensaje = document.querySelector("#mensaje")
var form = document.querySelector("#form");
var botonEnviar = document.querySelector("#enviar");

botonEnviar.addEventListener("click", function() {
    nombreFormulario = nombre.value;
    correoFormulario = e_mail.value;
    asuntoFormulario = asunto.value;
    mensajeFormulario = mensaje.value;

    
    alert("Formulario enviado: " +
          "\nSu nombre es: " + nombreFormulario +
          "\nSu correo es: " + correoFormulario +
          "\nEl asunto es: " + asuntoFormulario +
          "\nEl mensaje es: " + mensajeFormulario);

    form.reset();
    
});