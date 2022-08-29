var numerosTabuada = []
var numero = 0;


function obterNumeroTabuada(){
    numero = parseInt(document.getElementById("number").value)
    numerosTabuada.push(numero)
    calculaTabuada()
}

function calculaTabuada(){
    var result = 0;
    var divTabuada = document.querySelector('#tabuada')
    divTabuada.innerHTML = ('vai tomar no cu<br><br>')
    var ulTabuada = document.createElement('ul')
    ulTabuada.classList.add('listaTabuada')

    for (var i = 0; i <= 10; i++){
        result = numero * i;
        var liTabuada = document.createElement('li')
        liTabuada.classList.add('multiplicacao')
        //liTabuada.textContent = (numero + " x " + i + " = " + result)
        liTabuada.textContent = (`${numero} x ${i} = ${result}`)
        ulTabuada.appendChild(liTabuada)
    }
    divTabuada.appendChild(ulTabuada)
}
