function comparaNumeros(num1, num2) {
  const PRIMEIRA_FRASE = criaPrimneiraFrase(num1, num2)
  const SEGUNDA_FRASE = criaSegundaaFrase(num1, num2)
  return `${PRIMEIRA_FRASE} ${SEGUNDA_FRASE}`
}

function criaPrimneiraFrase(num1, num2) {
  let naoSaoIgauais = ''

  if (num1 !== num2) {
    naoSaoIgauais = 'não'
  }

  return ` Os números ${num1} e ${num2} ${naoSaoIgauais} são iguais.`
}

function criaSegundaaFrase(num1, num2) {
  const SOMA = num1 + num2
  let igual10 = SOMA == 10 ? 'que é igual a 10' : ''
  let igual20 = SOMA == 20 ? ' é igual a 20.' : ''
  let maior10 = ''
  let maior20 = ''

  if (SOMA != 10) {
    maior10 = SOMA < 10 ? 'menor que 10' : 'maior que 10'
  }

  if (SOMA != 20) {
    maior20 = SOMA < 20 ? 'menor que 20.' : 'maior que 20.'
  }
  ;('')

  return `Sua soma é ${SOMA},que é ${igual10} ${maior10} e ${igual20} ${maior20} `
}

console.log(comparaNumeros(10, 10))
