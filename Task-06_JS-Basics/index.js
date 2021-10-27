console.log("Задание 6.1. – Плоский массив");

const expandAndSort = arr => arr
    .flat(Infinity)
    .sort((a, b) => a - b);

console.log(expandAndSort([[[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]]))
console.log(expandAndSort([]))
console.log(expandAndSort([[], []]))
console.log(expandAndSort([[], [1]]))
console.log(expandAndSort([[1, 3, 5], [-100], [2, 4, 6]]))


console.log("Задание 6.2. – Бинарное слово");

function makeBinary(str) {
    return (
        Array
            .from(str)
            .reduce((accumulator, currentChar) => accumulator.concat(currentChar.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin)
    );
}

console.log(makeBinary('man'));
console.log(makeBinary('AB'));
console.log(makeBinary('wecking'));
console.log(makeBinary('Ruby'));
console.log(makeBinary('Yosemite'));


console.log("Задание 6.3. – Подсчёт гласных");

function vowelsAmount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(letter => vowels.includes(letter.toLowerCase())).length;
}

console.log(vowelsAmount('abracadabra'));
console.log(vowelsAmount('ABRACADABRA'));
console.log(vowelsAmount('o a kak ushakov lil vo kashu kakao'));
console.log(vowelsAmount('my pyx'));


console.log("Задание 6.4. – Форматирование строки");

function accumulate(str) {
    return str
        .split('')
        .reduce((str, letter, index) => str.length ? str + '-' + letter.toUpperCase() + letter.toLowerCase().repeat(index) : letter.toUpperCase(), '');
};

console.log(accumulate('abcd'));
console.log(accumulate('RqaEzty'));
console.log(accumulate('cwAt'));


console.log("Задание 6.5. – Изограммы");

function isogram(str) {
    return new Set(str.toLowerCase()).size === str.length
}

console.log(isogram('Dermatoglyphics'));
console.log(isogram('aba'));
console.log(isogram('moOse'));
console.log(isogram(''));
