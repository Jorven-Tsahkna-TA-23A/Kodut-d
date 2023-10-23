nr = Math.floor(Math.random() * 10) + 1
tries = 0
while(true) {
    if (tries == 3) {
        nr = Math.floor(Math.random() * 10) + 1
        tries = 0;
    }
    guess = prompt("Sisesta üks number 1-10-ni ")
    closeness = guess - nr;
    if (guess == nr) {
        console.log("Yay! Arvasid õige numbri ära!")
        break
    }else if (closeness == 1 || closeness == -1) {
        console.log("Ai, sa pakkusid väga lähedale.")
    }
    else {
        console.log("Sorry, " + guess + " ei ole õige number.")
    }
    tries++;
}