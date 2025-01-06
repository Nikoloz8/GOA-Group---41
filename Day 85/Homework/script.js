// CW2 

let hour = Number(prompt("Enter the hour (0-23): "))

if (hour >= 0 && hour < 12) {
    alert("AM")
} else{
    alert("PM")
}

//switch - დღის განმარტება
// მოამზადე კოდი, რომელიც switch განცხადების გამოყენებით განსაზღვრავს დღის სახელს კვირის დღესთან შესაბამისობაში.

// მაგალითად:

// 1 -> ორშაბათი
// 2 -> სამშაბათი
// ...
// 7 -> კვირა
// თუ რიცხვი 1-დან 7-მდე არ არის, დაბეჭდოს: "არასწორი დღე".

let dayNumber = Number(prompt("Enter the day number: ")); 

switch (dayNumber) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;
    default:
        alert("Invalid day");
}

// 4.ternary operator -  ლუწი ან კენტი რიცხვი
// მოამზადე კოდი, რომელიც მიღებული რიცხვის მიხედვით განსაზღვრავს, არის თუ არა ეს რიცხვი ლუწი თუ კენტი, და შეინახოს შედეგი შეტყობინების სახით.

// მაგალითად:
// თუ რიცხვი 5 -> "კენტი",
// თუ რიცხვი 8 -> "ლუწი".

let number = Number(prompt("Enter a number: "));

let result = (number % 2 === 0) ? "Even" : "Odd";

alert(result);


// switch - ამინდის პროგნოზი
// მოამზადე კოდი, რომელიც switch - ს გამოყენებით განსაზღვრავს ამინდის ტიპს. მომხმარებელი შეიყვანს რიცხვს, რომელიც შემდეგი ამინდების შესატყვისი უნდა იყოს:

// 1 -> მზიანი
// 2 -> წვიმიანი
// 3 -> მოღრუბლული
// 4 -> ქარიანი
// თუ რიცხვი სხვაა -> "არ არის დადგენილი".

let weatherNumber = Number(prompt("Enter the weather number: "));

switch (weatherNumber) {
    case 1:
        alert("მზიანი");
        break;
    case 2:
        alert("წვიმიანი");
        break;
    case 3:
        alert("მოგრუბლული");
        break;
    case 4:
        alert("ქარიანი");
        break;
    default:
        alert("არ არის დადგენილი");
}

// switch და ternary operator კომბინირებული გამოყენება
// მოამზადე პროგრამა, რომელიც switch -ით განსაზღვრავს თვის სახელს 1-12 შუალედში შეყვანილი რიცხვის მიხედვით და ternary operator -ს იყენებს, რათა განსაზღვროს, არის თუ არა ეს თვე წელიწადის პირველი ან მეორე ნახევარი.

// მაგალითად:
// თუ შეყვანილია 5:

// Switch -> "მაისი"
// Ternary -> "პირველი ნახევარი".

let monthNumber = Number(prompt("Enter month number: "));

let monthName = "";
switch (monthNumber) {
    case 1:
        monthName = "იანვარი";
        break;
    case 2:
        monthName = "თებერვალი";
        break;
    case 3:
        monthName = "მარტი";
        break;
    case 4:
        monthName = "აპრილი";
        break;
    case 5:
        monthName = "მაისი";
        break;
    case 6:
        monthName = "ივნისი";
        break;
    case 7:
        monthName = "ივლისი";
        break;
    case 8:
        monthName = "აგვისტო";
        break;
    case 9:
        monthName = "სექტემბერი";
        break;
    case 10:
        monthName = "ოქტომბერი";
        break;
    case 11:
        monthName = "ნოემბერი";
        break;
    case 12:
        monthName = "დეკემბერი";
        break;
    default:
        monthName = "არასწორი თვე";
}

let halfOfYear = (monthNumber <= 6) ? "პირველი ნახევარი" : "მეორე ნახევარი";
alert(monthName)
alert(halfOfYear)