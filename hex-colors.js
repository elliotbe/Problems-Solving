/* Given three integers between 0 and 255, corresponding to the red, green, and
 * blue channel values of a color, find the hex string for that color. You may
 * use anything built into your programming language, such as for base
 * conversion, but you can also do it manually.
 * Examples:
 * hexcolor(255, 99, 71) => "#FF6347"  (Tomato)
 * hexcolor(184, 134, 11) => "#B8860B"  (DarkGoldenrod)
 * hexcolor(189, 183, 107) => "#BDB76B"  (DarkKhaki)
 * hexcolor(0, 0, 205) => "#0000CD"  (MediumBlue)
 *
 * Given a list of hex color strings, produce the hex color string you get from
 * averaging their RGB values together. You'll need to round channel values to
 * integers.
 * Examples:
 * blend({"#000000", "#778899"}) => "#3C444C"
 * blend({"#E6E6FA", "#FF69B4", "#B0C4DE"}) => "#DCB1D9"
 *
 * Source: https://tinyurl.com/y8pxzwqk
 */

const hexColor = (...rgbColor) => {
  let hexColor = '#'
  for (const channel of rgbColor) {
    hexColor += decToHex(channel)
  }
  return hexColor
}

const blend = (arrayOfHex) => {
  let redBlend = 0
  let greenBlend = 0
  let blueBlend = 0
  for (const hexColor of arrayOfHex) {
    redBlend += hexToDec(hexColor.substring(1, 3))
    greenBlend += hexToDec(hexColor.substring(3, 5))
    blueBlend += hexToDec(hexColor.substring(5, 7))
  }
  redBlend /= arrayOfHex.length
  greenBlend /= arrayOfHex.length
  blueBlend /= arrayOfHex.length
  redBlend = decToHex(Math.round(redBlend))
  greenBlend = decToHex(Math.round(greenBlend))
  blueBlend = decToHex(Math.round(blueBlend))
  return `#${redBlend}${greenBlend}${blueBlend}`
}

const hexToDecTable = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15
}

const decToHex = (value) => {
  let result = []
  while (value / 16 !== 0) {
    const rest = value % 16
    result.unshift(rest)
    value = Math.floor(value / 16)
  }
  if (!result[0]) {
    result = [0]
  }
  result = result.map((elem) => (
    Object.keys(hexToDecTable)[elem])
  ).reduce((a, c) => a + c)
  if (result.length === 1) {
    result = 0 + result
  }
  return result
}

const hexToDec = ([...hexValue]) => {
  let result = []
  let powerOf = 0
  for (let i = hexValue.length - 1; i >= 0; i--) {
    result.unshift(
      hexToDecTable[hexValue[i].toUpperCase()] * (16 ** powerOf++)
    )
  }
  return result.reduce((a, c) => a + c)
}

console.log(
  `hexColor(255, 99, 71) => ${hexColor(255, 99, 71)}
hexColor(184, 134, 11) => ${hexColor(184, 134, 11)}
hexColor(189, 183, 107) => ${hexColor(189, 183, 107)}
hexColor(0, 0, 205) => ${hexColor(0, 0, 205)}\n`
)

console.log(
  `blend(['#000000', '#778899'] => ${blend(['#000000', '#778899'])}
blend(['#E6E6FA', '#FF69B4', '#B0C4DE'] => ${blend(['#E6E6FA', '#FF69B4', '#b0c4dE'])}`
)
