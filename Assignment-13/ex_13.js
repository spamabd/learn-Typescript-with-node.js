//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myTransport = ["car", "Bike", "bus", "train", "truck", "aeroplane", "wheelchair"];
//1st method (for loop)
for (var i = 0; i < myTransport.length; i++) {
    console.log("I would like to own a ".concat(myTransport[i]));
}
//2nd method 
myTransport.map(function (abd) {
    console.log("I would like to own a ".concat(abd));
});
