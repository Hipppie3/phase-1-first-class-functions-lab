// Code your solution in this file!

// Create an array name drivers
const array = [
 "Hines", "Ben", "Bettis", "Ike", "Troy"];

// 1) Returning the array with the first two names
const returnFirstTwoDrivers = function (drivers) {
return drivers.slice(0,2);
}
console.log(returnFirstTwoDrivers(array));

// // 2) Returning the array with the last two names
const returnLastTwoDrivers = function (drivers) {
 return drivers.slice(-2);
}
console.log(returnLastTwoDrivers(array));

// 3) Returning the array with the first name

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

console.log(selectingDrivers);

// 4) returns a funciton that will multiply a given value using created multiplier

const createFareMultiplier = function (multiplyValue) {
   return function (value) {
      return multiplyValue * value;
   }
}
console.log(createFareMultiplier(10));

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driversToReturn) {
   return driversToReturn(drivers);
}