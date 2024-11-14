var age = 0;

// if (age > 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// && -> AND operator
// || -> OR operator

/*
    true && true = true
    true && false = false
    true || true = true
    true || false = true
*/

//      <    >   <=   >=  == ===



if (age === 0) {

    console.log("new born");
    // console.log(test);

    let test = "test code";
}
else if (age < 18) {
    console.log("Minor");
} else if (age >= 18 && age < 24) {
    console.log("Young");
} else if (age > 24 && age < 30) {
    console.log("Adult");
} else {
    console.log("Old");
}


console.log(test);

//if -> else
//if -> esle if -> .... else if -> else