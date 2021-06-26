// given a target sum and an array of positive numbers
// return true if there's any possible way to sum the numbers array
// to get target sum

// you can use one number from numbers array multiple times

// for eg. targetSum = 7 arr = [5, 3, 4, 7] => true
// targetSum = 7 arr = [2, 4] => false

const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum - num;

        if(canSum(remainder, numbers) === true){
            return true
        }
    }

    return false;
}

console.log(canSum(7, [5,3,4,7])) 
console.log(canSum(7, [2,4]))
console.log(canSum(300, [7,14]))