blocks = 5

korrused = 0

tyhi = true

while(tyhi) {

    if (blocks - korrused > -1) {
        //console.log(blocks - korrused)
        blocks -= korrused;
        korrused++;
    } else {
        tyhi = false
    }
}

for (i = 0; i < korrused; i++) {
    korrus = ""
    for (j = 0; j < i; j++) {
        korrus = korrus + "*"
    }
    if (korrus != "") {
        console.log(korrus)
    }

} 
//console.log("korrused: " + korrused)
