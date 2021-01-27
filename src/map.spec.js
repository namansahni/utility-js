const map = require('./map');

const cube = (num) => {
    return num * num * num;
}

const identity = (num) => {
    return num;
}


describe('Map', () => {

    it('Cube of empty object is empty object', () => {
        expect(map([],cube)).toEqual([]);
    });

    it('Identity of object is the object itself', () => {
        expect(map([1,2,3],identity)).toEqual([1,2,3]);
    });

    it('Cube of 1,2,3 is 1,8,27', () => {
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    });

    it('map([{x : 10}],someObject => someObject.x + 1) is 11', () => {
        expect(map([{x : 10}],someObject => someObject.x + 1)).toEqual([11]);
    });
})
