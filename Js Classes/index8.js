

//clousers in java script

function print () {
    let data = 10;
    return () => {
        console.log("printing something with new way", data);
    }
}

let check = print();
check();