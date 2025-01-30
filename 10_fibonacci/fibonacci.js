const fibonacci = function (num) {
    const index = parseInt(num);
    if (index < 0) return "OOPS";
    let arrFibo = [0, 1];
    for (let i = 2; i <= index; i++) {
        let temp = arrFibo[i - 1] + arrFibo[i - 2];
        arrFibo.push(temp);
    }
    return arrFibo[index]
};

console.log(fibonacci("10"));

// Do not edit below this line
module.exports = fibonacci;
