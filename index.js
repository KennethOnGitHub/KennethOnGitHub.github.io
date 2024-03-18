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
    changeName(0)
}

function changeName(nameIndex) { //this recursive approach will leak memory! I do not care tho! I checked and its abt 1mb every 30m!
    const names = ["Kenneth Knight", "Ken Knight", "Kenny"];

    nameIndex = nameIndex % names.length;

    document.getElementById("name").innerHTML = names[nameIndex];

    setTimeout(changeName, 900, nameIndex+1);
}