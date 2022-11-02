// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    let newArr = drivers.slice(0,2);
    //console.log(drivers.slice(0, 2));
    return newArr
}

const returnLastTwoDrivers = (drivers) => {
    let newArr = drivers.slice(-2);
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    function fareMultiplier(fare) {
    return fare * multiplier
    }
    return fareMultiplier;
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare *3
}

function selectDifferentDrivers(drivers, secondArgument) {
    let arr1 = drivers.slice(0,2)
    let arr2 = drivers.slice(-2)
    if (secondArgument === returnFirstTwoDrivers) {
        return arr1;
    } else if (secondArgument === returnLastTwoDrivers) {
        return arr2
    }
    else {
        return undefined
    }

}