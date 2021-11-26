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

export default eleminate;