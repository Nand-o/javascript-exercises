const palindromes = function (str) {
    const alpanume = 'abcdefghijklmnopqrstuvwxyz0123456789';


    const firstString = str
        .toLowerCase()
        .split('')
        .filter((character) => alpanume.includes(character))
        .join('');

    const secondString = firstString.split('').reverse().join('');

    return firstString === secondString;
};

// Do not edit below this line
module.exports = palindromes;
