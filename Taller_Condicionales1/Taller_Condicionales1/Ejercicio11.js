//11 Hacer un algoritmo que calcule el total a pagar por la compra de camisas. Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra y si son menos de tres camisas un descuento del 10%.

let cantidadCamisas = 6;
let precioCamisa = 120000;
let totalCompra = cantidadCamisas * precioCamisa;
let descuento;

if (cantidadCamisas >= 3) {
    descuento = totalCompra - (totalCompra * 0.20);
} else {
    descuento = totalCompra - (totalCompra * 0.10);
}

console.log ("Cantidad de camisas: " + cantidadCamisas);
console.log ("Precio por camisa: $" + precioCamisa);
console.log ("Total sin descuento: $" + totalCompra);
console.log ("Total con descuento: $" + descuento);