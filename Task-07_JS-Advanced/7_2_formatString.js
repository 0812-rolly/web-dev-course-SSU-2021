function formatString(m, n, str) {
    if (typeof n != "number" || typeof m != "number" || !Number.isInteger(n) || !Number.isInteger(m) || n < 1 || m < 1) {
        return 'The first and second arguments must be a positive integer!';
    }

    let chunks = [];
    let strLength = str.length;
    let table = '';

    //Split the string into substrings og length n
    for (let i = 0; i < strLength; i += n) {
        chunks.push(str.substring(i, i + n));
    }

    //Create a table
    for (let i = 0; i < m; i++) {    
        table += "+---".repeat(n) + "+\n";
        for (let j = 0; j < n; j++) {
            if (typeof chunks[i] != "undefined" && typeof chunks[i][j] != "undefined") {
                if (chunks[i][j] == ' ')  {
                    table += `|   `; 
                }
                else {
                    table += `| ${chunks[i][j]} `;
                }
            }
            else 
            table += `|   `; 
        }
        table += "| \n";
    }
    table += "+---".repeat(n) + "+\n";
    return (table);
}

console.log("Formatting a string to a table: ")
console.log(formatString(4, 4, "Hello World!"));
console.log(formatString(4, 3, "Nice pattern"));
console.log(formatString(3, 4, "Nice pattern"));
console.log(formatString(4, 4, ""));
console.log(formatString(-3, 4, "Nice pattern"));
console.log(formatString(3, -4, "Nice pattern"));
console.log(formatString(3.5, 4, "Nice pattern"));
console.log("");