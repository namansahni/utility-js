const minHelper = (num1, num2) => {
    if(num1 > num2)
        return num2;
    return num1;
}

const min = (arr) => {
    if(arr.length == 1)
        return arr[0];
    return minHelper(arr[0],min(arr.slice(1)));
}
module.exports = min;