const capitalize = require("../src/capitalize");

test("Empty String Test", () => {
  expect(capitalize("")).toMatch("Input is an empty string");
});

test('Single Character', ()=>{
    expect(capitalize('a')).toMatch('A');
})

test('Single Word', ()=>{
    expect(capitalize('abc')).toMatch('Abc');
})

test('Multiple Words', ()=>{
    expect(capitalize('hello world')).toMatch('Hello World');
})