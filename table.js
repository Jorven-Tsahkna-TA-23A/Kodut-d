w = 10
h = 10

table = ""

maxboxsize = (h * w).toString().length

for (i = 0; h > i; i++) {
    for (j = 0; w > j; j++) {
        boxnr = (j + 1) * (i + 1)
        boxsize = boxnr.toString().length
        for (k = 0; maxboxsize - boxsize > k; k++) {
            if (k % 2 == 0) {
                boxnr = " " + boxnr
            } else {
                boxnr = boxnr + " "
            }
        }
        boxnr = " " + boxnr + " "
        table += boxnr + "|"
    }

    table += "\n"
    oneline = 3.5
    line = ""
    dashes = 6 * w
    for (l = 0; dashes > l; l++) {
        line += "-"
    }
    table += line
    table += "\n"
}
console.log(table)

