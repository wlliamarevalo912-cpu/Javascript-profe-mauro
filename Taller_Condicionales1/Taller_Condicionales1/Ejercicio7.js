//7 Calcular el salario de un empleado, teniendo en cuenta que si el salario bruto es superior a $2.000.000, debe hacerse una retención del 10%.

let salarioBruto = 3000000;

if (salarioBruto > 2000000) {
    let retencion = salarioBruto * 0.10;
    let salario = salarioBruto - retencion; 
    console.log ("El salario después de retencion es: $" + salario);
} else {
    console.log ("El salario sin retencion es: $" + salarioBruto);
}