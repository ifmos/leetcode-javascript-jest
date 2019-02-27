const { twoSum } = require("./1.two-sum");
describe("1.two-sum", function() {
  it("test", function() {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
