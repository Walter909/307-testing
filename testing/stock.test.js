const myFunctions = require("./stock.js");
function ticker(symbol, shares) {
  //symbol is stock name
  this.symbol = symbol;
  this.shares = shares;
}

test("Testing creating a porfolio exists -- success", () => {
  const target = myFunctions.createPortfolio();
  expect(target).toBeDefined();
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

test("Testing portfolio has different ticker stocks -- success", () => {
  const target = myFunctions.createPortfolio();
  target.push(new ticker("IBM", 2000));
  target.push(new ticker("IBM", 19));
  target.push(new ticker("GME", 100));
  target.push(new ticker("GME", 100));
  result = myFunctions.numUniqueTickers(target);
  expect(result).toBe(2);
});

test("Testing buying new ticker stock for portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new ticker("Apple", 0);
  t2 = new ticker("Microsoft", 9000);
  result = myFunctions.buyNewTicker(target, t1);
  result = myFunctions.buyNewTicker(target, t2);

  expect(result).toContain(t1);
  expect(result).toContain(t2);
});

test("Testing selling a ticker stock from portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new ticker("Apple", 0);
  t2 = new ticker("Microsoft", 9000);
  result = myFunctions.buyNewTicker(target, t1);
  result = myFunctions.buyNewTicker(target, t2);
  result = myFunctions.sellTicker(target, t1);
  result = myFunctions.sellTicker(target, t2);
  //empty
  expect(result).not.toBeUndefined();
});

test("Testing counting ticker stocks -- success", () => {
  const target = myFunctions.createPortfolio();
  target.push(new ticker("Apple", 0));
  target.push(new ticker("Apple", 0));
  target.push(new ticker("Apple", 0));
  target.push(new ticker("Apple", 7878));
  target.push(new ticker("Microsoft", 9000));

  result = myFunctions.countTickers(target, "Apple");

  expect(result).toBe(4);
});
