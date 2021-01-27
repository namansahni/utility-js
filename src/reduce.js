const reduce = (arr,func,append) => {
    if(arr.length == 0)
        return append;
    if(append == undefined) return recurse(arr,func,0);
    return func(append,recurse(arr,func,0));
}

const recurse = (arr, func, iterator) => {
    if(iterator != (arr.length-1))
        return func(arr[iterator],recurse(arr,func,iterator+1));
    return arr[iterator];
}

module.exports = reduce;