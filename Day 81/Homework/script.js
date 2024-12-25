// დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს ტექსტის შემოტანას, თუ ტექსტის სიგრძე მეტია 140 - ზე, მაშინ უნდა ჩამოიჭრას ის ნაწილი, საიდანაც ტექსტის სიგრძე ცდება 140 - ს, შემდეგ გამოიტანეთ ის ნაწილი, სადაც ტექსტის სიგრძე არის 140 - მდე.
 
let text = prompt("Enter text which is long than 140 character: ")
alert(text.slice(0, 140)) 

// დაწერეთ პროგრამა, სადაც მომხმარებელი შემოიტანს მის სახელს პატარა ასოებით, თქვენი დავალებაა, რომ დაწეროთ კოდი ისე, რომ შემოტანილი სახელის პირველი ასო გაადიდოთ და შემდეგ მიესალმოთ მომხმარებელს შემდეგნაირად: "Hello Name" - (name - ში უნდა ჩაჯდეს მომხმარებლის შემოტანილი სახელი).

let name = prompt("Enter your name: ")
let firstChar = name[0].toUpperCase()
alert("Your Capitalized name is: " + firstChar + name.slice(1, name.length))  

// დაწერეთ პროგრამა, რომელიც სთხოვს 2 მომხმარებელს მათი სახელის შემოტანას, შემოტანილი სახელების სიგრძე შეადარეთ ერთმანეთს, საბოლოო პასუხი გამოიტანეთ log - ში.
 
let name1 = prompt("Enter first name: ")
let name2 = prompt("Enter second name: ") 

console.log(name1.length === name2.length)


// დაწერეთ პროგრამა, რომელიც 2 მომხმარებელს შემოატანინებს 2 რიცხვს, თქვენი დავალებაა, შემოტანილ 2 რიცხვზე მოახდინოთ მათემათიკური ოპერაციები ყველა ოპერატორზე(3 მაგალითი თითო ოპერატორზე)

let num1 = prompt("Enter first number: ")
let num2 = prompt("Enter second number: ")

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 * num2)

