


let btnEl = document.getElementById("btn");
let gridEl = document.getElementById("container");
let difficultyEl = document.getElementById("difficulty");
document.getElementById("lose").style.display = "none";
document.getElementById("win").style.display = "none";

// creo l'array di bombe
let bombArray = [];
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. FATTO


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
            
            
            // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
            
            // In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. 
            
            
            
            squareEl.addEventListener('click', function() {
                
                if(squareEl.innerText.includes(parseInt(bombArray))) {
                    squareEl.classList.toggle('bomb');
                    document.getElementById("lose").style.display = "";

                } else {
                    squareEl.classList.toggle('select');
                    console.log(i);
                    
                } 
                
            })

            
            
            
        }
        
        let counter = 0;
        while(bombArray.length < 16) {
            let bomb = (Math.floor(Math.random() * (100 - 1)) + 1);
            if(!bombArray.includes(bomb)) {
                bombArray.push(bomb);
            }

            counter++;
        }
        console.log(bombArray);

        
        
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

                if(squareEl.innerText.includes(parseInt(bombArray))) {
                    squareEl.classList.toggle('bomb');
                } else {
                    squareEl.classList.toggle('select');
                    console.log(i);
                    
                }
                
            })
            
        }

        let counter = 0;
        while(bombArray.length < 16) {
            let bomb = (Math.floor(Math.random() * (81 - 1)) + 1);
            if(!bombArray.includes(bomb)) {
                bombArray.push(bomb);
            }

            counter++;
        }
        console.log(bombArray);
        
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

                if(squareEl.innerText.includes(parseInt(bombArray))) {
                    squareEl.classList.toggle('bomb');
                } else {
                    squareEl.classList.toggle('select');
                    console.log(i);
                    
                }
                
            })
            
        }

        let counter = 0;
        while(bombArray.length < 16) {
            let bomb = (Math.floor(Math.random() * (49 - 1)) + 1);
            if(!bombArray.includes(bomb)) {
                bombArray.push(bomb);
            }

            counter++;
        }
        console.log(bombArray);
    }
    
    // Ogni cella ha un numero progressivo, da 1 a 100.
    
});

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
