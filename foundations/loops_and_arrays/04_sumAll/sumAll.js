const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    } else if (start < 0 || end < 0) {
        return "ERROR";
    } else if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }

    let result = 0

    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result += i;
        } return result;
    } else if (start >= end) {
        for (let i = end; i <= start; i++) {
            result += i;
        } return result;
    }    
};

// Do not edit below this line
module.exports = sumAll;
