const fibonacci = function(num) {
    let a = 1;
    let b = 1;
    if (num < 0) return "OOPS";
    if (num == 0) return 0; 
    for (let i = 3; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
