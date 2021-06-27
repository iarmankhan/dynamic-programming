// given a string and an array of strings
// return all the ways you can construct the string
// using values from string array in a 2D array

// you can use one word multiple times

// target = 'abcdef' wordBank = ['abc', 'ab', 'cd', 'def', 'd'] => [['abc', 'def']]
// target = 'abbbba' wordBank = ['abb', 'cd', 'aa', 'abc'] => []

const allConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === '') return [[]]
    
    const result = []

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(suffixWay => [word, ...suffixWay]);
            
            result.push(...targetWays) 
        }
    }
    memo[target] = result;
    return result;
};

// m = target.length
// n = wordBank.length

// Bruteforce
// time = O(n^m )
// space = O(m)

console.log(allConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'd'])) // [['abc', 'def']]
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [['purp', 'le'], ['p', 'ur', 'p', 'l', 'e']]
console.log(allConstruct('abbbba', ['abb', 'cd', 'aa', 'abc'])) // []
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeef', ['e', 'eeeeeeee', 'eeeee', 'eeeeeeeeeeeeeeeee', 'eee'])) // []