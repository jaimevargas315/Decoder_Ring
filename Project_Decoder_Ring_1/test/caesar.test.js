const expect = require("chai").expect;
const caesar = require("../src/caesar");
describe("caesar", () => {
  it("Should return false if the shift value is equal to 0", () => {
    const input = "a message";
    const shift = 0;
    const expected = false;
    const actual = caesar.caesar(input, shift);
    expect(actual).to.eql(expected);
  });

it("Should return false if the shift value is less than -25", () => {
  const input = "a message";
  const shift = -26;
  const expected = false;
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should return false if the shift value is greater than 25", () => {
  const input = "a message";
  const shift = 95;
  const expected = false;
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should return false if the shift value is not present", () => {
  const input = "a message";
  let shift;
  const expected = false;
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should ignore capital letters", () => {
  const input = "A MESSAGE";
  const shift = 1;
  const expected = "b nfttbhf";
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should handle shifts that go past the end of the alphabet", () => {
  const input = "zzxx y";
  const shift = 5;
  const expected = "eecc d";
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should maintain spaces and other nonalphabetic symbols in the message when encoding", () => {
  const input = "!! #$%^ message";
  const shift = 1;
  const expected = "!! #$%^ nfttbhf";
  const actual = caesar.caesar(input, shift);
  expect(actual).to.eql(expected);
});

it("Should maintain spaces and other nonalphabetic symbols in the message when decoding", () => {
  const input = "!! #$%^ nfttbhf";
  const shift = 1;
  const expected = "!! #$%^ message";
  const actual = caesar.caesar(input, shift, false);
  expect(actual).to.eql(expected);
});

});

