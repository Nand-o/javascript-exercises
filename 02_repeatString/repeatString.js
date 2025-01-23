const repeatString = function (string, num) {
    let answer = string;

    if (num === 0) {
        return answer = '';
    } else if (num < 0) {
        return answer = 'ERROR';
    } else {
        for (let i = 1; i <= (num - 1); i++) {
            answer += string;
        }
        return answer
    }
};

// Do not edit below this line
module.exports = repeatString;
