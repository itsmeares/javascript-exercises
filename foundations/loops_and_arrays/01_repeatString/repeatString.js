const repeatString = function(string, num) {
    const originalString = string;
    if (num > 0) {
        for (let i = 1; i < num; i++) {
            string += originalString;
        } return string;
    } else if (num < 0) {
        return "ERROR";
    } else return "";
};

// Do not edit below this line
module.exports = repeatString;
