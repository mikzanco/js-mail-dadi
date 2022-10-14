
// creo un generatore di numeri random per il giocatore 
// creo generatore numeri ranodm per il computer
// confronto i numeri usciti 
// 

const numeriPc = [1, 2, 3, 4, 5, 6];
const numeriUmano = [1, 2, 3, 4, 5, 6];
const output = document.getElementById('output');

const button = document.querySelector('#bottone');

button.addEventListener('click', function(){

    const randomIndexPc = Math.floor(Math.random() * numeriPc.length);
    console.log(randomIndexPc);
    document.querySelector('#outputPc').innerHTML += numeriPc[randomIndexPc]

    const randomIndexUm = Math.floor(Math.random() * numeriUmano.length);
    console.log(randomIndexUm);
    document.querySelector('#outputUm').innerHTML += numeriUmano[randomIndexUm]

    if (randomIndexUm > randomIndexPc){
        output.innerHTML = 'Hai vinto';
        console.log('hai vinto');
    }else if(randomIndexUm === randomIndexPc){
        output.innerHTML = 'Avete pareggiato';
    }else{
        output.innerHTML = 'Hai perso';
        console.log('hai perso');
    }
})



