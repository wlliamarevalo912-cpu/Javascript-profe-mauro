//10 Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original y su precio con descuento. El descuento lo hace en base a la clave, si la clave es 01 el descuento es del 10% y si la clave es 02 el descuento es del 20% (solo existen dos claves).

let articulo = "Celular";
let clave = 1;
let precioOriginal = 2500000;
let precioDescuento;

if (clave === 1) {
    precioDescuento = precioOriginal - (precioOriginal * 0.10);
} else if (clave === 2) {
    precioDescuento = precioOriginal - (precioOriginal * 0.20);
} else {
    precioDescuento = precioOriginal;
}

console.log ("Artículo: " + articulo);
console.log ("Clave: " + clave);
console.log ("Precio original: $" + precioOriginal);
console.log ("Precio con descuento: $" + precioDescuento);