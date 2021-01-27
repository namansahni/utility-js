const filter = (arr,func) => {
    var result = [];
    recurse(result,arr,func,0);
    return result;
}

const recurse = (result, arr, func, iterator) => {
    if(iterator == arr.length)
        return;
    if(func(arr[iterator]))
        result.push(arr[iterator]);
    recurse(result,arr,func,iterator+1);
}

module.exports = filter;