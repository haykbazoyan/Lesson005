//

function strParsFloat(str) {
  let result = "";
  let boolCheck = true;

  let sign = false;
  let newString = "";

  if (str[0] === "-") {
    sign = true;
    for (let i = 1; i < str.length; i++) {
      newString += str[i];
    }
  } else {
    newString = str;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
      result += str[i];
    } else if (str[i].charCodeAt(0) === 46) {
      if (boolCheck) {
        result += str[i];
        boolCheck = false;
      } else break;
    }
  }

  if (result.length === 0) {
    return NaN;
  } else if (result.length === 1 && result[0].charCodeAt(0) === 46) {
    return NaN;
  } else if (
    result.length === 2 &&
    result[0].charCodeAt(0) === 46 &&
    result[1].charCodeAt(0) === 0
  ) {
    return result[1];
  } else if (result[0].charCodeAt(0) === 46) {
    let finResult = "0" + result;
    if (sign) {
      return -1 * finResult;
    } else {
      return Number(finResult);
    }
  } else {
    if (sign) {
      return -1 * result;
    } else {
      return Number(result);
    }
  }
}

function myParseFloat(string) {
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

  if (newString[0] > 9 && newString[0].charCodeAt(0) !== 46) {
    return NaN;
  } else {
    return strParsFloat(string);
  }
}

console.log(myParseFloat("-.25px"));
