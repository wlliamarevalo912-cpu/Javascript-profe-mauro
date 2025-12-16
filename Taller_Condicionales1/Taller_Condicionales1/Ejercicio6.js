//6 En un almacén se hace un 20% de descuento a los clientes cuya compra sea superior a $100.000. ¿Cuánto deberá pagar cada cliente?.

let compra = 160000;

if (compra > 100000) {
    let descuento = compra * 0.20;
    let total = compra - descuento;
    console.log ("El total a pagar con descuento es: $" + total);
} else {
    console.log ("El total a pagar sin descuento es: $" + compra);
}