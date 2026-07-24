const findTheOldest = function(people) {
    return people.sort((a, b) => {
        if (a.yearOfDeath == undefined) a.yearOfDeath = 2026;
        if (b.yearOfDeath == undefined) b.yearOfDeath = 2026;
        return b.yearOfDeath - b.yearOfBirth - a.yearOfDeath + a.yearOfBirth;
    }).at(0);
};

// Do not edit below this line
module.exports = findTheOldest;
