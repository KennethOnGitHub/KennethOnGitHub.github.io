function randomiseBackgroundText() {
    const strLen = 21_000;

    let output = "";

    for (let i = 0; i < strLen; i++) {
        let charCode = Math.floor(Math.random() * 26);

        /*
        if (i % 10 ==0) {
            output += " "
        }else {
            output += String.fromCharCode(charCode + 65);
        }*/
        output += String.fromCharCode(charCode + 65);
    }

    document.getElementById("changingText").innerHTML = output;
}

function reloadString() {
    setInterval(randomiseBackgroundText, 50);
    //randomString();
    loopNames();
}

function loopNames() {
    const names = ["KENNETH KNIGHT", "KEN KNIGHT", "KENNY KNIGHT"];
    let nameIndex = 0;

    function changeName() {
        document.getElementById("name").innerHTML = names[nameIndex];
        nameIndex++;
        nameIndex = nameIndex % names.length;
    }

    setInterval(changeName, 900);
}
