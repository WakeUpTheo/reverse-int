module.exports = function reverse (n) {
    n = Math.abs(n);
    n = Array.from(String(n), Number);
    return +(n.reverse().join(''));
}
