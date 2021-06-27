// given a target sum and an array of positive numbers
// return the shortest array of numbers that can sum upto target number
// return null if there's no sum

// you can use one number from numbers array multiple times

// for eg. targetSum = 7 arr = [5, 3, 4, 7] => [7]
// targetSum = 7 arr = [2, 4] => null

const bestSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return []
    if(targetSum < 0) return null

    let shortestCombination = null

    for (let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if(remainderCombination !== null){
            const combination = [...remainderCombination, num];

            if(shortestCombination === null || combination.length < shortestCombination.length){
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;

    return shortestCombination;

};


// m = target sum
// n = length of numbers

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(n * m * m)
// space: O(m^2)


console.log(bestSum(7, [5,3,4,7])) 
console.log(bestSum(7, [2,4]))
console.log(bestSum(49, [7,14]))
console.log(bestSum(8009, [100, 1, 1, 2, 4]))