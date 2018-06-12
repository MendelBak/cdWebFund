// Start game button -> then show the game
// 2) Points per coin.
$(document).ready(function () {
    $("#startGame").click(function () {
        $("#startGame").css("display", "none");
        $("#wrapper").show();
        $("#pacman").show();
        showWorld();
    });



});

var world = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 1, 1, 1, 0, 1, 1, 0],
    [0, 2, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var pacman = {
    x: 1,
    y: 1,
    score: 0
}

function showWorld() {
    var output = "";

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] === 0) {
                output += "<div class='brick'></div>";
            }
            else if (world[i][j] === 1) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] === 2) {
                output += "<div class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    console.log(output);
    document.getElementById('wrapper').innerHTML = output;
    showPacman();
}

function showPacman() {
    document.getElementById("pacman").style.left = pacman.x * 20 + "px";
    document.getElementById("pacman").style.top = pacman.y * 20 + "px";
}

function showScore() {
    document.getElementById("score").innerText = "Score: " + pacman.score;
}

document.onkeydown = function (action) {
    if (action.keyCode === 37 && world[pacman.y][pacman.x - 1] === 0) {
        console.log("Cannot move through wall");
    }
    else if (action.keyCode === 37 && world[pacman.y][pacman.x - 1] !== 0) {
        console.log("Left arrow was pressed")
        document.getElementById("pacman").style.transform = "scale(-1, 1)";
        pacman.x -= 1;
    }

    if (action.keyCode === 38 && world[pacman.y - 1][pacman.x] === 0) {
        console.log("Cannot move through wall");
    }
    else if (action.keyCode === 39 && world[pacman.y - 1][pacman.x] !== 0 ) {
        console.log("Up arrow was pressed");
        document.getElementById("pacman").style.transform = "rotate(240deg)";
        pacman.y -= 1;
    }

    if (action.keyCode === 39 && world[pacman.y][pacman.x + 1] === 0) {
        console.log("Cannot move through wall");
    }
    else if (action.keyCode === 39 && world[pacman.y][pacman.x + 1] !== 0) {
        console.log("Right arrow was pressed");
        document.getElementById("pacman").style.transform = "rotate(0deg)";
        pacman.x += 1;
    }

    if (action.keyCode === 40 && world[pacman.y + 1][pacman.x] === 0) {
        console.log("Cannot move through wall");
    }
    else if (action.keyCode === 40 && world[pacman.y + 1][pacman.x] !== 0) {
        console.log("Down arrow was pressed");
        document.getElementById("pacman").style.transform = "rotate(90deg)";
        pacman.y += 1;
    }

    showPacman();
    if (world[pacman.y][pacman.x] === 1) {
        world[pacman.y][pacman.x] = 2;
        pacman.score += 10;
    }
    showWorld();
    showScore();
}