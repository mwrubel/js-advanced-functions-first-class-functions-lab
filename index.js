// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    //const two = ([drivers]) => 
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers){
    //const lastTwo = () => /*[drivers] */
    return drivers.slice(drivers.length-2, drivers.length)
    
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
//selectingDrivers[0](drivers)

function createFareMultiplier(x){
    return (fare) => x * fare
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, whichFunction){
  
   return whichFunction(drivers)
}