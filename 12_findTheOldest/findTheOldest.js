const findTheOldest = function(persons) {
    return persons.map(el => {
            const currentYear = new Date().getFullYear();
            let age;
            if (!('yearOfDeath' in el)) age = currentYear - el.yearOfBirth;
            else age = el.yearOfDeath - el.yearOfBirth;
            return {name: el.name, age: age};
        })
        .reduce((acc, el) => {
            acc = (el.age > acc.age) ? el : acc;
            return acc;
        }, {name: 'None', age: 0});
};

// Do not edit below this line
module.exports = findTheOldest;
