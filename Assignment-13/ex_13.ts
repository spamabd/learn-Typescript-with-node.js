//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const myTransport: string [] = ["car", "Bike", "bus", "train", "truck", "aeroplane", "wheelchair"]

//1st method (for loop)

for(let i = 0; i < myTransport.length ; i++){
    console.log(`I would like to own a ${myTransport[i]}`);
}


//2nd method 

myTransport.map( (abd)=>{
    console.log(`I would like to own a ${abd}`)
}
)