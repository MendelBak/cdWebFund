// Start game button -> then show the game
// 2) Points per coin.
$(document).ready(function () {
    $("#startGame").click(function () {
        $("#startGame").css("display", "none");
        $("#wrapper").css("display", "block");
    });



});

var score = 0;
var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];


function showWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] === 0) {
                output += "\n\t<div class='brick'></div>";
            }
            else if (world[i][j] === 1) {
                output += "\n\t<div class='coin'></div>";
            }
        }
        output += "\n</div>";
    }
    console.log(output);
    document.getElementById("wrapper").innerHTML = output;
}