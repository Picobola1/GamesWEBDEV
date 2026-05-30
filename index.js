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
    });
}