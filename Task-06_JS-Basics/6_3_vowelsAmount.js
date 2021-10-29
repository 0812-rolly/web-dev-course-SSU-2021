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
