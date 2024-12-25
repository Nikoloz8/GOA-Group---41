// ამოცანა:
// სთხოვე მომხმარებელს ორი რიცხვის შეყვანა (prompt()-ის გამოყენებით).
// შეადარე ეს ორი რიცხვი:
// რიცხვი 1 მეტია რიცხვი 2-ზე?
// თანაბარია ისინი?
// ყველა პასუხი console.log()-ით გამოიტანე.

let num1 = prompt("Enter number1: ")
let num2 = prompt("Enter number2: ") 

console.log("Is number1 > number2: ")
console.log(num1 > num2)
console.log("Is number1 equal to number2: ")
console.log(num1 === num2)


// ამოცანა:
// შექმენი ცვლადი, რომელშიც არის გადაცმეული სტრინგი.
// გამოიყენეთ ნასწავლი მეთოდები და გადაიყვანე დიდი და პატარა ასოებად.
// შედეგები გამოიტანე console.log()-ით.

let string = "StRiNG"  
console.log(string.toLowerCase()) 

// ამოცანა:
// შექმენით ცვლადი currentYear და მიუწერეთ ამჟამინდელი წელი (მაგ: 2024).
// მომხმარებელს შემოატანინეთ მისი ასაკი.
// გამოიანგარიშე მისი ასაკი და გამოიტანე console.log()-ის მეშვეობით. // თუ დაბადების თარიღი???

let currentYear = prompt("Enter the current yeart: ")
let age = prompt("Enter your age: ")
let birthYear = Number(currentYear) - Number(age)

console.log("Your birth year is: " + birthYear)

// ამოცანა:
// მომხმარებელს შემოატანინეთ 3 რიცხვი.
// გამოიანგარიშე ამ სამი რიცხვის ჯამი და საშუალო.
// ჯამი და საშუალო გამოიტანე როგორც console.log()-ში, ასევე alert()-ში.

let number1 = prompt("Enter number1 ")
let number2 = prompt("Enter number2 ")
let number3 = prompt("Enter number3 ")

let sum = Number(number1) + Number(number2) + Number(number3)

alert("Sum of this numbers is: " + sum)
console.log("sum of this numbers is: " + sum)

alert("Average of this numbers is: " + sum / 3) 
console.log("Average of this numbers is: " + sum / 3)

