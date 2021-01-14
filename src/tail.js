const tail = (arr) => {
    if(arr.length > 0)
        return arr.slice(1);
    return undefined;
}
module.exports = tail;