function makeBinary(str) {
    return (
        Array
            .from(str)
            .reduce((accumulator, currentChar) => accumulator.concat(currentChar.charCodeAt().toString(2)), [])
            .map(bin => '0'.repeat(8 - bin.length) + bin)
    )
}

export default makeBinary;