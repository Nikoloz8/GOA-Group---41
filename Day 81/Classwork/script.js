// ლექციაზე ბატონ დავითს აერია საკლასო დავალების პირობა, შემდეგ კი თვითონ ახსნა რაც უნდა გაგვეკეთებინა Classwork ში შეცვლის გარეშე, შესაბამისად ქვემოთ ვწერ პირობას ჩემი სიტყვებით: 

// დაწერეთ პროგრამა, რომელიც გამოიტანს ალეტრში შეყვანილ ტექსტის სიგრძეს და ასევე გვეტყვის თუ რამდენის წერის უფლება გვაქვს (ლიმიტი 140). 


let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis adipisci natus recusandae fuga deserunt neque tenetur excepturi perspiciatis provident. Asperiores veritatis odit unde provident? Sit harum repellendus cum laudantium."

let lengthtext = text.length 
alert("you have written " + lengthtext + " character and you have remaining " + (140 - text.length))
