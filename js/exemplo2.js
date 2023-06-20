let nota = parseFloat(prompt('Informe sua nota'));

let entradaInvalida = isNaN(nota) || nota < 0 || nota > 10;
let aprovado = nota >= 5;
let reprovado = nota < 3;

if (entradaInvalida) {
    alert('Entrada inválida \n Digite novamente');
} else if (aprovado) {
    alert('Parabens! Você está aprovado')
} else if (reprovado) {
    alert('Infelizmente você está reprovado.')
}  else {
    alert('Quase lá, você está em recuperação.')
}

