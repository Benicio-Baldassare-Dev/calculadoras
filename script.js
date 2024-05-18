let menu = Number(prompt("--Menu Principal-- \n 1. Calculadora de Prestamos \n 2. Calculadora "));


//------ funciones ------//
function suma() {
    let numero1 = Number(prompt("Ingrese un numero:"));
    let numero2 = Number(prompt("Ingrese un numero:"));
    let resultadoS = numero1 + numero2;
    console.log("El resultado de la suma es igual a:", resultadoS);
}

function resta() {
    let numero3 = Number(prompt("Ingrese un numero:"));
    let numero4 = Number(prompt("Ingrese un numero:"));
    let resultadoR = numero3 + numero4;
    console.log("El resultado de la resta es igual a:", resultadoR);
}

function multiplicar() {
    let numero5 = Number(prompt("Ingrese un numero:"));
    let numero6 = Number(prompt("Ingrese un numero:"));
    let resultadoM = numero5 * numero6;
    console.log("El resultado de la multiplicacion es igual a:", resultadoM);
}

function dividir() {
    let numero7 = Number(prompt("Ingrese un numero:"));
    let numero8 = Number(prompt("Ingrese un numero:"));

    while (numero7 <= 0) {
        console.log("Ingresa un valor mayor o igual a 1");
        numero7 = Number(prompt("Ingrese denuevo el numero:"));
    }

    while (numero8 <= 0) {
        console.log("Ingresa un valor mayor o igual a 1");
        numero8 = Number(prompt("Ingrese denuevo el numero:"));
    }

    let resultadoD = numero7 / numero8;
    console.log("El resultado de la division es igual a:", resultadoD);
}

//------ switch ------//
switch (menu) {
    case 1:
        console.log("Bienvenido a la Calculadora de Préstamos");

        let importe = parseInt(prompt("Ingrese el importe del préstamo:"));

        while (importe > 2000000) {
            console.log("El importe maximo es de $2.000.000");
            importe = parseInt(prompt("Ingrese el importe del préstamo:"));
        }


        let intereses = parseInt(prompt("Ingrese la tasa de interés (%):"))
        intereses /= 100;

        let plazo = parseInt(prompt("Ingrese el plazo de amortización:"));
        let plazoTime = prompt("¿El plazo de amortización es en meses o años? (responda 'meses' o 'años'):");


        if (isNaN(importe) || isNaN(intereses) || isNaN(plazo)) {
            console.log("Por favor, ingrese valores numéricos válidos.");
        }
        else {

            let mensual = intereses / 12;
            let mensualPay = (importe * mensual) / (1 - Math.pow(1 + mensual, -plazo));

            let interesTotal = (mensualPay * plazo) - importe;

            console.log("Datos del préstamo:");
            console.log("Importe del préstamo: " + importe);
            console.log("Tasa de interés (%): " + intereses * 100);
            console.log("Plazo de amortización: " + plazo + " " + (plazoTime === 'meses' ? 'meses' : 'años'));
            console.log("Resultados del Prestamo:");
            console.log("Cuota Mensual: " + mensualPay.toFixed(2));
            console.log("Total de Interés: " + interesTotal.toFixed(2));
        }
        break;
    case 2:
        let operadores = Number(prompt("1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir"));

        switch (operadores) {
            case 1:
                suma();
                break
            case 2:
                resta();
                break;
            case 3:
                multiplicar();
                break;
            case 4:
                dividir();
                break;
        }
        break;

}

