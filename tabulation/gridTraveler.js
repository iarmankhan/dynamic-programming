// given a grid of m rows & n columns, start is left top and end is right bottom
// return the number of unique ways to travel to end from start
// you can only move to right or to bottom

const gridTraveler = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
    
    table[1][1] = 1

    for(let row = 0; row <= m; row++){
        for(let col = 0; col <= n; col++){
            const current = table[row][col];

            if(col + 1 <= n) table[row][col + 1] += current;
            if(row + 1 <= m) table[row + 1][col] += current;
        }
    }

    return table[m][n]
};

console.log(gridTraveler(1, 1))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(30, 20))
console.log(gridTraveler(300, 201))