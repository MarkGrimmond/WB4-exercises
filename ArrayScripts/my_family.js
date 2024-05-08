"use strict";


let familyName = ["Mike", "Myers", "Jim", "Carl"];

displayFamily(familyName)

function displayFamily(nameArrays) {
    for(let i = 0; i < nameArrays.length; i++){
        console.log(`${i} ${nameArrays[i]}`)
    };
};