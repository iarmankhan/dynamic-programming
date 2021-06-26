
// given a grid of m rows & n columns, start is left top and end is right bottom
// return the number of unique ways to travel to end from start
// you can only move to right or to bottom

const gridTraveler = (m, n, memo = {}) => {
    const key = `${m}|${n}`, reversedKey = `${n}|${m}`

    if(key in memo) return memo[key];
    if(reversedKey in memo) return memo[reversedKey]


    if(m === 0 || n === 0) return 0;
    if(m === 1 && n === 1) return 1;


    result = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    memo[key] = result
    memo[reversedKey] = result;

    return result
};

console.log(gridTraveler(180, 200))
