console.log("vinculado")

const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

console.log("formuario; ",formulario)
console.log("vinculado: ",inputs)

const expreciones = {
    nombre: /^[a-zA-Z]{4,16}$/,
    telefono: /^[0-9]{9}$/,
    dni: /^[0-9]{8}$/
}

const campos = {
    nombre: false,
    telefono: false,
    dni: false
}

const validarFormualrio = (e) => {
    // console.log(e.target.name)
    switch(e.target.name) {
        case "nombre":
            validarCampo(expreciones.nombre,e.target,"nombre")
            break;
        case "telefono":
            validarCampo(expreciones.telefono,e.target,"telefono")
            break
        case "dni":
            validarCampo(expreciones.dni,e.target,"dni")
            break
    }
}

const validarCampo = (exprecion,input,campo) => {

    if ( exprecion.test(input.value) ) {
        document.querySelector(`#campo-${campo} .advertencia`).classList.remove('advertencia-activa')
        campos[campo] = true
    }else {
        document.querySelector(`#campo-${campo} .advertencia`).classList.add('advertencia-activa')
        campos[campo] = false
    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormualrio)
    input.addEventListener('blur',validarFormualrio)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    if ( campos.nombre && campos.telefono && campos.dni ) {
        formulario.submit()
    }
})