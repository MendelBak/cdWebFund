$(document).ready(function(){
    // alert("Page has loaded!")


$("img").click(function(){
    alert("I've been clicked!")
    $(this).hide();
});

$("button").click(function(){
    $("img").show();
});






});