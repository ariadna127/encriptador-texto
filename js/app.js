//Traemos elementos del DOM
const botonEncriptar = document.querySelector('#encriptar-btn');
const botonDesencriptar = document.querySelector('#btn-desencriptar');
const textoEncriptar = document.querySelector('.encriptar');
const textoAdvertencia = document.querySelector('#texto-advertencia');
const h2Salida = document.querySelector('#h2-salida');
const imgSalida = document.querySelector('#img-salida');
const parrafoSalida = document.querySelector('#p-salida');
const btnCopiar = document.querySelector('#btn-copiar');
const divMensajeSalida = document.querySelector('#div-mensaje-salida');




//ENCRIPTAR
botonEncriptar.addEventListener("click", ()=>{
    let texto = textoEncriptar.value;
    let textoMinuscula = texto.toLowerCase();
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    if (texto == "") {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El campo no debe estar vacío';
    } else if (texto != text) {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El campo no debe tener acentos ni caracteres especiales';
    }else if (texto != textoMinuscula) {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El texto debe estar completamente en minuscula.';
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
        imgSalida.classList.add('disabled');
        parrafoSalida.classList.add('disabled');
        btnCopiar.classList.remove('disabled');
        divMensajeSalida.classList.add('encriptado');
        h2Salida.classList.add('weight');
        h2Salida.innerHTML = texto;
    }

    textoEncriptar.value = "";
})

//DESENCRIPTAR

botonDesencriptar.addEventListener("click", ()=>{
    let texto = textoEncriptar.value;
    let textoMinuscula = texto.toLowerCase();
    let text = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "" );
    if (texto == "") {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El campo no debe estar vacío';
    } else if (texto != text) {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El campo no debe tener acentos ni caracteres especiales';
    }else if (texto != textoMinuscula) {
        imgSalida.classList.remove('disabled');
        parrafoSalida.classList.remove('disabled');
        btnCopiar.classList.add('disabled');
        divMensajeSalida.classList.remove('encriptado');
        h2Salida.innerText = "Ningún mensaje fue encontrado";
        textoAdvertencia.innerText = 'El texto debe estar completamente en minuscula.';
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        imgSalida.classList.add('disabled');
        parrafoSalida.classList.add('disabled');
        btnCopiar.classList.remove('disabled');
        divMensajeSalida.classList.add('encriptado');
        h2Salida.classList.add('weight');
        h2Salida.innerHTML = texto;
    }

    textoEncriptar.value = "";
})


//COPIAR
btnCopiar.addEventListener('click', ()=>{
    let textoCopiar = h2Salida.textContent;
    //Api del portapapeles
    navigator.clipboard.writeText(textoCopiar)
    .then(()=>{
        Toastify({
            text: "Texto copiado al portapapeles",
            duration: 2000,
            newWindow: false,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "rgba(10, 56, 113, 1)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
    })
    .catch(error =>{
        console.log('Error al copiar el texto', error);
    })
})