// პაროლის გამოცნობა
// შექმენით password ცვლადი და მიანიჭეთ მნიშვნელობა 'Group 41 is best'
// თქვენი დავალებაა, რომ შექმნათ ფუნქცია და გამოიცნოთ პაროლი იქამდე, სანამ პაროლი არ იქნება სწორი, მთლიანობაში გაქვთ 3 ცდა, როდესაც ცდების რაოდენობა გამოილევა, alert - ის დახმარებით გამოიტანეთ მესიჯი 'თქვენ ამოგეწურათ ცდების რაოდენობა', როდესაც პაროლი იქნება სწორი, გამოიტანეთ ' თქვენი შეყვანილი პაროლი სწორია'. 

let password = "Group 41 is best";

function checkPassword() {
    let userenteredpass = prompt("Enter password: ");
    let counter = 0;
    while (userenteredpass != password && counter < 2) {
        counter++;
        userenteredpass = prompt("Enter password: ");
        if (counter == 2) {
            alert("თქვენ ამოგეწურათ ცდების რაოდენობა");
        }

    } if (userenteredpass == password) {
        alert("თქვენი შეყვანილი პაროლი სწორია");
    }
}

checkPassword()



// N რიცხვის ფაქტორიალის გამოთვლა
// for ციკლის დახმარებით გამოითვალეთ ნებისმიერი N რიცხვის ფაქტორიალი.

let n = Number(prompt("Enter a number for get the factorial"))

for (let i = n; i > 1; i--) {
    n = n * (i - 1);
}

console.log(n)

// უკუთვლა
// შექმენით ფუნქცია, რომელიც 100 - დან 0 - ის  ჩათვლით გამოიტანს რიცხვებს, ყოველ რიცხვზე უნდა გამოიტანოს 'დარჩენილია x წამი'

function timeCountDown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`)
    }
}

timeCountDown()
