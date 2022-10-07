function ticker(symbol, shares) {
  //symbol is name
  this.symbol = symbol;
  this.shares = shares;
}

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

//Buy new ticker
function buyNewTicker(arr, ticker) {
  arr.push(ticker);
  return arr;
}

//Sell ticker
function sellTicker(arr, ticker) {
  arr.splice(arr.indexOf(ticker), 1);
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

  console.log(count);
  return count;
}

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.countTickers = countTickers;
exports.buyNewTicker = buyNewTicker;
exports.sellTicker = sellTicker;
exports.numUniqueTickers = numUniqueTickers;
