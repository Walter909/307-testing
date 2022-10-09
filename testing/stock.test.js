const myFunctions = require("./stock.js");
function stockTicker(symbol, shares) {
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

  expect(myFunctions.isEmpty(target)).toBeTruthy();
});

test("Testing portfolio created is not empty -- success", () => {
  const target = myFunctions.createPortfolio();
  myFunctions.buyNewTicker(target, new stockTicker("", 0));

  expect(myFunctions.isEmpty(target)).toBeFalsy();
});

test("Testing portfolio has different ticker stocks -- success", () => {
  const target = myFunctions.createPortfolio();
  myFunctions.buyNewTicker(target, new stockTicker("IBM", 2000));
  myFunctions.buyNewTicker(target, new stockTicker("IBM", 19));
  myFunctions.buyNewTicker(target, new stockTicker("GME", 100));
  myFunctions.buyNewTicker(target, new stockTicker("GME", 100));

  expect(myFunctions.numUniqueTickers(target)).toBe(2);
});

test("Testing buying new ticker stock for portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new stockTicker("Apple", 0);
  t2 = new stockTicker("Microsoft", 9000);

  expect(myFunctions.buyNewTicker(target, t1)).toContain(t1);
  expect(myFunctions.buyNewTicker(target, t2)).toContain(t2);
});

test("Testing selling a ticker stock from portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new stockTicker("Apple", 0);
  t2 = new stockTicker("Microsoft", 9000);
  result = myFunctions.buyNewTicker(target, t1);
  result = myFunctions.buyNewTicker(target, t2);
  result = myFunctions.sellTicker(target, t1);
  result = myFunctions.sellTicker(target, t2);
  //empty
  expect(result).not.toBeUndefined();
});

test("Testing counting ticker stocks -- success", () => {
  const target = myFunctions.createPortfolio();
  result = myFunctions.buyNewTicker(target, new stockTicker("Apple", 1000));
  result = myFunctions.buyNewTicker(target, new stockTicker("Apple", 1));
  result = myFunctions.buyNewTicker(target, new stockTicker("Apple", 10));
  result = myFunctions.buyNewTicker(target, new stockTicker("Apple", 7878));
  result = myFunctions.buyNewTicker(target, new stockTicker("Microsoft", 9000));

  expect(myFunctions.countTickers(target, "Apple")).toBe(4);
});

test("Testing False if selling stock not in portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new stockTicker("Apple", 0);
  t2 = new stockTicker("Microsoft", 9000);
  t3 = new stockTicker("GME", 333);
  result = myFunctions.buyNewTicker(target, t1);
  result = myFunctions.buyNewTicker(target, t2);

  expect(myFunctions.sellTicker(target, t3)).toBeFalsy();
});

test("Testing True if selling stock not in portfolio -- success", () => {
  const target = myFunctions.createPortfolio();
  t1 = new stockTicker("Apple", 0);
  t2 = new stockTicker("Microsoft", 9000);
  t3 = new stockTicker("GME", 333);
  result = myFunctions.buyNewTicker(target, t1);
  result = myFunctions.buyNewTicker(target, t2);

  expect(myFunctions.sellTicker(target, t1)).toBeTruthy();
});

test("Testing selling right amount of shares for a stock ticker works -- success", () => {
  expect((t1) => {
    t1 = new stockTicker("Apple", 150);
    myFunctions.sellShares(t1, 100);
  }).not.toThrow("ShareSaleException");
});

test("Testing selling too many shares for owned stock tickers throws exception -- success", () => {
  expect((t1) => {
    const target = myFunctions.createPortfolio();
    t1 = new stockTicker("Apple", 0);
    myFunctions.buyNewTicker(target, t1);
    myFunctions.sellShares(target, t1, 100);
  }).toThrow("ShareSaleException");
});
