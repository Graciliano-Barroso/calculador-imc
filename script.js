let buttonCalcular = document.querySelector('#calcular');

buttonCalcular.addEventListener('click', ()=> {
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resultado = document.querySelector('#resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

    }else {
        resultado.textContent = 'Preencha todos os campos';
    }
});