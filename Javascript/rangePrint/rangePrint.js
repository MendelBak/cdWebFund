function rangePrint(startPoint, endPoint, skipAmount) {
    if (!skipAmount) {
        skipAmount = 1;
    }
    if (!endPoint) {
        endPoint = startPoint;
        startPoint = 0;
    }
    for (var i = startPoint; i < endPoint; i += skipAmount) {
        console.log(i);
    }
    if (startPoint > endPoint) {
        for (var i = endPoint; i < startPoint; i += skipAmount) {
            console.log(i);
        }
    }
}
rangePrint(11, );