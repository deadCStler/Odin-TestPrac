const caesarCipher = require("../src/caesarCipher");

test("Single Char LowerCase", () => {
  expect(caesarCipher("z", 3)).toMatch("c");
});

test("Single Char UpperCase", () => {
  expect(caesarCipher("A", 3)).toMatch("D");
});

test("Word UpperCase", () => {
  expect(caesarCipher("HELLO", 3)).toMatch("KHOOR");
});

test("Word LowerCase", () => {
  expect(caesarCipher("world", 3)).toMatch("zruog");
});

test("Word CamelCase", () => {
  expect(caesarCipher("Testing", 3)).toMatch("Whvwlqj");
});

test("Sentence CamelCase", () => {
  expect(caesarCipher("Hello World", 3)).toMatch("Khoor Zruog");
});

test("Punctuation", () => {
  expect(caesarCipher("Hello,World!", 3)).toMatch("Khoor,Zruog!");
});
