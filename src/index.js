module.exports = function toReadable (number) {  

  let arrU = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', ];
  let arrTeT = [ 'ten', 'eleven', 'twelve', ]
  let arrD = ['', '', '', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine', ];
  let teen = 'teen';
  let arrTwentyninety = ['', '',  'twen', 'thir', 'for', 'fif', 'six', 'seven', 'eigh', 'nine', ]
  let ty = 'ty';
  let hundred = 'hundred';
  let inStringNumber = number.toString();

let h = inStringNumber[0]; 
let d = inStringNumber[1]; 
let u = inStringNumber [2];
// Счет от 0 до 9 включительно
if ( number >= 0 && number <= 9){
    return arrU[number]
  }
// Счет от 10 до 12
if (number >= 10 && number <= 12){ return `${arrTeT[inStringNumber[1]]}` }

// Счёт от 13 до 19
if (number >= 13 && number <= 19) { return `${arrD[inStringNumber[1]]}${teen}` }

// Счет от 20 до 99
if (number >= 20 && number <= 99){
  // если 20 30 40 50 60 70 80 90
  if (inStringNumber[1] == 0) {return `${arrTwentyninety[inStringNumber[0]]}${ty}`}

  return `${arrTwentyninety[inStringNumber[0]]}${ty}${' '}${arrU[inStringNumber[1]]}`
}

function callBack ( du ) {
let inStringDU = du.toString()
const num = +du
    if ( num >= 00 && num <= 09){
        return arrU[inStringDU[1]]
      }
  // Счет от 10 до 12
  if (num >= 10 && num <= 12){ return `${arrTeT[inStringDU[1]]}` }
  
  // Счёт от 13 до 19
  if (num >= 13 && num <= 19) { return `${arrD[inStringDU[1]]}${teen}` }
  
  // Счет от 20 до 99
  if (num >= 20 && num <= 99){
      // если 20 30 40 50 60 70 80 90
      if (inStringDU[1] == 0) {return `${arrTwentyninety[inStringDU[0]]}${ty}`}
  
      return `${arrTwentyninety[inStringDU[0]]}${ty}${' '}${arrU[inStringDU[1]]}`
  }
}
// от 100до 999
if ( number >= 100 && number <= 999){
    if (( d !== '0' && u !== '0') || (d !== '0' && u === '0') || (d === '0' && u !== '0')){
        let du = d + u;
        return arrU[[h]] + ' ' + hundred + ' ' + callBack(du)
    }
    return `${arrU[h]}${' '}${hundred}`
}
}
 
