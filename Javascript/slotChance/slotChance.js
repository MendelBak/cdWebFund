function slotChance (quartersToPlay, playerNumber, cashOut) {
    var winnings = Math.trunc(Math.random() * 50) + 51; //change this to, from 50-100 quarters
    var machineNumber;
    for (var i = quartersToPlay; i >= 0; i--) {
        machineNumber = Math.trunc(Math.random() * 100); //This will return a random integer between 0 and 100.

        if(quartersToPlay >= cashOut) {
            console.log(" Good idea to leave here while you still have money in your pocket. Have a safe night! Don't forget to talk to the IRS!");
            break;
        }
        else if (playerNumber === machineNumber){
            console.log(machineNumber);
            console.log("Spin #:" + i + " Oorah! You won some money to pay off your student loans! Here's how much you won. You won: " + winnings + " quarters!");
            quartersToPlay += winnings;
        }
        else if (playerNumber != machineNumber) {
            console.log(machineNumber);
            console.log("Spin #:" + i + " You just made the casino $.25 richer! Please try again!");
        }
        // else if(quartersToPlay === 0) {
        //     console.log(" Sorry bro, you're out of cash. We took it all. Hahahahahah!");
        //     break;
        // } This is not working for some reason. The code is solid, but I'm missing something small, like placing it in the wrong position in the flow or using the wrong comparison operator or something like that.
    }
}

slotChance(18, 77, 75);