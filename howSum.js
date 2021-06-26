// given a target sum and an array of positive numbers
// return the array of numbers that can sum upto target number
// return null if there's no sum

// you can use one number from numbers array multiple times

// for eg. targetSum = 7 arr = [5, 3, 4, 7] => [4, 3] or [7]
// targetSum = 7 arr = [2, 4] => null

const howSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for (let num of numbers){
        const remainder = targetSum - num;
        const result = howSum(remainder, numbers);

        if(result !== null){
            return [...result, num];
        }
    }

    return null;
};

console.log(howSum(7, [5,3,4,7])) 
console.log(howSum(7, [2,4]))
console.log(howSum(49, [7,14]))