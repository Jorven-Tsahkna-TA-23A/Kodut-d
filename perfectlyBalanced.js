scale = prompt("Pane x ja y palju suvalielt ja ma kaalun")

function kaalun(raskused) {
    x = scale.split("x")
    y = scale.split("y")

    console.log(x.length + " " + y.length)

    if (x.length == y.length) {
        return true
    } else {
        return false
    }
}

kaalun(scale)

//boonus liiga raske