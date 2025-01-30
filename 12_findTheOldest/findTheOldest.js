const findTheOldest = function (arr) {
    const oldest = arr
        .sort((lastGuy, nextGuy) => getAge(lastGuy.yearOfBirth, lastGuy.yearOfDeath) > getAge(nextGuy.yearOfBirth, nextGuy.yearOfDeath)
            ? -1 : 1);

    return oldest[0]
};

function getAge (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
