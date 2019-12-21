function validatePIN (pin) {

  return (pin.lenght === 4 || pin.lenght === 6 ? /^d+$/.test(pin)  : false)

  // if(pin.length === 4 || pin.length === 6){
  //    for(let i=0; i < pin.length; i++){
  //      console.log(parseInt(pin[i]))
  //      if (isNaN(parseInt(pin[i]))) {
  //        return false
  //      }
  //    }
  //   return true
  // } else {
  //   return false
  // }
}


// console.log(validatePIN("a234"))
// console.log(validatePIN("098765"))
console.log(validatePIN("1234.0"))
// parseInt('0') === false

