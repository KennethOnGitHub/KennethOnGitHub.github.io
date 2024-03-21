function randomString() {
    const strLen = 100;

    let output = "";

    for (let i = 0; i < strLen; i++) {
        let charCode = Math.floor(Math.random() * 26);

        output += String.fromCharCode(charCode + 65);
    }

    document.getElementById("changingText").innerHTML = output;
}

function reloadString() {
    setInterval(randomString, 50);
    loopNames();
}

function loopNames() {
    const names = ["Kenneth Knight", "Ken Knight", "Kenny"];
    let nameIndex = 0;

    function changeName() {
        document.getElementById("name").innerHTML = names[nameIndex];
        nameIndex++;
        nameIndex = nameIndex % names.length;
    }

    setInterval(changeName, 900);
}
