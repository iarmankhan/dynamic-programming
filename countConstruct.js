// given a string and an array of strings
// return the total numbers of ways you can construct the string
// using values from string array.

// you can use one word multiple times

// target = 'abcdef' wordBank = ['abc', 'ab', 'cd', 'def', 'd'] => 1
// target = 'abbbba' wordBank = ['abb', 'cd', 'aa', 'abc'] => 0

const countConstruct = (target, wordBank) => {
    if(target === '') return 1;

    let total = 0

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixResult = countConstruct(suffix, wordBank);

            total += suffixResult
        }
    }

    return total;
};


// m = target.length
// n = wordBank.length

// Bruteforce
// time: O(n^m * m) 
// space: O(m^2) 

console.log(countConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'd'])) // 1
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abbbba', ['abb', 'cd', 'aa', 'abc'])) // 0
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eeeeeeee', 'eeeee', 'eeeeeeeeeeeeeeeee', 'eee'])) // 0