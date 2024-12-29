// დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს ასაკის შეყვანას. თუ შემოტანილი ასაკი მეტია 5 ზე, მაშინ უნდა გამოიტანოს 'შენ ხარ ბავშვი', თუ ასაკი მეტია 12 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ თინეიჯერი/მოზარდი', თუ ასაკი მეტია 18 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ სრულწოვანი', თუ ასაკი მეტია 80 - ზე, მაშინ უნდა გამოიტანოს, 'დაბერდი ძმაო'.

// let age = Number(prompt("Please enter your age:"));

if (age > 5 && age < 12) {
    alert("You are kid!");
} else if (age >= 12 && age < 18) {
    alert("You are teenager!");
} else if (age >= 18 && age < 80) {
    alert("You are adult!");
} else if (age >= 80) {
    alert("დაბერდი ძმაო");
}

// # 1. მომხმარებელი შეიყვანს ორ რიცხვს.

//  - პირველი რიცხვი: num1
//  - მეორე რიცხვი: num2

// # 2. მომხმარებელი აირჩევს მათემატიკურ ოპერაციას:

// # - ოპერაციები:
//  - შეკრება (+)
// - გამოკლება (-)
//  - გამრავლება (*)
//  - გაყოფა (/)
// # 3. აუცილებელია შემოწმდეს:

//  - შეყვანილი მონაცემები რიცხვებია თუ არა.
//  - გაყოფის ოპერაციისთვის მეორე რიცხვი ნულზე უნდა შემოწმდეს.

//  # 4.  თუ ყველა პირობა შესრულდება, გამომსახული იქნება ოპერაციის შედეგი.

// # 5. არასწორი შეყვანის შემთხვევაში:

//  - მომხმარებელს ეცნობება შეცდომის შესახებ (მაგ., "გთხოვთ, შეიყვანოთ სწორი რიცხვი" ან "ნული ვერ იქნება გამყოფი").


let num1 = Number(prompt("Please enter the first number:"));

let operation = prompt("Please enter the operation(+, -, *, /): ");

let num2 = Number(prompt("Please enter the second number:"));

if (operation == "+") {
    alert(num1 + num2)
} else if (operation == "-") {
    alert(num1 - num2)
} else if (operation == "*") {
    alert(num1 * num2)
} else if (operation == "/") {
    if (num2 != 0) {
        alert(num1 / num2)
    } else {
        alert("Can't divide on 0")
    }
} else {
    if (num1 != Number(num1)) {
        if (num2 != Number(num2)) {
            alert("Both inputs must be numbers")
        }
    }
    alert("Invalid operation. Please enter +, -, *, or /")
}

