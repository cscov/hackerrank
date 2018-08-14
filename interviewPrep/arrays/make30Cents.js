// penny nickel dime quarter make 30 cents

  const coins = [1, 5, 10, 25];

function make30Cents(cents, target) {
  let centsUsed = [];
  let currentTotal = 0;
  while (currentTotal !== target) {
    for(let i = cents.length - 1; i >= 0; i++) {
    if(target % cents[i] === 0) {
      let coinCount = target / cents[i];
      for(let j = 1; j <= coinCount; j++) {
        centsUsed.push(cents[i]);
      }
    } else if (cents[i] < target) {
      currentTotal = cents[i];
      centsUsed.push(cents[i]);
    }
    }
  }
  return centsUsed;
}
