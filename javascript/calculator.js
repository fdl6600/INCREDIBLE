(function () {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    const charToNumMap = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5,
        'F': 6,
        'G': 7,
        'H': 8,
        'I': 9,
        'J': 10,
        'K': 11,
        'L': 12,
        'M': 13,
        'N': 14,
        'O': 15,
        'P': 16,
        'Q': 17,
        'R': 18,
        'S': 19,
        'T': 20,
        'U': 21,
        'V': 22,
        'W': 23,
        'X': 24,
        'Y': 25,
        'Z': 26
    };

    const numToCharMap = Object.fromEntries(
        Object.entries(charToNumMap).map(([char, num]) => [num, char])
    );

    buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                // Append the letter to the screen
                screen.value += value;
            }
        });
    });

    equal.addEventListener('click', function (e) {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            // Convert the screen input to numeric expression
            let numericExpression = screen.value.split('').map(char => {
                if (char in charToNumMap) {
                    return charToNumMap[char]; // Replace letter with its numeric value
                }
                return char; // Keep operators as they are
            }).join('');

            try {
                let answer = eval(numericExpression);

                // Convert the numeric answer back to a letter if it's in the range
                if (answer > 26) {
                    screen.value = "ippm sheriyakkaa"
                }else if(answer < 1 ){
                    screen.value = "poyi chavedaa.."
                } else {
                    screen.value = numToCharMap[answer] || "Error"; // Display letter or "Error"
                }

            } catch (error) {
                screen.value = "Error";
            }
        }
    });

    clear.addEventListener('click', function (e) {
        screen.value = "";
    });

})();
