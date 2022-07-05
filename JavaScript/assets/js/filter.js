function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const nums = [ 1 , 46 , 16, 484, 42, 01, 46, 47, 1, 3, 7];

console.log(filtraPares(nums));