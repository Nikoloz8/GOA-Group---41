// Level 86:
// პატარა კალკულატორი
// განსაზღვრეთ ფუნქცია სახელწოდებით simple_calculator, რომელიც იღებს სამ არგუმენტს:
// num1: პირველი რიცხვი (მთლიანი ან float).
// num2: მეორე რიცხვი (მთლიანი ან float).
// ოპერაცია: სტრიქონი, რომელიც განსაზღვრავს შესასრულებლად ოპერაციას. ის შეიძლება იყოს „დამატება“, „გამოკლება“, „გამრავლება“ ან „გაყოფა“.
// ფუნქციის შიგნით,
// გამოიყენეთ if და elif განცხადებები, რათა დაადგინოთ რომელი ოპერაცია უნდა შეასრულოთ ოპერაციის არგუმენტის მნიშვნელობიდან გამომდინარე.
// ფუნქციამ უნდა დააბრუნოს ოპერაციის შედეგი.
// თუ ოპერაცია არის „გაყოფა“ და num2 არის 0, ფუნქციამ უნდა დააბრუნოს „შეცდომა: ნულზე გაყოფა შეუძლებელია“.
// ჩაწერეთ კოდი, რომ გამოიძახოთ ფუნქცია სხვადასხვა ოპერაციებით და დაბეჭდოთ შედეგები. 

function calculator(num1, operator, num2) {
    if (operator == "+") {
        return num1 + num2
    } else if (operator == "-") {
        return num1 - num2
    } else if (operator == "*") {
        return num1 * num2
    } else if (operator == "/") {
        if (num2 != 0) {
            return num1 / num2
        } else {
            return "Can't divide on 0"
        }
    } else {
        if (num1 != Number(num1)) {
            if (num2 != Number(num2)) {
                return "Both inputs must be numbers"
            }
        }
        return "Invalid operation. Please enter +, -, *, or /"
    }
}

console.log(calculator(5, "*", 3)); 



// შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა რიცხვი ლუწი, თუ ლუწია, მაშინ გამოიტანოს 'ეს რიცხვი არის ლუწი', სხვა შემთხვევაში გამოიტანოს 'ეს რიცხვი არის კენტი'

function oddEven(a) {
    if (a % 2 == 0) {
        return "This number is even"
    } else {
        return "This number is odd"
    }
}

console.log(oddEven(2))

// შექმენით ფუნქცია, რომელიც გამოიტანს რიცხვის კვადრატს.

function square(a) {
    return a * a
}

console.log(square(5))

// შექმენით ფუნქცია, რომელიც შეამოწმებს რიცხვს არის თუ არა დადებითი, უარყოფითი ან ნულის ტოლი.

function positiveNegativeZero(a) {
    if (a > 0){
        return "This number is positive"
    } else if (a == 0){
        return "This number is zero"
    } else{
        return "This number is negative"
    }
}

console.log(positiveNegativeZero(0))