const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);

console.log(sum);