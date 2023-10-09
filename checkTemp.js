function checkTemp(temp) {
    if (temp >= 0 && temp <= 20) {
        return -1
    }
    if (temp >= 21 && temp <= 40) {
        return 0
    }
    if (temp >= 41 && temp <= 60) {
        return 1
    }
}

temp = prompt();
console.log(temp);
console.log(checkTemp(temp));