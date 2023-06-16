const verdadeira = true;

//let tem escopo de bloco {...bloco..}
//var só tem escopo de funçao

let nome = 'Luiz'; //criando
var nome2 = 'luiz';

if (verdadeira) {
    let nome = 'Otávio'; //criando
    console.log(nome, nome2);

    if(verdadeira) {
        let nome = 'Outra coisa';
        console.log('OK');
    }
}
