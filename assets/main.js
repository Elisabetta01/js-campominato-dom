//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS:
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 


const gioca = document.getElementById('gioca')
const livelli = document.getElementById('livelli')
const main = document.querySelector('main')

const r = document.querySelector(':root')

//inizio partita
gioca.addEventListener('click', function(){

     campoMinato()
})

//creo griglia
function campoMinato(){


     
     //seleziono la difficoltà e il value lo trasformo in numero
     let selezionoLivelli = parseInt(livelli.value)
     //reset valore della variabile nel css
     celle(selezionoLivelli)

     //
     let bombe = creoBombe(selezionoLivelli)
     console.log(bombe)

     //creo griglia all'interno del main
     let griglia = document.createElement('div')
     griglia.classList.add('griglia')

     main.append(griglia)


     //creo i box all'interno con for
     for(let i = 1; i <= selezionoLivelli; i++){
          let box = document.createElement('div')
          box.classList.add('box')
          box.innerHTML = i

          griglia.append(box)

          //rendo cliccabili i box
          box.addEventListener('click', function(){

               if( !bombe.includes(i)){ //se non include una bomba
                    box.classList.add('azzurro') 
                    //recupero info 
                    console.log( this.innerHTML )
                    
               }else {
                    box.classList.add('red')
                    document.querySelector('.container').append(document.innerHTML = `HAI PERSO!`)
               }
          })
     }
}

// prendo le variabili che ho dato nel css per la dimensione dei box
function celle(x){
     //radice quadrata 
     x = Math.sqrt(x)

     r.style.setProperty('--numCelle', x)
}

//creo 16 bombe
function creoBombe(difficolta){
     //array vuoto
     let arrayBombe = []

     while( arrayBombe.length < 16){
          //creo numero random da 1 a 100 o 81 o 49
          let bomba = random(1, difficolta)

          if( !arrayBombe.includes(bomba)){
               arrayBombe.push(bomba)
          }
     
     }

     return arrayBombe
}

//creo numero random
function random(min, max){
     return Math.floor( Math.random() * max) + min
}

