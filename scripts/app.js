const inputProducto = document.getElementById('inputProducto')
const inputPrecio = document.getElementById('inputPrecio')
const button = document.getElementById('buttonRegistrar')

const main = document.querySelector('main')
const arregloProductos = []

button.addEventListener('click', () => {

    if(!inputProducto.value || !inputPrecio.value) {
        alert('Por favor complete ambos campos')
        return
    }

    // comprobar si el precio es un numero
    if(isNaN(inputPrecio.value)) {
        alert('El precio debe ser un numero')
        return
    }

    // comprobar si el precio es mayor a 0
    if(Number(inputPrecio.value) <= 0) {
        alert('El precio debe ser mayor a 0')
        return
    }

    const item = {
        producto: inputProducto.value,
        precio: Number(inputPrecio.value).toFixed(2)
    }

    arregloProductos.push(item)

    main.innerHTML = ''

    arregloProductos.forEach(({ producto, precio }) => {
        main.innerHTML += `<p>${producto} - $${precio}</p>`
    })

    // Limpiar inputs
    inputProducto.value = ''
    inputPrecio.value = ''
})