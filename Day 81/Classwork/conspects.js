// prompt - იგივეა რაც input პითონში.

let name = prompt("Enter your name: ")
alert("Your name is " + name) 

// length - იგივეა რაც პითონში len, თუმცა სინტაქსი სხვაგვარია

let length = name.length 
alert("Your name has " + length + " characters")

// typeof - იგივეა რაც type ფუნქცია პითონში, თუმცა სინტაქსი აქაც სხვაგვარია

alert("Your name is " + typeof name)

// Number - იგივეა რაც int ფუნქცია პითონში, სინტაქსიც იგივე (integer - ს აქ number ჰქვია.).

let number = 5  
console.log(typeof Number(number))

// toLowerCase(), toUpperCase() - იგივე რაც lower/upper ფუნქციები პითონში (სინტაქსითაც).

let lowerCaseName = name.toLowerCase()
let upperCaseName = name.toUpperCase()

alert("Your name in lower case is: " + lowerCaseName)
alert("Your name in upper case is: " + upperCaseName)

// slice() - ეს ფუნქცია ისე მუშაობს არგუმენტებთან, როგორც პითონში sliceing - ი.

let firstThreeCharacters = name.slice(0, 3)
alert("Your first three characters are: " + firstThreeCharacters)