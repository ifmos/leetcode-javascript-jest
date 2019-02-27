const { reverse } = require("./7.reverse-integer");
describe("2.reverse-integer", function() {
  it("test", function() {
    expect(reverse(123)).toEqual(321);
    expect(reverse(-123)).toEqual(-321);
    expect(reverse(120)).toEqual(21);
  });
});
