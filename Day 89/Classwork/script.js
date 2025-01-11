// Codewars Solutions

// https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript
function checkAlive (health) {
    if (health > 0) {
      return true
    } else {
      return false
    }
  }

print(checkAlive(5)) 

//https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
    let result = 1; 
    for (let i = 0; i < x.length; i++) {
      result = result * x[i]; 
    }
    return result;
  }

//   https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x) {
    let binary = "";
    for (let i = 0; i < x.length; i++) { 
      if (Number(x[i]) < 5) {
        binary += "0"; 
      } else {
        binary += "1"; 
      }
    }
    return binary;
  }