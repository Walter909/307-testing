//Create new portfolio
function createPortfolio() {
  const portfolio = [];
  return portfolio;
}

//Check portfolio is empty
function isEmpty(arr) {
  return arr.length === 0 ? true : false;
}

//Check number of unique stocks in portfolio
function numUniqueTickers(arr) {
  const names_seen = [];
  let count = 0;
  let curr_name = "";

  for (i = 0; i < arr.length; i++) {
    curr_name = arr[i].symbol;

    if (!names_seen.includes(curr_name)) {
      names_seen.push(curr_name);
      count++;
    }
  }

  return count;
}

//Buy new stock ticker
function buyNewTicker(arr, stockTicker) {
  arr.push(stockTicker);
  return arr;
}

//Sell stock ticker
function sellTicker(arr, ticker) {
  if (arr.includes(ticker)) {
    arr.splice(arr.indexOf(ticker), 1);
  } else {
    //Indicating arr does not contain that stock ticker trying to be sold
    return false;
  }

  return arr;
}

//Count ticker stock names
function countTickers(arr, ticker) {
  let count = 0;
  let curr_name = "";

  for (i = 0; i < arr.length; i++) {
    curr_name = arr[i].symbol;

    if (curr_name === ticker) {
      count++;
    }
  }
  return count;
}
//Sell share for a particular stock ticker in portfolio
function sellShares(porfolio, tickers, amount) {
  //make sure portfolio is not empty
  if (tickers.shares !== 0 && porfolio.includes(tickers)) {
    tickers.shares = tickers.shares - amount;
  }

  //No stock ticker to sell or not in portfolio
  throw new Error("ShareSaleException");
}

exports.createPortfolio = createPortfolio;
exports.sellShares = sellShares;
exports.isEmpty = isEmpty;
exports.countTickers = countTickers;
exports.buyNewTicker = buyNewTicker;
exports.sellTicker = sellTicker;
exports.numUniqueTickers = numUniqueTickers;
