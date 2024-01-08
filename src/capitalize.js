const capitalize = function (input) {
  if (input.trim() === "") {
    return "Input is an empty string";
  }
  let result = input.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].split("")[0].toUpperCase() + result[i].slice(1);
  }
  return result.join(" ").trim();
};

module.exports = capitalize;
