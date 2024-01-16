// VARIABLES Y CONSTANTES GLOBALES
let tasaPersonal = 1.6
let pregunta3 = true;
let conversorTasaPersonal = tasaPersonal*37.5
let tasaPrendaria = 2.5
let conversorTasaPrendaria = tasaPrendaria*60
let credito = 0
const valorPrenda = (credito*9)/100
let salario = 0
let antiguedad = 0
let antecedentes = ""
let anioVeraz = 0
// FUNCIONES
function progamaPrincipal(){
    while (pregunta3){
        let nombre=prompt("Ingrese su Nombre:");
        let apellido=prompt("Ingrese su Apellido:");
        if((nombre !== "" && nombre !== null) && (apellido !== "" && apellido !== null)){
            alert("Bienvenido Sr/Sra: "+apellido.toUpperCase().trim()+" a CREDITOS JOVIALES S.A.")
            pregunta=confirm("¿Desea utilizar nuestros servicios?")
            if (pregunta==true){
                menu();
                pregunta3 = false;
            }
            else {
                pregunta3 = false
            }
        }
        else{
            pregunta3 = confirm("Ingrese un Nombre y Apellido válido:")
        }
    }
    alert("👋 ¡Hasta luego! 👋")

}
function menu() {
    let pregunta2 = true;
    while (pregunta2) {
        opcion=(prompt("💲💰💵CREDITOS JOVIALES💵💰💲\nSeleccione una opcion del menú:\n1. Simulador de préstamo personal.\n2. Simulador de préstamo prendario.\n3. Tasas de interés.\n4. Salir."));
        switch (opcion) {
            case "1":
                salario = parseFloat(prompt("Ingrese su salario en pesos argentinos: "));
                antiguedad = parseFloat(prompt("Ingrese su antiguedad laboral: "));
                simularCreditoPersonal(salario, antiguedad);
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "2":
                salario = parseFloat(prompt("Ingrese su salario en pesos argentinos: "));
                antiguedad = parseFloat(prompt("Ingrese su antiguedad laboral: "));
                antecedentes = prompt("¿Pertenece al 'veraz'?").toLowerCase().trim();
                if (antecedentes !==null && antecedentes !== "" && antecedentes.toLowerCase().trim() === "no") {
                    alert("✅Aprovado");
                    simularCreditoPrendario(salario, antiguedad)
                }
                else if (antecedentes !==null && antecedentes !== "" && antecedentes.toLowerCase().trim() === "si"){
                    anioVeraz = parseFloat(prompt("Ingrese la cantidad de años que pertenece al 'veraz'?"));
                    if (anioVeraz >= 5 && anioVeraz !== "" && anioVeraz!==null){
                        alert("✅Aprovado");
                        simularCreditoPrendario(salario, antiguedad)
                    }
                    else {
                        alert("⛔NO aprovado");
                    }
                }
                else {
                    alert("⛔NO aprovado");
                }
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "3":
                mostrarTasas();
                pregunta2=confirm("¿Desea volver al menú principal?");
                break;
            case "4":
                pregunta2 = false;
                pregunta3 = false;
                break;
            default:
                alert("⛔Disculpe, no pudimos procesar su opción");
                pregunta2=confirm("¿Desea volver al menú principal?");
        }
        
    }
}
function simularCreditoPersonal(salario, antiguedad) {
    if ((salario >= 300000 && antiguedad >= 5 || antiguedad >= 2 && salario >= 600000)) {
        alert("✅Aprovado");
        credito = prompt("Ingrese el monto a solicitar:");
        if (credito != ""){
            credito = parseFloat(credito);
            for (i = 12, j = (1.6), a = .6, b = 1; i <= 48; i+=12, j+=a, b++){
                console.log("Préstamo | Ctas | Ctas de:  |  %  | Total\n\n$"+credito+" |"+i+"ctas|$"+((credito*j)/(i)).toFixed(2)+" |"+conversorTasaPersonal*b+"% |"+(credito*j).toFixed(2)+"\n\n")
            }
        }
        else{
            alert("⛔Disculpe, ingrese un monto válido.");
        }
        
    }
    else {
        alert("⛔NO aprovado");
    }
}
function simularCreditoPrendario(salario, antiguedad) {
    if ((salario >= 500000 && antiguedad >= 5) || (antiguedad >= 2 && salario >= 700000)) {
        credito = prompt("Ingrese el monto a solicitar:");
        if (credito != ""){
            credito = parseFloat(credito);
            for (i = 12, j = (2.5), a = 1.5, b = 1; i <= 72; i+=12, j+=a, b++){
                console.log("Préstamo | Ctas | Ctas de: |  %  | Total\n\n$"+credito+" |"+i+"ctas|$"+((credito*j)/(i)).toFixed(2)+"|"+conversorTasaPrendaria*b+"% |"+(credito*j).toFixed(2)+"\n\n")
            }
        }
        else {
            alert("⛔Disculpe, ingrese un monto válido.");
        }

    }
    else {
        alert("⛔NO aprovado");
    }
}
function mostrarTasas(){
    let tipoDeTasa = prompt("Ingrese que tipo de tasa de interés:\n(personal - prendario)").toLowerCase().trim();
    switch(tipoDeTasa) {
        case "personal":
            alert("Los créditos personales estan a una tasa de interés del "+conversorTasaPersonal+"% ANUAL.")
            console.log("Los créditos personales estan a una tasa de interés del "+conversorTasaPersonal+"% ANUAL.")
            break
        case "prendario":
            alert("Los créditos prendarios estan a una tasa de interés del "+conversorTasaPrendaria+"% ANUAL.\n⚠️IMPORTANTE: Al momento de adquirir un crédito prendario, se deberá abonar por única vez una prenda del 9% del valor del monto a convenir.")
            console.log("Los créditos prendarios estan a una tasa de interés del "+conversorTasaPrendaria+"% ANUAL")
            console.warn("IMPORTANTE: Al momento de adquirir un crédito prendario, se deberá abonar por única vez una prenda del 9% del valor del monto a convenir.");
            break
        default:
            alert("⛔Disculpe, no pudimos procesar su opción.")
            menu()
    }
}
//  CODIGO AUTOEJECUTABLE 
progamaPrincipal()
