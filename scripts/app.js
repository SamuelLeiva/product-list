const inputProducto = document.getElementById('inputProducto')
const inputPrecio = document.getElementById('inputPrecio')
const buttonRegistrar = document.getElementById('buttonRegistrar')
const buttonLimpiar = document.getElementById('buttonLimpiar')
const buttonSuma = document.getElementById('buttonSuma')

const listaProductos = document.getElementById('listaProductos')
const arregloProductos = []

buttonRegistrar.addEventListener('click', () => {

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

    listaProductos.innerHTML = ''

    arregloProductos.forEach(({ producto, precio }) => {
        listaProductos.innerHTML += `<li>${producto} - $${precio}</li>`
    })

    // Limpiar inputs
    inputProducto.value = ''
    inputPrecio.value = ''
})

// Evento para limpiar el arreglo y el contenido de la lista
buttonLimpiar.addEventListener('click', () => {
    arregloProductos.length = 0
    listaProductos.innerHTML = ''
});

// Evento para sumar los precios de los productos
buttonSuma.addEventListener('click', () => {
    if(arregloProductos.length === 0) {
        alert('No hay productos para sumar')
        return
    }

    const suma = arregloProductos.reduce((acc, producto) => acc + Number(producto.precio), 0)

    alert(`La suma total de los productos es: $${suma.toFixed(2)}`)
})

