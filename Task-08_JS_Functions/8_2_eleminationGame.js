function eleminate(quantity, step) {
    let participantList = new Array(quantity).fill().map((e, i) => i + 1)

    for (let i = 1; participantList.length > 1; i++) {
        let current = participantList.shift();
        !(i % step == 0)
            ? participantList.push(current)
            : i = 0;
    }
    return participantList.shift();
}

console.log("Elemination game: ");
console.log(eleminate(7, 3));
console.log(eleminate(11, 19));
console.log(eleminate(1, 300));
console.log(eleminate(14, 2));
console.log(eleminate(100, 1));
console.log("");