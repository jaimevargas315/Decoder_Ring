const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
  it("Should encode both 'i' and 'j' to 42", () => {
    const input = "i j";
    const expected = "42 42";
    const actual = polybius.polybius(input);
    expect(actual).to.eql(expected);
  });

it("Should decode both 42 to both 'i' and 'j'", () => {
  const input = "42";
  const expected = "i/j";
  const actual = polybius.polybius(input, false);
  expect(actual).to.eql(expected);
});

it("Should ignore capital letters", () => {
  const input = "A MESSAGE";
  const expected = "11 23513434112251";
  const actual = polybius.polybius(input);
  expect(actual).to.eql(expected);

});

it("Should maintain spaces when encoding", () => {
  const input = "a m e s s a g e";
  const expected = "11 23 51 34 34 11 22 51";
  const actual = polybius.polybius(input);
  expect(actual).to.eql(expected);
});

it("Should maintain spaces when decoding", () => {
  const input = "31 11 23 44 21 23";
  const expected = "c a m t b m";
  const actual = polybius.polybius(input, false);
  expect(actual).to.eql(expected);
});

});