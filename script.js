//method 1

function bmiCalculator(weight,height) {
    var bmi = weight / (height*height);
    return Math.round(bmi);
}
var bmi = bmiCalculator(70,1.9);
console.log(bmi);

/* method 2 */

function bmiCalculator(weight,height) {
    var bmi = weight / Math.pow(height,2);
    return bmi;
}

var bmi = bmiCalculator(70,1.9);
console.log(bmi);