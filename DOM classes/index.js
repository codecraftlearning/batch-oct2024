let calculatorDisplay = document.getElementById('calculatorDisplay');

function ce() {
    calculatorDisplay.innerText = '';
}

function push(num) {
    calculatorDisplay.innerText += num;  
}

function operate(operator) {
    push(` ${operator} `);
}

function calculate() {
    calculatorDisplay.innerText = eval(calculatorDisplay.innerText);  
}

// js uses http calls to send or get data from server
/*
    API request ->  GET, POST, PUT, DELETE  -> CRUD  -> c= create, r= read, u= update, d=delete
    Rest api Call
*/


function loadData() {

    console.log("started loading the data");

    //https://echo.free.beeceptor.com/

    fetch("https://echo.free.beeceptor.com/",
        {
            method: 'GET'
        }
    ).then(printResponse);

    console.log("check1");
    

    fetch("https://echo.free.beeceptor.com/",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    ).then(printResponse);

    console.log("check2");

    fetch("https://echo.free.beeceptor.com/",
        {
            method: 'PUT',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    ).then(printResponse);

    console.log("check3");

    fetch("https://echo.free.beeceptor.com/",
        {
            method: 'DELETE',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    ).then(printResponse);

    console.log("check4");

}

function printResponse(response) {
    console.log(response);
}

// loadData();




//async => asyncronous


async function loadData2() {

    console.log("started loading the data");

    //https://echo.free.beeceptor.com/

    let response = await fetch("https://echo.free.beeceptor.com/",
        {
            method: 'GET'
        }
    )
    printResponse(response);
    console.log("check1");
    



    respone = await fetch("https://echo.free.beeceptor.com/",
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    );
    printResponse(response);
    console.log("check2");


    respone = await fetch("https://echo.free.beeceptor.com/",
        {
            method: 'PUT',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    );
    printResponse(response);
    console.log("check3");


    respone = await fetch("https://echo.free.beeceptor.com/",
        {
            method: 'DELETE',
            body: JSON.stringify(
                {
                    name: "code craft learing"
                }
            )
        }
    );
    printResponse(response);
    console.log("check4");

}


// loadData2();




function store() {

    let data = {
        name: "code craft learning"
    }

    localStorage.setItem("data1", JSON.stringify(data));
}

function getData() {
    let data = localStorage.getItem("data1");
    data = JSON.parse(data);

    console.log(data);
    
}

store();
getData();




