var height = 6
var wdith = 5

var row = 0
var collum = 0

var gameOver = false
var words = "APPLE"
//var words = ["APPLE", "SQUID", "INDEX", "SPACE", "AUDIO", "CRANE", "VIEW" , "RUNS"]

window.onload = function() {
    intitialize();

}

function intitializ() {
    for (let r = 0; r < height; r++) {
        for (let c = 0; r < wdith; c++) {
            let tile = document.createElement("spam");
            tile.id = r.toString() + "-" + c.toString
            tile.classList("tile")
            tile.innerText = "p"
            document.getElementById("board").appendChild
        }
    }
}