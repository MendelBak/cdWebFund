$(document).ready(function () {
    // alert("The page has loaded")


    $("#pokeButton").click(function () {
        // alert("The magic pokeButton has been clicked. Here are your images.")
        console.log($("#pokeButton").click(function () { }));
        $.get("https://pokeapi.co/api/v2/pokemon/1/",
            function (res) {
                console.log(res);
                for (var i = 1; i < 152; i++) {
                    $("body").append(`<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`);
                }
            }, "json");
    });







});//(document).ready end tag
