let btn = document.querySelector('#btn')
let RefazBtn = document.querySelector ('#btn2')

function imc () {
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')
    
    
    if (nome.value !== '' && altura !== '' && peso !== ''){

        const ValorImc = (peso / (altura * altura)).toFixed(1)

        resultado.textContent = ValorImc

        let classification = ''

        if(ValorImc <= 18.5){
            classification = 'Abaixo do peso ideal'
        } else if (ValorImc <= 25) {
            classification = 'no seu peso ideal'
        } else {
            classification = 'acima do peso'
        }

        resultado.textContent = `${nome}, seu imc é ${ValorImc}, e você está ${classification}`


    }else {
        resultado.textContent = 'preencha todos os campos'
    }
}

function delet () {
    document.querySelector('#nome').value = ''
    document.querySelector('#altura').value = ''
    document.querySelector('#peso').value = ''
    resultado.textContent = 'Preencha seus dados'
}

btn.addEventListener('click', imc)
RefazBtn.addEventListener('click', delet)