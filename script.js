function firstChar(str) {
    return str.trim() ? str.trim()[0] : "";
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
