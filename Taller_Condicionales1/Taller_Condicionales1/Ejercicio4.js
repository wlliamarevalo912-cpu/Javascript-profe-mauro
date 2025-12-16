//4 Un proveedor de computadores ofrece descuento del 10%, si cuesta $1.000.000 o más. Determinar cuánto pagará, con IVA incluido (19%), un cliente si la compra cumple con esta condición.

let precioPC = 1500000;
let iva = 0.19;

if (precioPC >=1000000) {
    let descuento = precioPC * 0.10;
    let precioDescuento = precioPC - descuento;
    let totalIVA = precioDescuento + (precioDescuento * iva);
    console.log ("El total a pagar con descuento e IVA es: $" + totalIVA);
} else {
    let totalIVA = precioPC + (precioPC * iva);
    console.log ("El total a pagar sin descuento, con IVA es: $" + totalIVA);
}