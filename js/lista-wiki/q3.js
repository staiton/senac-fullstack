let sexo = prompt(`Digite a letra correspondente ao sexo:`);

if (sexo === 'M' || sexo === 'm') {
    alert(`M - Masculino`)
} else if (sexo === 'F' || sexo === 'f') {
    alert(`F - Feminino`)
} else{
    alert(`Erro, "${sexo}" é inválido, digite novamente.`)
}