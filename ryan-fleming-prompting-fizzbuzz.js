$(document).ready(function() {
    var val0 = promptForValue();
    var val1 = promptForValue(false, true);
    main(val0, val1);
});

function main(val0, val1) {
    while (1 >= val0 || 100 <= val0 || isNaN(val0)) {
        val0 = promptForValue(true);
    }

    while (1 >= val1 || 100 <= val1 || isNaN(val1)) {
        val1 = promptForValue(true, true);
    }

    var strVal;
    var modFizz;
    var modBuzz;
    var strFizz = "Fizz";
    var strBuzz = "Buzz";

    for (i=1; i < 100; i++) {
        strVal = "";
        modFizz = (0 == i % val0 ? true : false);
        modBuzz = (0 == i % val1 ? true : false);

        if (!modFizz && !modBuzz) {
            strVal += i;
        } else {
            if (modFizz) {
                strVal += strFizz;
            }
            if (modBuzz) {
                strVal += strBuzz;
            }
        }
        $('#output').append($("<li>").text(i + ".)" + spaceMaker(i) + strVal));
        $('#output').append($("<li>").text("\u00A0"));
    }
}

function spaceMaker(i) {
    var whitespace = "\u00A0";
    if (99 < i) {
        return whitespace;
    } else if (9 < i) {
        return whitespace + whitespace + whitespace;
    } else {
        return whitespace + whitespace + whitespace + whitespace + whitespace;
    }
}

function promptForValue(doScoldUser, promptForSecondValue) {
    if (undefined == doScoldUser) { doScoldUser = false; }
    if (undefined == promptForSecondValue) { promptForSecondValue = false; }
    var strInstructions = promptForSecondValue ? "Enter a second numeric value between 1 & 100." : "Enter a numeric value between 1 & 100.";
    var strScold = "YOU FAILED TO FOLLOW INSTRUCTIONS. PLEASE TRY AGAIN."
    var strMessage = doScoldUser ? strScold + " " + strInstructions : strInstructions;
    return parseInt(prompt(strMessage));
}