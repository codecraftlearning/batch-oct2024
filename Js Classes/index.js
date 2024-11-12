
//variables store data -> in js -> we have once common variable -> which holds different type of data, like -> number, text, boolean .....

//var, let, const -> are the containers 
// var -> can store any type of data, but var can be spilled, value can be changed
// let -> can store any type of data, let cannot be spilled, but let is fragile, value can be changed
// const -> can store any type of data, const cannot be spilled, but const is concrete, value cannot be changed


var name = "code craft learning"; //-> name of variable is "name", type of variable is "var", data of the variable is ""code craft learning""; 
let age = 2;
const gender = "institute";


var className; // we declared a variable of type var with name 'className'
className = "10th" // we defined the variable 'className'
className = "11th";
className = "12th";

age = 3;
age = 4;
age = 5;

// gender = "male";

// console.log(gender);

var result = printText(name);
console.log(result);

//Function is block of code, which has name and requires arguments and it process the arguments and return the final value if required
function printText(text) {
    var newText = "printing: " + text;  //->  text -> "some text" ; newText -> "priting: "+"some text" => "printing: some text"
    return newText;
}


