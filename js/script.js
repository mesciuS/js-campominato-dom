


let btnEl = document.getElementById("btn");
let gridEl = document.getElementById("container");
let difficultyEl = document.getElementById("difficulty");

// creo l'array di bombe
let bombArray = [];

for(let i = 1; i <= 16; i++) {
    bombArray.push(randomNumberBetween(1,100));
    console.log(bombArray);
}


// inizio dell'evento
btnEl.addEventListener('click', function() {
    // L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    
    gridEl.innerHTML = '';
    
    let difficulty = difficultyEl.value;

    
    if(difficulty == 1) {
        // - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        for(let i = 1; i <= 100; i++) {
            // creo e appendo un quadrato
            // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
            let squareEl = document.createElement("div");
            squareEl.classList.add("square-1")
            gridEl.append(squareEl);
            squareEl.textContent = i;
            

            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Bonus
            
            squareEl.addEventListener('click', function() {
                squareEl.classList.toggle('select');
                console.log(i);
            })
            
        }
        
        
    } else if (difficulty == 2) {
        // - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
        
        for(let i = 1; i <= 81; i++) { 
            // creo e appendo un quadrato
            // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
            let squareEl = document.createElement("div");
            squareEl.classList.add("square-2")
            gridEl.append(squareEl);
            squareEl.textContent = i;
            
            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Bonus
            
            squareEl.addEventListener('click', function() {
                squareEl.classList.toggle('select');
                console.log(i);
            })
            
        }
        
    } else if (difficulty == 3) {
        // - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
        
        for(let i = 1; i <= 49; i++) {
            // creo e appendo un quadrato
            // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
            let squareEl = document.createElement("div");
            squareEl.classList.add("square-3")
            gridEl.append(squareEl);
            squareEl.textContent = i;
            
            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.Bonus
            
            squareEl.addEventListener('click', function() {
                squareEl.classList.toggle('select');
                console.log(i);
            })
            
        }
    }
    
    // Ogni cella ha un numero progressivo, da 1 a 100.
    
});

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

function randomNumberBetween(min, max) {

    // genero un numero random
    let random = Math.floor(Math.random() * (max - min + 1) + min)
  
    // una volta che la nostra funzione viene eseguita, restituisci al suo posto questo valore
    return random;
  
}