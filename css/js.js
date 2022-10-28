function getDepartamento(){
    return document.querySelector('input[name="departamento":checked')
}
var fields={}
documento.addEventListener("DOMContentLoaded", function(){
    fields.nombre=document.getElementById('nombre');
    fields.email=document.getElementById('email');
    fields.telefono=document.getElementById('telefono');
    fields.mensaje=document.getElementById('mensaje');
    fields.newsletter=document.getElementById('newsletter');
})

function isNotEmpty(value){
    if(value==null||typeof value=='undefined')return false;
    return(value.length>0);
}
function isNumber(num){
    return(num.length>0)&&!isNaN(num);
}

function isEmail(email) {
    let regex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(String(email).toLowerCase())
}

function fieldValidation(field, validationFunction) {
    if(field==null)return false;

    let isFieldValid=validationFunction(field.value)
    if(!isFieldValid){
        field.className='placeholderRed';
    } else {
        field.className='';
    }

    return isFieldValid
}

function isValid(){
    var valid=true;
    valid &= fieldValidation(fields.nombre, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.telefono, isNotEmpty);
    valid &= fieldValidation(fields.mensaje, isNotEmpty);
    valid &= fieldValidation(fields.departamento, isNotEmpty);
}

class User{
    constructor(nombre,departamento,email,telefono,newsletter,mensaje){
        this.nombre=nombre;
        this.departamento=departamento;
        this.email=email;
        this.telefono=telefono;
        this.newsletter=newsletter;
        this.mensaje=mensaje;
    }
}

function sendContact(){
    field.departamento=getDepartamento();
    if(isValid()) {
        let usr=new Contacto(nombre.value, departamento.value, telefono.value, email.value, mensaje.value);
    } else {
        alert("Ocurrió un error")
    }
}