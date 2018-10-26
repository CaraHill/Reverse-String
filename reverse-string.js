function reverseString(string) {
  if(string.length == 0) {
    return string;
  } else {
    let splitString = string.split("");

    let reverseArray = splitString.reverse();

    let joinReversedArray = reverseArray.join("");

    return joinReversedArray;
  }
}

export { reverseString }
