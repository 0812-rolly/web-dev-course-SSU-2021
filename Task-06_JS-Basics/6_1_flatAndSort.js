console.log("Задание 6.1. – Плоский массив");

const flatAndSort = arr => arr
    .flat(Infinity)
    .sort((a, b) => a - b);

console.log(flatAndSort([[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]]))
console.log(flatAndSort([]))
console.log(flatAndSort([[], []]))
console.log(flatAndSort([[], [1]]))
console.log(flatAndSort([[1, 3, 5], [-100], [2, 4, 6]]))
