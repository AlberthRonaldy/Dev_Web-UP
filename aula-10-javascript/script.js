var var1 = 15;            //tipo global
let let1 = 5;             //tipo local
const const1 = "15";      //tipo constante, não pode ser alterada

//var1 = var1.toString();
//const1 = Number(const1);

document.getElementById("js").innerText = "Olá mundo \n";
document.getElementById("js").innerText += "Var = " + var1 + " Let = " + let1 + " Const = " + const1 + "\n";
document.getElementById("js").innerText +=  "Tipos: Var = " + typeof(var1) + " Let = " + typeof(let1) + " Const = " + typeof(const1);

const js = document.getElementById("js");
js.innerHTML += "<hr>";

//operadores relacionais

js.innerHTML += "Operadores relacionais" +
"<br> var1 === const1 " + (var1 === const1) +      //Compara também o tipo
"<br> var1 == const1 " + (var1 == const1) +
"<br> var1 != const1 " + (var1 != const1) +
"<br> var1 > const1 " + (var1 > const1) +
"<br> var1 >= const1 " + (var1 >= const1) +
"<br> var1 < const1 " + (var1 < const1) +
"<br> var1 <= const1 " + (var1 <= const1);

js.innerHTML += "<hr>";

//operadores lógicos

js.innerHTML += "Operadores lógicos" +
"<br> var1 == const1 E var1 == let1 " + (var1 == const1 && var1 == let1) +
"<br> var1 == const1 OU var1 == let1 " + (var1 == const1 || var1 == let1);

//estruturas de decisão

js.innerHTML += "<hr>";
if(var1++ == const1){
    js.innerHTML += "<h1> é igual </h1>";
}
else{
    js.innerHTML += "<h1>não é igual </h1>";
}

js.innerHTML += (var1 == const1) ? "<h1> é igual </h1>" : "<h1>não é igual </h1>";

const semana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

switch(semana[0]){
    case "Segunda":
        js.innerHTML += "<h2> Segunda </h2>"
        break;
    case "Terça":
        js.innerHTML += "<h2> Terça </h2>"
        break;
    case "Quarta":
        js.innerHTML += "<h2> Quarta </h2>"
        break;
    case "Quinta":
        js.innerHTML += "<h2> Quinta </h2>"
        break;
    case "Sexta":
        js.innerHTML += "<h2> Sexta </h2>"
        break;        
}


