// Original
function e_arrayOrig(a) {
    var c = [];
    for (var b = 0; b < a; b++) {
        c.push(null)
    }
    return c
}

// Revision
function e_array(a) {
    return new Array(a).fill(null);
}


// DEBUG

console.log('Original : ' + JSON.stringify(e_arrayOrig(10)));
console.log('Revised  : ' + JSON.stringify(e_array(10)));
