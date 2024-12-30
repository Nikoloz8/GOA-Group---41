
// რიცხვის შემოწმება
// მომხმარებელი შეჰყავს ერთი რიცხვი და უნდა გამოიტანოს ინფორმაცია, არის ეს რიცხვი ლუწი თუ კენტი.

let number = Number(prompt("Enter a number: "))

if (number % 2 === 0) {
    alert("The number is even")
} else{
    alert("The number is odd")
}

// ტემპერატურის სტანდარტის შემოწმება
// მომხმარებელი შეჰყავს ტემპერატურა ცელსიუსში და უნდა განსაზღვროს, თუ როგორი ტემპერატურაა, ცივი, ზომიერი თუ ცხელი.

let temperature = Number(prompt("Enter the temperature in Celsius: "))

if (temperature > 40) {
    alert("Temperature is hot!")
} else if ( temperature > 10 && temperature < 40) {
    alert("Temperature is normal!")
} else if(temperature < 10) {
    alert("Temperature is cold!")
}

// სკოლის შეფასების სისტემა
// მომხმარებელი შეჰყავს ქულა (0-100) და უნდა განსაზღვროს, რა შეფასება ეკუთვნის მას შემდეგი პირობის მიხედვით:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 0 - 59: F

let grade = Number(prompt("Enter your grade: "))

if (grade >= 90 && grade <= 100) {
    alert("Your grade is A")
} else if (grade >= 100 && grade <= 89) {
    alert("Your grade is B")
} else if (grade >= 70 && grade <= 79) {
    alert("Your grade is C")
} else if (grade >= 60 && grade <= 69) {
    alert("Your grade is D")
} else if (grade >= 0 && grade <= 59) {
    alert("Your grade is F")
} else {
    alert("Invalid grade!")
}