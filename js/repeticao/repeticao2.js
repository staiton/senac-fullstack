let soma = 0;

for (let i = 0 ; i < 100 ; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    if (numero == 0){
        break;
    }
    soma = soma + numero;
}