$(document).ready(function(){
    // alert("Page has loaded!")

$("#hideHim").click(function(){
    // alert("I've been clicked!")
    $("#hideMe").hide(1000);
});

$("#showHim").click(function(){
    $("#hideMe").show(1000);
});

$("#toggleHim").click(function(){
    $("#toggleMe").toggle(600);
});

$("#slideHimUp").click(function(){
    $("#slideMe").slideUp();
});

$("#slideHimDown").click(function(){
    $("#slideMe").slideDown(600);
});

$("#slideHimToggle").click(function(){
    $("#slideMeToggle").slideToggle(1000);
});

$("#fadeItIn").click(function(){
    $("#fadeMeIn").fadeOut("slow");
});

$("#fadeMeOut").click(function(){
    $("#fadeMeIn").fadeIn("slow");
})
$("#addClass").click(function(){
    $("#addClass").addClass("addClassTest addClassTest2");
});

$("#beforeMethod").click(function(){
    $("#beforeMethod").before("<p>I am being added to before the element.</p>");
});
$("#removeClass").click(function(){
    $("#addClass").removeClass();
});

$("#afterMethod").click(function(){
    $("#afterMethod").after("<p>Calling Captain Kirk!</p>");
});

$("#appendMethod").click(function(){
    $("#appendMethod").append("<p>Houston to Tintin! Come in Tintin!</p>");
});

$("#prependMethod").click(function(){
    $("#prependMethod").prepend("<p>This is a bit of prepended text! This entire element is placed as a child element in the beginning of the parent!</p>");
});

$("#attrMethod").click(function() {
    $("#attrMethod").attr("");
    console.log($("#attrMethod").attr("id"));
});

$("#valueMethod").click(function() {
    $("#valueMethod").val();
    console.log($("#valueMethod").val());
});

$("#dataMethod").click(function(){
    $("#dataMethod").data();
    console.log($("#dataMethod").data())
});




}); //this is the end of the $(document).ready method and all the jQuery code needs to be inside this tag.