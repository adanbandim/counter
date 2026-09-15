// caixas de números
let n1 = document.querySelector(".number1");
let n2 = document.querySelector(".number2");
let n3 = document.querySelector(".number3");
let n5 = document.querySelector(".number4");

let contador = 0;
let aviso = document.querySelector(".aviso");

// botões e funcionalidades
var iniciar = document.querySelector(".iniciar");
var pausar = document.querySelector(".pausar");
var zerar = document.querySelector(".zerar");


function contar(){
    contador++;

    if(contador == 1 ){
        validar(contador);
        
    } else {
        aviso.style.display = "flex";
        setTimeout(() => {
         aviso.style.display = "none"   
        }, 2000);
    }

    
}

function validar(n){
    setInterval(() => {
        n++;
        n5.textContent = `${n}`
        if(n > 59){
            n = 0;
            let minuto = 0;
            minuto++;
            n2.textContent = `${minuto}`
        }
        }, 1000);
}


iniciar.addEventListener("click", contar);


