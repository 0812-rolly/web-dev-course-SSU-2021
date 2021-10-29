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