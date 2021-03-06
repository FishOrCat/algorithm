const cases = [
    [[1, 2, 3, 4, 5], 2, 4],
    [[1, 2, 3, 4, 5], 2, 11],
    [[1, 2, 3, 4, 5], 2, 8],
    [[1, 2, 3, 4, 5], 2, 9],
    [[1, 2, 3, 4, 5, 6, 7, 9, 23, 8, 12, 43], 4, 56],
];
const results = [true, false, true, true, true];
const sum = function (arr) {
    return arr.reduce((a, b) => a + b, 0);
};

const validate = function (case1, index, res) {
    if (res == false && results[index] == false) {
        return true;
    }
    return res.length == case1[1] && sum(res) == case1[2];
};

module.exports = {
    cases,
    validate,
};