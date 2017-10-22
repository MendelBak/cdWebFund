var hour = 8;
var minutes = 59;
var period = "PM";
var name = "Jasper";
var myName = "Dantes";
var timeOfDay = "";
var timeOfHour = "";
var relevantHour = "";

if (period === "AM") {
    timeOfDay = "Morning";
} else {
    timeOfDay = "Evening";
}

if (minutes > 0 && minutes < 30 && minutes < 60) {
    timeOfHour = "just after";
} else { 
    timeOfHour = "nearly";
}

if (timeOfHour === "just after") {
    relevantHour = hour;
} else {
    relevantHour = hour + 1;
}


console.log("Hello", name, "It's me,", myName, "!", "Good", timeOfDay, "!", "It's currently", hour, ":", minutes, period, ",", "which is", timeOfHour, relevantHour, period);