$(document).ready(function () {
    $("#starkPic").click(function () {
        $.get("https://anapioficeandfire.com/api/houses/362/", function (res) {
            console.log(res);
            $("#name").text(`Name: ${res.name}`);
            $("#words").text(`Words: ${res.words}`);
            var titlesString = "";
            for (var i = 0; i < res.titles.length; i++) {
                titlesString += "Titles: ";
                titlesString += res.titles[i];
                titlesString += ", ";
            };
            $("#titles").text(titlesString);
        }, "json");
    })
    $("#targaryenPic").click(function () {
        $.get("https://anapioficeandfire.com/api/houses/378/", function (res) {
            console.log(res);
            $("#name").text(`Name: ${res.name}`);
            $("#words").text(`Words: ${res.words}`);
            var titlesString = "";
            for (var i = 0; i < res.titles.length; i++) {
                titlesString += "Titles: ";
                titlesString += res.titles[i];
                titlesString += ", ";
            };
            $("#titles").text(titlesString);
        }, "json");
    })
    $("#lannisterPic").click(function () {
        $.get("https://anapioficeandfire.com/api/houses/229/", function (res) {
            console.log(res);
            $("#name").text(`Name: ${res.name}`);
            $("#words").text(`Words: ${res.words}`);
            var titlesString = "";
            for (var i = 0; i < res.titles.length; i++) {
                titlesString += "Titles: ";
                titlesString += res.titles[i];
                titlesString += ", ";
            };
            $("#titles").text(titlesString);
        }, "json");
    })
    $("#baratheonPic").click(function () {
        $.get("https://anapioficeandfire.com/api/houses/15/", function (res) {
            console.log(res);
            $("#name").text(`Name: ${res.name}`);
            $("#words").text(`House Baratheon does not have any words.`);
            var titlesString = "";
            for (var i = 0; i < res.titles.length; i++) {
                titlesString += "Titles: ";
                titlesString += res.titles[i];
                titlesString += ", ";
            };
            $("#titles").text(titlesString);
        }, "json");
    })




}); //document.ready end tag

// house 362 = house stark. houes 15 = baratheon. house 378 = targareyon. house 229 = house lannister