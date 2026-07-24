const palindromes = function (text) {
    let cleaned = Array.from(text.toLowerCase())
    .filter(character => /[a-zA-Z0-9]/.test(character))
    return cleaned.join("") == cleaned.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
