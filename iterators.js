/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
//array = [1,2,3]
const logger = function (array) {
  for (let i = 0; i < array.length; i++){
    console.log(array[i])
  }
};
//logger(array)

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
//temperatures = [101,115,200]
celsius = []
const toCelsius = function (temperatures) {
  for (let i = 0; i < temperatures.length; i++){
    let c = (temperatures[i]-32) * (5/9)
    celsius.push(c)
  }
  return celsius
};
//console.log(toCelsius(temperatures))
/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
//threshhold = 102
exceedTemperatures = []
const hottestDays = function (temperatures, threshhold) {
  for (let i = 0; i < temperatures.length; i++){
   if (temperatures[i] > threshhold){
    exceedTemperatures.push(temperatures[i])
   }
  }
  return exceedTemperatures
};
//console.log(hottestDays(temperatures,threshhold))
/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  return toCelsius(hottestDays(temperatures,threshhold))
};
//console.log(logHottestDays(temperatures, threshhold))
/* Uncomment the following lines to test your code... */

 //logger([1, 2, 3, 4, 5, 6, 7]);
 //console.log(toCelsius([212, 122])); // should be: [100, 50];
 //console.log(hottestDays([1, 2, 3, 4, 5, 6, 7, 8, 13, 156, 1765], 5)); // should be : [6, 7, 8, 13, 156, 1765]
 console.log(logHottestDays([140, 68, 212, 45, 149, 122, 19], 80)); // should log "60", "100", "65", and "50"

module.exports = { logger, toCelsius, hottestDays, logHottestDays };
