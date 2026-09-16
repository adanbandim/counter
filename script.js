// caixas de números
let n1 = document.querySelector(".number1");
let n2 = document.querySelector(".number2");
let n3 = document.querySelector(".number3");
let n4 = document.querySelector(".number4");

let contador = 0;
let aviso = document.querySelector(".aviso");
let temporizador;

// botões e funcionalidades
var iniciar = document.querySelector(".iniciar");
var pausar = document.querySelector(".pausar");
var zerar = document.querySelector(".zerar");


function contar(){ // isso aqui valida se o botao vai ser clicado duas vezes e nao quebrar a coisa
    contador++; // contador inicia em zero, ai ao clicar pela primeira vez ele passa a ser um e quebra a condicao
    
    iniciar.textContent = "Iniciar"; // quando está pausado muda esse texto, ao despausar volta ao normal


    if(contador == 1 ){ // quando o usuario dá o clique pela primeira vez ele fica 1, mas na segunda vez deixa essa condicao
        validar(contador); // chama a funcao que conta,
        
    } else { // o que retorna esse segundo if e ativa esse aviso, limitando a se clicar só uma vez
        aviso.style.display = "flex";
        setTimeout(() => {
         aviso.style.display = "none"   
        }, 2000);
    }

    
}

// variaveis de contagem e contagem
let n = 0;
let decimo = 0;
let minuto = 0;
let decmin = 0;

function validar(){
    
    temporizador = setInterval(() => { // seleciona a contagem
        n++;
        n4.textContent = `${n}`;
        if(n > 9){
            n4.textContent = "0";
            n = 0;
            
            decimo++;
            n3.textContent = `${decimo}`;
            if(decimo > 5){ // aqui é maior do que cinco, pq toda vez que o décimo passa de 9 o decimo recebe 1, como ele está contando em décimos, contabiliza em seis décimos para um minuto
                n3.textContent = "0";
                decimo = 0;

                minuto++;
                n2.textContent = `${minuto}`;
                if(minuto > 9){
                    n2.textContent = "0";
                    minuto = 0;

                    decmin++;
                    n1.textContent = `${decmin}`;

                }
            }
        }
        }, 1000);
}

// funcao de pausa
function pausa(){
    clearInterval(temporizador);
    contador = 0;
    iniciar.textContent = "Retomar";
}

function zerartudo(){
    clearInterval(temporizador);
    // zera todas as contagens
    let n = 0;
    let decimo = 0;
    let minuto = 0;
    let decmin = 0;

    // limpa o cronometro visual
    n1.textContent = "0";
    n2.textContent = "0";
    n3.textContent = "0";
    n4.textContent = "0";

    contador = 0;
}


iniciar.addEventListener("click", contar);
pausar.addEventListener("click", pausa);
zerar.addEventListener("click", zerartudo);



