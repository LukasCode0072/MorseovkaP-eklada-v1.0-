
function removeDiacritics(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function Translate() {
    var userInput = document.getElementById("user-input").value;
    console.log("userInput:" + userInput);
    var userInputWithoutDiacritics = removeDiacritics(userInput);
    console.log("userInputWithoutDiactics:" + userInputWithoutDiacritics);
    var text = userInputWithoutDiacritics.toLowerCase();
    console.log("Text:" + text);
    var length = text.length;
    console.log("Length:" + length);
    var result = "";
    for (let i = 0; i < length; i++) {
        var char = text.charAt(i);
        console.log("Char:" + char);
        if (char == " ") {
            var result = result + "/"
        } else if (char == "a") {
            var result = result + "._/"
        } else if (char == "b") {
            var result = result + "_.../"
        } else if (char == "c") {
            var result = result + "_._./"
        } else if (char == "d") {
            var result = result + "_../"
        } else if (char == "e") {
            var result = result + "./"
        } else if (char == "f") {
            var result = result + ".._./"
        } else if (char == "g") {
            var result = result + "_ _./"
        } else if (char == "h") {
            var result = result + "..../"
        } else if (char == "i") {
            var result = result + "../"
        } else if (char == "j") {
            var result = result + "._ _ _/"
        } else if (char == "k") {
            var result = result + "_._/"
        } else if (char == "l") {
            var result = result + "._../"
        } else if (char == "m") {
            var result = result + "_ _/"
        } else if (char == "n") {
            var result = result + "_./"
        } else if (char == "o") {
            var result = result + "_ _ _/"
        } else if (char == "p") {
            var result = result + "._ _ _/"
        } else if (char == "q") {
            var result = result + "_ _._/"
        } else if (char == "r") {
            var result = result + "._./"
        } else if (char == "s") {
            var result = result + ".../"
        } else if (char == "t") {
            var result = result + "_/"
        } else if (char == "u") {
            var result = result + ".._/"
        } else if (char == "v") {
            var result = result + "..._/"
        } else if (char == "w") {
            var result = result + "._ _/"
        } else if (char == "x") {
            var result = result + "_.._/"
        } else if (char == "y") {
            var result = result + "_._ _/"
        } else if (char == "z") {
            var result = result + "_ _../"
        } else if (char == "0") {
            var result = result + "_ _ _ _ _/"
        } else if (char == "1") {
            var result = result + "._ _ _ _/"
        } else if (char == "2") {
            var result = result + ".._ _ _/"
        } else if (char == "3") {
            var result = result + "..._ _/"
        } else if (char == "4") {
            var result = result + "...._/"
        } else if (char == "5") {
            var result = result + "...../"
        } else if (char == "6") {
            var result = result + "_..../"
        } else if (char == "7") {
            var result = result + "_ _.../"
        } else if (char == "8") {
            var result = result + "_ _ _../"
        } else if (char == "9") {
            var result = result + "_ _ _ _./"
        } else if (char == "?") {
            var result = result + ".._ _../"
        } else if (char == ",") {
            var result = result + "_ _.._ _/"
        } else if (char == ".") {
            var result = result + "._._._/"
        } else if (char == ";") {
            var result = result + "_._._./"
        } else if (char == "/") {
            var result = result + "_.._./"
        } else if (char == "=") {
            var result = result + "_..._/"
        } else if (char == "-") {
            var result = result + "_...._/"
        } else if (char == "'") {
            var result = result + "._ _ _ _./"
        } else if (char == "(") {
            var result = result + "_._ _./"
        } else if (char == ")") {
            var result = result + "_._ _._/"
        } else if (char == ":") {
            var result = result + "_ _ _.../"
        } else if (char == "+") {
            var result = result + "._._./"
        } else if (char == "_") { 
            var result = result + ".._ _._/"
        } else if (char == "@") {
            var result = result + "._ _._./"
        }
    }
    console.log("Result:" + result);
    document.getElementById("result").innerHTML = result;
}
