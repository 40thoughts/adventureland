// Original
function random_binaryOrig() {
    var b = "";
    for (var a = 0; a < 2 + parseInt(Math.random() * 12); a++) {
        if (Math.random() < 0.5) {
            b += "0"
        } else {
            b += "1"
        }
    }
    return b
}
function random_binariesOrig() {
    var b = "";
    for (var a = 0; a < 7 + parseInt(Math.random() * 23); a++) {
        b += random_binaryOrig() + " "
    }
    return b
}

// Revision
function random_binary() {
    let b = "";
    for (let a = 0; a < 2 + ((Math.random() * 12) | 0); a++) {
        b += Math.random() < 0.5 ? "0" : "1";
    }
    return b;
}
function random_binaries() {
    let b = "";
    for (let a = 0; a < 7 + ((Math.random() * 23) | 0); a++) {    // A binary 'OR' is quicker than parseInt to get an integer
        b += random_binary() + " ";
    }
    return b;
}

// Revision 2 (More accurate : every data chunk begin with '1' like usually, this was mainly for fun to play with binary data, still it's usable)
function random_binary2() {
    let binary = (Math.random() * 8192) | 2;
    return (binary >> (Math.random() * (Math.ceil(Math.log(binary) / Math.log(2)) - 1) | 0)).toString(2);
}
function random_binaries2() {
    let b = "";
    for (let a = 0; a < 7 + ((Math.random() * 23) | 0); a++) {
        b += random_binary2() + " ";
    }
    return b;
}


// DEBUG

console.log('Original   : ' + random_binariesOrig());
console.log('Revision 1 : ' + random_binaries());
console.log('Revision 2 : ' + random_binaries2());
