// function sendMessage (message, fn) {
//     return fn(message)
// }

// sendMessage('Hello Jibola', console.log);

// sendMessage -higher order function
// fn - call back function 

//Referencing a function vs calling a function 


//Higher order functions are functions that take another function as a parameter


// Q: write a function that sends a message
function sendMessage (message) {
    console.log(message);
}

sendMessage('hello Mary');

// function sendMessageWithConfirm(message) {
//       confirm(message);
// }
// sendMessageWithConfirm('Hello, Anna')


//Q: Write a solution that calculates the area and the diameter of a circle given the radius [1,2,3]; and returns the output for each radius in an area

// area of a circle = PI * radius ** 2
// diameter of a circle = 2 * radius

function calculateArea (radii) {
    const result = [];
    for (let i=0; i< radii.length; i++) {
        let area = Math.PI * radii[i] ** 2
        result.push(area)
    }
    return result;
}

let arrayOfAreas = calculateArea([1,2,3])
console.log(arrayOfAreas)

function calculateDiameter(radii) {
    const result = [];
    for (let i=0; i< radii.length; i++) {
        let diameter = 2 * radii[i];
        result.push(diameter)
    }
    return result;
}

let arrayOfDiameters = calculateDiameter([1,2,3])
console.log(arrayOfDiameters)

// calculate the circumference of the circle
// circumference = 2 * PI * radii

function calculateCircumference(radii) {
    const result = [];
    for (let i=0; i< radii.length; i++) {
        let circumference= 2 * Math.PI * radii[i];
        result.push(circumference)
    }
    return result;
}

let arrayOfCircumferences = calculateCircumference([1,2,3])
console.log(arrayOfCircumferences);
