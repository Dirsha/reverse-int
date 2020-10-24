module.exports = function reverse(n) {
    var l = Math.abs(n).toString();
    return parseInt(l.split("").reverse().join(""));
};
