const repeatString = function(text, n) {
    let ans = "";
    if (n < 0) return "ERROR";
    for (let i = 0; i < n; i++) {
        ans += text;
    }
    return ans; 
};

// Do not edit below this line
module.exports = repeatString;
