const reverseString = require("../src/reverseString");

test("Empty String Test", () => {
  expect(reverseString("")).toMatch("Input is an empty string");
});

test('Single Character', ()=>{
    expect(reverseString('a')).toMatch('a');
})

test('Single Word', ()=>{
    expect(reverseString('abc')).toMatch('cba');
})

test('Multiple Words', ()=>{
    expect(reverseString('hello world')).toMatch('olleh dlrow');
})