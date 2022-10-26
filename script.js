let buttonCalcular = document.querySelector('#calcular');

buttonCalcular.addEventListener('click', ()=> {
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resultado = document.querySelector('#resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        let calculoIMC = (peso / (altura * altura)).toFixed(2);

        let classification = "";

        if (calculoIMC < 18.5) {
            classification = 'abaixo do peso.'
        }else if (calculoIMC < 25) {
            classification = 'com peso ideal. Parabéns!!!'
        }else if (calculoIMC < 30) {
            classification = 'levemente acima do peso.'
        }else if (calculoIMC < 35) {
            classification = 'com obesidade grau I.'
        }else if (calculoIMC < 40) {
            classification = 'com obesidade grau II.'
        }else {
            classification = 'com obesidade grau III. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC foi ${calculoIMC}, portanto você está ${classification}`;

    }else {
        resultado.textContent = 'Preencha todos os campos';
    }
});