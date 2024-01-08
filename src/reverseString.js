const reverseString = function (string) {
  if (string.trim() === "") {
    return "Input is an empty string";
  }
  let result = string.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].split("").reverse().join("");
  }
  return result.join(" ").trim();
};

module.exports = reverseString;
