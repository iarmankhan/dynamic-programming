// given a target sum and an array of positive numbers
// return the array of numbers that can sum upto target number
// return null if there's no sum

// you can use one number from numbers array multiple times

// for eg. targetSum = 7 arr = [5, 3, 4, 7] => [4, 3] or [7]
// targetSum = 7 arr = [2, 4] => null

const howSum = (targetSum, numbers, memo = {}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers, memo);

        if(result !== null){
            memo[targetSum] = [...result, num];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null
    return null;
};

// m = target sum
// n = length of numbers

// Brute force
// time: O(n^m * m)
// space: O(m)

// Memoized
// time: O(n * m * m) = O(n * m^2)
// space: O(m^2) 

console.log(howSum(7, [5,3,4,7])) 
console.log(howSum(7, [2,4]))
console.log(howSum(21221, [7,14]))