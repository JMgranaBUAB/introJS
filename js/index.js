console.log("Hola Mundo desde JS");

//variables y constantes
const numberOfPi = 3.1415982;

let numberOfCar = 5; //integer
let numberOfStudents = 23; //integer
let litreOfWater = 5.2368; //float
let daysOfProject; //undefined
let booleans = true; //boolean (true/false)
let nameOfStudent1 = "Juan Perez"; //string
let direccionOfSchool = "Calle Falsa 123b, Springfield"; //string

let number = "5"; //string
let number2 = 5; //integer

let nameOfStudent = ["Ana", "Juan Luis", "JM", "Hector", "Adrian", "Xavier"]; //array
console.log("Primero : ", nameOfStudent[0]);
console.log("Segundo : ", nameOfStudent[1]);
console.log("Tercero : ", nameOfStudent[2]);

let resultOfRace = [["Ana", 1452, "España"], ["Juan Luis", 1398, "Inglaterra"], ["JM", 1420], ["Hector", 1405], ["Adrian", 1380], ["Xavier", 1410]]; //array 2 dimensiones

console.log("Primero : ", resultOfRace[0][0], "dorsal", resultOfRace[0][1], "Pais", resultOfRace[0][2]);
console.log("Segundo : ", resultOfRace[1][0], "dorsal", resultOfRace[1][1], "Pais", resultOfRace[1][2]);

//console.log(numberOfStudents, "estudiantes");
console.log(numberOfCar, "coches");
//------------------------
numberOfCar = numberOfCar + 3;
console.log(numberOfCar, "coches");
//--------------------------
numberOfCar = numberOfCar - 4;
console.log(numberOfCar, "coches");

// --------------------
console.log(litreOfWater, "litros de agua");
litreOfWater = litreOfWater * 14;
console.log(litreOfWater, "litros de agua");


/* console.log(nameOfStudent); */

console.log("Paso Siguiente");

let listNumbers = [5, 8, 12, 20, 3, 45, 7, 90, 1];

console.log(listNumbers);

console.log("el array tiene : ", listNumbers.length, "elementos");

let numberOf3FirstElements = 3;

for (let index = 0; index < listNumbers.length; index++){ 
    
    console.log (listNumbers[index]);

}


for (let index = 0; index < listNumbers.length; index++){ 
    
    
    console.log (listNumbers[index]);

}

function sumTwoNumbers(numberA, numberB){
    let resultSum = numberA + numberB;
    return resultSum;
}

function restTwoNumbers(numberA, numberB){
    let resultRest = numberA - numberB;
    return resultRest;
}

function multiplicationTwoNumbers(numberA, numberB){
    let resultMultiplication = numberA * numberB;
    return resultMultiplication;
}

function divisionTwoNumbers(numberA, numberB){

    if (numberB === 0){ 
        console.log("Error: Division por cero");
        return;
    }

    if (numberB != 0){
        resultDivision = numberA / numberB;
        return resultDivision;
    }
}

function calculator (numberA, numberB){
    result = sumTwoNumbers(numberOne, numberTwo);
    console.log("El resultado de la suma es : ", result);

    result= restTwoNumbers(numberOne, numberTwo);
    console.log("El resultado de la resta es : ", result);

    result = multiplicationTwoNumbers(numberOne, numberTwo);
    console.log("El resultado de la multiplicacion es : ", result);

    result = divisionTwoNumbers(numberOne, numberTwo);
    console.log("El resultado de la division es : ", result);
}

let numberOne = 5; 
let numberTwo = 7; 
let result = 0;

result = calculator(numberOne, numberTwo);


numberOne = 23; 
numberTwo = 41; 

result = calculator(numberOne, numberTwo);


numberOne = 54; 
numberTwo = 114;

result = calculator(numberOne, numberTwo);


numberOne = 1; 
numberTwo = 2; 

result = calculator(numberOne, numberTwo);


numberOne = 5; 
numberTwo = 0; 

result = calculator(numberOne, numberTwo);