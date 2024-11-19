

//clousers in java script

// function print () {
//     let data = 10;
//     // return data;
//     return () => {
//         console.log(data);
//     };
// }

// //as reference of the functional scope variable is used in the internal function, because of that functional variable is not destroyed

// let value = print();
// let value2 = print();

// value();
// value();
// value();
// value();




function person(name, age) {
    return () => {
        console.log(name, age);
    }
}

let p = person("code craft", 2);

p();




