// function Decration
/*function checkDriverAge() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
    alert("Soory, your are too young to drive this car. Powering off!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of drivinng. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert("Powering on. Enjooy the ride!");
}
}
checkDriverAge();

// function Expression
var checkDriverAge2 = function() {
    var age = prompt("What is your age?");
    if (Number(age) < 18) {
    alert("Soory, your are too young to drive this car. Powering off!");
} else if (Number(age) === 18) {
    alert("Congratulations on your first year of drivinng. Enjoy the ride!");
} else if (Number(age) > 18) {
    alert("Powering on. Enjooy the ride!");
}
}
checkDriverAge2();*/

// Arguments
function checkDriverAge(age) {
    if (Number(age) < 18) {
        console.log(age)
    return "Soory, your are too young to drive this car. Powering off!";
} else if (Number(age) === 18) {
    console.log(age)
    return "Congratulations on your first year of drivinng. Enjoy the ride!";
} else if (Number(age) > 18) {
    console.log(age)
    return "Powering on. Enjooy the ride!";
}
}
checkDriverAge(70);