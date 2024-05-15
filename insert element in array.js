// add 45 at 2nd index in the array [element]
// let element = [ 2 , 77 , 89 , 90 , 3 , 33 , 45 , 56 , 42 , 90] ;
// let newEl = 45 ;
// let position = 2 ; 
// console.log( element)

// for (let i = element.length-1 ; i>=0 ; i-- ){
//     if (i>=position){
//         element[i+1] = element[i];
//         if (i==position){
//             element[i]= newEl
//         }
//     } 
// }
// console.log( element)


// add value by input and button in the array 
let element = [ 2 , 77 , 89 , 90 , 3 , 33 , 45 , 56 , 42 , 90] ;
function insertEl() {
    let newEl = document.querySelector("#newValue").value ;
    let position = document.querySelector("#position").value ; 
    console.log( element)
    
    for (let i = element.length-1 ; i>=0 ; i-- )
    {
        if (i>=position){
            element[i+1] = element[i];
            if (i==position){
                element[i]= newEl
            }
        } 
    }
    document.write(element)
    // console.log(element)
}


// let element = [ 2 , 77 , 89 , 90 , 3 , 33 , 45 , 56 , 42 , 90] ;
// function insertEl() {
//     let newEl = document.querySelector("#newValue").value ;
//     let position = document.querySelector("#position").value ; 
//     if (position<element.length && typeof parseInt(el)=="number"){
    
//     for (let i = element.length-1 ; i>=0 ; i-- )
//     {
//         if (i>=position){
//             element[i+1] = element[i];
//             if (i==position){
//                 element[i]= newEl
//             }
//         } 
//     }
//     document.write(element)
//     // console.log(element)
// }else {
//     document.write(`Enter a valid number from 0 to 15`)
// }
// }
 
