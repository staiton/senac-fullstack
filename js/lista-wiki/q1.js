let n1 = parseFloat(prompt(`Digite o primeiro número:`));
let n2 = parseFloat(prompt(`Digite o segundo número:`));

if (n1 > n2) {
    alert(`${n1} é maior que ${n2}`)
} else if (n2 > n1){
    alert(`${n2} é maior que ${n1}`)
} else{
    alert(`${n1} é igual a ${n2}`)
}
