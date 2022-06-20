function validaArray(arr, num) {
  try {
    if (!arr && !num) throw new ReferenceError('insira os parametros')

    if (arr !== 'object') throw new TypeError('insira o Array objetc')

    if (num !== 'number') throw new TypeError('insisira  o num do tipo number')

    if (arr.lenth !== num) throw new RangeError('tamanho invalido')

    return arr
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log('este erro é um referenceError!')
      console.log(e.message)
    } else if (e instanceof TypeError) {
      console.log('este erro é um typeError!')
      console.log(e.message)
    } else if (e instanceof RangeError) {
      console.log('este erro é um rangeError ')
      console.log(e.message)
    } else {
      console.log('tipo de erro não esperado:' + e)
    }
  }
}
console.log(validaArray([], 'a'))
