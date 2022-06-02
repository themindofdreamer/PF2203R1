function checkBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);
    let bmi = weight / Math.pow(height, 2);
    document.getElementById ("result").innerHTML = bmi.toFixed(2);
    if (bmi > 40) {
        document.getElementById ("message").innerHTML = "extremely obese";
    } else if (bmi >= 35) {
        document.getElementById ("message").innerHTML = "obese";
    } else if (bmi >= 30) {
        document.getElementById ("message").innerHTML = "overweight";
    } else if (bmi >= 25) {
        document.getElementById ("message").innerHTML = "slightly overweight";
    } else if (bmi >= 18.5) {
        document.getElementById ("message").innerHTML = "normal weight";
    } else if (bmi >= 17) {
        document.getElementById ("message").innerHTML = "slightly underweight";
    } else if (bmi >= 16) {
        document.getElementById ("message").innerHTML = "underweight";
    } else {
        document.getElementById ("message").innerHTML = "extremely underweight";
    }
}