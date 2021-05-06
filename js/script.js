// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

/*----------FUNCTIONS--------*/
function numberRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
function isInArray(element, array){
    for(var i=0; i< array.length;i++){
        if(element == array[i]){
            return true;
        }
    }
    return false;
}
// Un alert() espone 5 numeri generati casualmente.
var array5RandomPC = [];
while(array5RandomPC.length < 5){
    var randomNumber = numberRandom(1,100);
    if(!isInArray(randomNumber,array5RandomPC)){
        array5RandomPC.push(randomNumber);
    }
}
// console.log(array5RandomPC);

alert("Memorizza questi numeri:\n"+ array5RandomPC);
// Da li parte un timer di 30 secondi.
var inizioTimer=30;
var timer = setInterval( function(){
    document.getElementById("timer").innerHTML = "<p>"+inizioTimer+"</p>"
    // console.log(inizioTimer);
    if(inizioTimer == 0){
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        document.getElementById("timer").innerHTML = "<p>Fine del gioco!</p>"
        clearInterval(timer);
        var array5Utente = [];
    do{
        numeroUtente = parseInt(prompt("Ora Tocca a te\nInserisci un numero:"));
        if(isNaN(numeroUtente)){
            console.log("Errore non hai inserito un numero!");
        }else if (!isInArray(numeroUtente,array5Utente)){
            array5Utente.push(numeroUtente);
        } else{
            console.log("Errore hai già inserito questo numero!");
        }
    }while(array5Utente.length < 5);
    // console.log(array5Utente);
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    var k=0;
    var numeriIndovinati= [];
    for(i=0;i<5;i++){
        var control = isInArray(array5Utente[i], array5RandomPC);    
        if(control){     
            numeriIndovinati.push(array5Utente[i]);
            // console.log("Il numero indovinato è:",array5Utente[i]);
            k++;
            // console.log(k);
        }
    }
    alert("I numeri del gioco sono:"+ array5RandomPC+"\nI numeri inseriti dall'utente sono:"+ array5Utente)
    // console.log("I numeri del gioco sono:", array5RandomPC);
    // console.log("I numeri inseriti dall'utente sono:", array5Utente);
    if(k==0){
        alert("Non hai indovinato nessun numero!")
    }else if(k==1){  
        alert("Hai indovinato "+ k + " numero"+"\nIl numero indovinato è: "+ numeriIndovinati );
        // console.log("Hai indovinato "+ k + " numero");
        // console.log("Il numero indovinato è: ", numeriIndovinati)
    }else{
        alert("Hai indovinato "+ k + " numeri"+"\nI numeri indovinati sono: "+ numeriIndovinati );
        // console.log("Hai indovinato  "+ k + " numeri");
        // console.log("I numeri indovinati sono: ", numeriIndovinati)
    }
    }else{
        inizioTimer--;
    }
},1000);

