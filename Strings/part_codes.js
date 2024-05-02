"use strict";


//namevariables
let productCode0 = "ACME:123-L";
let productCode1 = "DI:12345-M";
let productCode2 = "ACE:1-12";


function getSupplier(code){
    return code.substring(0,code.indexOf(":"));
    }


function getProductNumber(code) {
    return code.substring(code.indexOf(":") + 1, code.indexOf("-"));
}


function getSize(code) {
    return code.substring(code.indexOf("-") + 1)
}



function outputPartInfo(code) {
    let supplier = getSupplier(code);
    let productNumber = getProductNumber(code);
    let size = getSize(code);
    let sizeExpanded;

    
    if (isNaN(Number(size))) {
        if (size.toUpperCase() == "L") {
            sizeExpanded = "large (L)";
        }
        if (size.toUpperCase() == "M") {
            sizeExpanded = "medium (M)";
        }
        if (size.toUpperCase() == "S") {
            sizeExpanded = "small (S)";
        }
    } else {
        sizeExpanded = `size ${size}`;
    }

    return `The ${sizeExpanded} part ${productNumber} is supplied by ${supplier}`;
}


console.log(outputPartInfo(productCode0));