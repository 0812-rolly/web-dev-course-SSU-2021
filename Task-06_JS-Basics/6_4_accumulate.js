console.log("Задание 6.4. – Форматирование строки");

function accumulate(str) {
    return str
        .split('')
        .reduce((str, letter, index) => str.length ? str + '-' + letter.toUpperCase() + letter.toLowerCase().repeat(index) : letter.toUpperCase(), '');
};

console.log(accumulate('abcd'));
console.log(accumulate('RqaEzty'));
console.log(accumulate('cwAt'));