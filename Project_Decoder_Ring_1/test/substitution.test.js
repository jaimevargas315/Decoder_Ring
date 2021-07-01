const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
  it("Should return false if the given alphabet is not exactly 26 characters long", () => {
    const input = "message";
    const alphabet = "sf35gd";
    const expected = false;
    const actual = substitution.substitution(input, alphabet);
    expect(actual).to.eql(expected);
  });

it("Should correctly translate the given phrase based on the alphabet given to the function", () => {
  const input = "message";
  const alphabet = "plmoknijbuhvygctfxrdzeswaq";
  const expected = "ykrrpik";
  const actual = substitution.substitution(input, alphabet);
  expect(actual).to.eql(expected);
});

it("Should return false if there are any duplicate characters in the given function", () => {
  const input = "message";
  const alphabet = "kk7ty54rfgvcds!%^^&*##%$@D";
  const expected = false;
  const actual = substitution.substitution(input, alphabet);
  expect(actual).to.eql(expected);
});

it("Should maintain spaces when encoding", () => {
  const input = "me ss age";
  const alphabet = "zyxwvutsrqponmlkjihgfedcba";
  const expected = "nv hh ztv";
  const actual = substitution.substitution(input, alphabet);
  expect(actual).to.eql(expected);
});

it("Should maintain spaces when decoding", () => {
  const input = "nv hh ztv";
  const alphabet = "zyxwvutsrqponmlkjihgfedcba";
  const expected = "me ss age";
  const actual = substitution.substitution(input, alphabet, false);
  expect(actual).to.eql(expected);
});

it("Should ignore capital letters", () => {
  const input = "MESSAGE";
  const alphabet = "zyxwvutsrqponmlkjihgfedcba";
  const expected = "nvhhztv";
  const actual = substitution.substitution(input, alphabet);
  expect(actual).to.eql(expected);
});

});