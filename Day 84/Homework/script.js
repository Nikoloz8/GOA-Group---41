//Codewars Solutions!

//https://www.codewars.com/kata/5625618b1fe21ab49f00001f/train/javascript

function sayHello(name) {
    return 'Hello, ' + name
  }

//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number){
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return words[number];
}

//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

function evenOrOdd(number) {
    if (number % 2 == 0){
      return "Even"
    } else{
      return "Odd"
    }
  }

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    if (90 <= score && score <= 100){
      return "A"
    } else if (80 <= score && score < 90){
      return "B"
    } else if (70 <= score && score < 80 ){
      return "C"
    } else if (60 <= score && score < 70){
      return "D"
    } else{
      return "F"
    }
  }

//https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(number) {
    if (number % 2 == 0){
      return number * 8
    } else{
      return number * 9
    }
  }

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

function makeNegative(num) {
    if (num > 0){
      return num * (-1)
    } else{
      return num
    }
  }

//https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

function boolToWord( bool ){
    if (bool == true){
      return "Yes"
    } else{
      return "No"
    }
}