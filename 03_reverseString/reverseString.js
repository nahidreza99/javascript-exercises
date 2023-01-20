const reverseString = function(str) {
    var newStr = ''
    for(var i = str.length-1; i >= 0 ; i--){
        newStr += str[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
