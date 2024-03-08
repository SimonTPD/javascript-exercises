const getTheTitles = function(books) {
    return books.reduce((acc, el) => [...acc, el.title], []);
};

// Do not edit below this line
module.exports = getTheTitles;
