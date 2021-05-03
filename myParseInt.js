// IF INPUT VALUE IS STRING

function stringToParseInt(string) {
  let result = "";
  let sign = false;
  let newString = "";

  if (string[0] === "-") {
    sign = true;
    for (let i = 1; i < string.length; i++) {
      newString += string[i];
    }
  } else {
    newString = string;
  }

  for (let i = 0; i < newString.length; i++) {
    if (Number(newString[i]) >= 0 && Number(newString[i]) <= 9) {
      result += newString[i];
    } else {
      break;
    }
  }

  if (result.length === 0) {
    return NaN;
  } else {
    if (sign) {
      return -1 * result;
    } else {
      return Number(result);
    }
  }
}

// IF INPUT VALUE IS BINARY

function binParseInt(binNumber) {
  let decNumber = 0;

  for (let i = binNumber.length - 1, j = 0; i >= 0; i--, j++) {
    decNumber += binNumber[i] * Math.pow(2, j);
  }
  return decNumber;
}

// IF INPUT VALUE IS HEX (16)

function hexParseInt(hexNumber) {
  let decNumber = 0;

  for (let i = hexNumber.length - 1, j = 0; i >= 0; i--, j++) {
    switch (hexNumber[i]) {
      case "a":
        decNumber += 10 * Math.pow(16, j);
        break;
      case "A":
        decNumber += 10 * Math.pow(16, j);
        break;
      case "b":
        decNumber += 11 * Math.pow(16, j);
        break;
      case "B":
        decNumber += 11 * Math.pow(16, j);
        break;
      case "c":
        decNumber += 12 * Math.pow(16, j);
        break;
      case "C":
        decNumber += 12 * Math.pow(16, j);
        break;
      case "d":
        decNumber += 13 * Math.pow(16, j);
        break;
      case "D":
        decNumber += 13 * Math.pow(16, j);
        break;
      case "e":
        decNumber += 14 * Math.pow(16, j);
        break;
      case "E":
        decNumber += 14 * Math.pow(16, j);
        break;
      case "f":
        decNumber += 15 * Math.pow(16, j);
        break;
      case "F":
        decNumber += 15 * Math.pow(16, j);
        break;
      default:
        decNumber += hexNumber[i] * Math.pow(16, j);
    }
  }
  return decNumber;
}

// MAIN parseInt() FUNCTION

function myParseInt(number = "", radix = 10) {
  let result = 0;

  if (typeof number === typeof Number() && radix === 10) {
    return Number(number);
  }

  if (typeof number === typeof String() && radix === 10) {
    return stringToParseInt(number);
  }

  if (radix === 2) {
    return binParseInt(number);
  }
  if (radix === 16) {
    return hexParseInt(number);
  }
}

console.log(myParseInt("3A5", 16));
