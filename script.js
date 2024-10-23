let btn = document.querySelector('#btn')

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

btn.addEventListener('click', imc)