var height = 6;
var width = 5;

var row = 0;
var column = 0;

var gameOver = false;
var word = "APPLE";

window.onload = function() {
    initialize();
}

function initialize() {
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span");

            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";

            document.getElementById("board").appendChild(tile);
        }
    }

    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
            if (column < width) {
                let currentTile = document.getElementById(row.toString() + "-" + column.toString());
                currentTile.innerText = e.code[3];
                column += 1;
            }
        }
        else if (e.code == "Backspace") {
            if (0 < column && column <= width) {
                column -= 1;
            }

            let currentTile = document.getElementById(row.toString() + "-" + column.toString());
            currentTile.innerText = "";
        }
        else if (e.code == "Enter") {
            update();

            row += 1;
            column = 0;
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = word;
        }
    });
}

function update() {
    let correct = 0;
    let letCount = {}; // KENNY {K:1; E:1; N:2; Y:1;}

    for (let i = 0; i < word.length; i++) {
        if (letCount[letter]) {
            letCount[letter] += 1;
        }
        else {
            letCount[letter] = 1;
        }
    }
    // go again and mark wich ones are in the wrong positions
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;

        if (word[c] == letter) {
            currentTile.classList.add("correct");
            correct += 1;
            letCount[letter] -= 1;

        }
        

        if (correct == width) {
            gameOver = true;
        }
    }

    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;

        if (!currentTile.classList.contains("correct")) {
            if (word.includes(letter) && letCount[letter] > 0) {
                currentTile.classList.add("present");
                letCount[letter] -= 1;
            }
            else {
                currentTile.classList.add("absent");
            }
        }

  
    }
}