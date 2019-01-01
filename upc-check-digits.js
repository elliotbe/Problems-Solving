/* Given an 11-digit number, find the 12th digit that would make a valid UPC.
 * You may treat the input as a string if you prefer, whatever is more
 * convenient. If you treat it as a number, you may need to consider the case
 * of leading 0's to get up to 11 digits. That is, an input of 12345 would
 * correspond to a UPC start of 00000012345.
 *
 * Examples:
 * upc(4210000526) => 4
 * upc(3600029145) => 2
 * upc(12345678910) => 4
 * upc(1234567) => 0
 *
 * Source: https://tinyurl.com/yaowexxh
 */

const checkUPC = (barCode) => {
  barCode = barCode + ''
  while (barCode.length < 11) {
    barCode = '0' + barCode
  }
  const sumInObject = {
    even: 0,
    odd: 0
  }
  for (let i = 0; i < [...barCode].length; i++) {
    const elem = [...barCode][i]
    i % 2 === 0
      ? sumInObject.even += parseInt(elem)
      : sumInObject.odd += parseInt(elem)
  }
  const m = (sumInObject.even * 3 + sumInObject.odd) % 10
  return m !== 0 ? 10 - m : 0
}

console.log('4210000526 -> ' + checkUPC(4210000526))
console.log('3600029145 -> ' + checkUPC(3600029145))
console.log('12345678910 -> ' + checkUPC(12345678910))
console.log('1234567 -> ' + checkUPC(1234567))
