const myFunctions = require("./stock.js");
function ticker(symbol, shares) {
  this.symbol = symbol;
  this.shares = shares;
}

test("Testing creating a porfolio exists -- success", () => {
  const target = myFunctions.createPortfolio();
  expect(target).not.toBeUndefined();
});

test("Testing portfolio created is empty -- success", () => {
  const target = myFunctions.createPortfolio();
  result = myFunctions.isEmpty(target);

  expect(result).toBeTruthy();
});

test("Testing portfolio created is not empty -- success", () => {
  const target = myFunctions.createPortfolio();
  target.push(new ticker("", 0));
  result = myFunctions.isEmpty(target);

  expect(result).toBeFalsy();
});

test("Testing portfolio has different stocks -- success", () => {
  const target = myFunctions.createPortfolio();
  target.push(new ticker("House", 0));
  target.push(new ticker("House", 19));
  target.push(new ticker("GME", 100));
  target.push(new ticker("GME", 100));

  result = myFunctions.numUniqueTickers(target);

  expect(result).toBe(2);
});
