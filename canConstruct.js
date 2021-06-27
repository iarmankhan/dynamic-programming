// given a string and an array of strings
// return true if you can construct the string
// using values from string array.

// you can use one word multiple times

// target = 'abcdef' wordBank = ['abc', 'ab', 'cd', 'def', 'd'] => true
// target = 'abbbba' wordBank = ['abb', 'cd', 'aa', 'abc'] => false

const canConstruct = (target, wordBank) => {
    if(target === '') return true;

    for (let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank) === true){
                return true;
            }
        }
    }

    return false;
};


// m = target.length
// n = wordBank.length

// Bruteforce
// time: O(n^m * m) 
// space: O(m^2) 

console.log(canConstruct('abcdef', ['abc', 'ab', 'cd', 'def', 'd'])) // true
console.log(canConstruct('abbbba', ['abb', 'cd', 'aa', 'abc'])) // false
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'eeeeeeee', 'eeeee', 'eeeeeeeeeeeeeeeee', 'eee'])) // false