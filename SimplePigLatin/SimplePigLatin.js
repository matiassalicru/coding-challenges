function pigIt(str) {
  return str
    .split(" ")
    .map((palabra) =>
      palabra.match([a - zA - Z] / g)
        ? `${palabra.slice(1)}${palabra.charAt(0)}ay`
        : palabra
    )
    .join(" ");
}

//Solución 2
function pigIt(str) {
  var arrayWord = str.split(" ");
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}
