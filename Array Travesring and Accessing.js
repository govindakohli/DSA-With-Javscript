// let array_data = [10 , 20 , 30 , 40 , 44 , 33 , 88 , 90 , 45 , 2 , 5 , 34 , 56 , 23 , 80]

// for ( let i = 0 ;i<array_data.length ; i++){
//     console.log(`Array ${i} and is the data ${i}  ` )
// }
let array_data = [10 , 20 , 30 , 40 , 44 , 33 , 88 , 90 , 45 , 2 , 5 , 34 , 56 , 15, 23 , 80] // array traversing
for ( let i = 0 ;i<array_data.length ; i++){
    // document.write(`<br> <br> Array number ${i} value is  ${array_data[i]}`  )
}

// let x = prompt("enter your value from 0 to 14");   // array accessing
 
document.write(`data value ${array_data[x]}`) 


// accesing Element with textinput and button 

// function get_element() {
//     let el = document.querySelector("#element").value 
//      document.write(`date value is ${array_data[el]}`)
// }

function get_element() {
    let el = document.querySelector("#element").value
    if (el<array_data.length && typeof parseInt(el)=="number"){
        document.write(`Array number ${el} value is =  ${array_data[el]}`)
    }
    else {
        document.write(`Enter a valid number from 0 to 15`)
    }
}