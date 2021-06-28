// given a target sum and an array of positive numbers
// return true if there's any possible way to sum the numbers array
// to get target sum

// you can use one number from numbers array multiple times

// for eg. targetSum = 7 arr = [5, 3, 4, 7] => true
// targetSum = 7 arr = [2, 4] => false

const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);

    table[0] = true;

    for(let i = 0; i <= table.length; i++){
        if(table[i] === true){
            for(num of numbers){
                if(i + num < table.length)
                    table[i + num] = true
            }
        }
    }
    
    return table[targetSum];
}

console.log(canSum(7, [5,3,4,7])) 
console.log(canSum(7, [2,4]))
console.log(canSum(21, [7,14]))