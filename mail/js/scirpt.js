// creo un array contenente diverse email.
// creo un prompt per far scrivere le email
// confronto l'email digitata con le email nell'array.
const output = document.getElementById('output')

const email = ['mikyzancolo08@gmail.com', 'baubaumiciomicio@gmail.com', 'nonsonolatuaemail@gmail.com' ];

const emailSelected = prompt('Scrivi la tua email');

for(i = 0; i < email.length; i++){
    console.log(output)
    if(emailSelected === email[i]){
         output.innerHTML = 'puoi accedere'
         
    }else{
        output.innerHTML = 'email not found'
    }

}