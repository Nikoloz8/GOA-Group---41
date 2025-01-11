// Level 88:
// while loop დახმარებით, 50 - ჯერ გამოიტანეთ 'GOA'

let i = 50;

while(i > 0){
    console.log('GOA');
    i--;
}

// while ციკლის საშვალებით გამოიტანეთ რიცხვები 20-იდან 0-მდე

let j = 20;

while(j >= 0){
    console.log(j);
    j--;
}

// while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები

let k = 1;

while(k < 20){
    if(k % 2 == 0){
        console.log(k);
    }
    k++;
}

// while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი

let l = 1;

while(l <= 100){
    if(l % 5 == 0){
        console.log(l);
    }
    l++;
}

// CW5

let m = Number(prompt("Enter a number for countdown: "));

while(m >= 0){
    console.log(m);
    m--;
}