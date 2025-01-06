// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/javascript

function switchItUp(number){
    switch(number){
        case 0:
        return "Zero"
        case 1: 
        return "One"
        case 2: 
        return "Two"
        case 3: 
        return "Three"
        case 4: 
        return "Four"
        case 5: 
        return "Five"
        case 6: 
        return "Six"
        case 7: 
        return "Seven"
        case 8:
        return "Eight"
        case 9:
        return "Nine"
    }
  }



// CW 2

let coffe = Number(prompt("Enter Number: "))

switch(coffe){
    case 1:
        console.log("Americano");
        break
    case 2:
        console.log("Espresso");
        break
    case 3:{
        console.log("Cappuccino");
        break
    }
    default:
        console.log("Unknown");
}