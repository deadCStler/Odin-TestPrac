const shifter = function (letter, shiftFactor) {
  const isUpper = letter === letter.toUpperCase();

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabet.indexOf(letter.toLowerCase());

  if (index === -1) {
    return letter;
  }

  const shiftIndex = (index + shiftFactor) % 26;
  const res = alphabet[shiftIndex];

  return isUpper ? res.toUpperCase() : res;
};

const caesarCipher = function (string, shiftFactor) {
  return string
    .split("")
    .map((elem) => shifter(elem, shiftFactor))
    .join("");
};

module.exports = caesarCipher;
