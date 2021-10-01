function sorteia() {
    let input1 = document.querySelector("#numberMin")
    let input2 = document.querySelector("#numberMax")

    let numberMin = parseInt(input1.value)
    let numberMax = parseInt(input2.value)

    function sorteiaNumero(min, max) {
        let minFix = min
        if(min > max) {
            min = max
            max = minFix
        }
        
        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }

    let numeroSorteado = sorteiaNumero(numberMin, numberMax)

    if(!numeroSorteado && numeroSorteado != 0) {
        alert("Selecione um intervalo válido")
        numeroSorteado = 'Numero Inválido'
    } else {
        let resultNumber = document.getElementById("numeroResultado")
        resultNumber.innerHTML = `${numeroSorteado}`
    }

    
}