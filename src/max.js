const maxHelper = (num1, num2) => {
    if(num1 > num2)
        return num1;
    return num2;
}

const max = (arr) => {
    if(arr.length == 1)
        return arr[0];
    return maxHelper(arr[0],max(arr.slice(1)));
}
module.exports = max;
