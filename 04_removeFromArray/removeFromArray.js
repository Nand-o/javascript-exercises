const removeFromArray = function (array, ...removeElement) {
    const removedArray = [];

    for (let i = 0; i <= array.length - 1; i++) {
        if (!removeElement.includes(array[i])) {
            removedArray.push(array[i]);
          }
    }

    return removedArray
};

console.log(removeFromArray([1, 2, 3, 4], 3));
console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
