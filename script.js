const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn= document.querySelector('#btnCalcular');
const Presultado= document.querySelector('#resultado');

form.addEventListener('submit',sumarinputvalue);

function sumarinputvalue(event){
    console.log({event});
    event.preventDefault();
//     // let num1 = parseFloat(input1.value); Esto convierte el valor de cadena string a numerico 
//     // let num2 = parseFloat(input2.value);
//     // let resultadx= num1+num2;
    const sumaInputs = input1.value + input2.value;
    
    Presultado.innerText = "Resultado" + sumaInputs;
  
} 