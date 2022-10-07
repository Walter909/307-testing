function ticker(symbol, shares) {
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

  for (i = 0; i < arr.length; i++) {
    let curr_name = arr[i].symbol;

    if (!names_seen.includes(curr_name)) {
      names_seen.push(curr_name);
      count++;
    }
  }

  console.log(names_seen);
  return count;
}

exports.createPortfolio = createPortfolio;
exports.isEmpty = isEmpty;
exports.numUniqueTickers = numUniqueTickers;
