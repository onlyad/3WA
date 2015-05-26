/**
 * Created by Dung on 2015-05-23.
 */
var dTodayDate = new Date();
var oCar = {
    brand: "Toyota",
    makeYear: 1999,
    purchasedDate: new Date(2012, 12, 2,2,15,0, 0),
    passengersName: ["Tony", "Peter", "Annie"]
};

document.write("<br> <h1>Brand: </h1>"  + oCar.brand  +
               "<br> <h1>Make Year: </h1>" + oCar.makeYear +
                "<br> <h1>Purchased Date:</h1>" + oCar.purchasedDate +
                "<br> <h1>Passengers Name:</h1>"+ oCar.passengersName);

document.write("<br> There is " + oCar.passengersName.length + " passenger.");
document.write("<br> The name of last Passenger: " + oCar.passengersName[oCar.passengersName.length-1]);
document.write("<br> Car's Age: " + ( dTodayDate.getFullYear() - oCar.makeYear));