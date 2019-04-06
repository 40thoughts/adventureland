// Original
function randomStrOrig(a) {
    var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
      , c = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var f = "";
    for (var d = 0; d < a; d++) {
        if (d == 0) {
            var b = Math.floor(Math.random() * c.length);
            f += c.substring(b, b + 1)
        } else {
            var b = Math.floor(Math.random() * e.length);
            f += e.substring(b, b + 1)
        }
    }
    return f
}

// Revision
function randomStr(a) {
    const e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",
          c = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let f = "";
    for (let d = 0; d < a; d++) {
        f += d == 0 ? c[Math.floor(Math.random() * c.length)] : e[Math.floor(Math.random() * e.length)];    // the ternary operator makes a pretty one liner
    }
    return f;
}


// DEBUG

console.log('Original : ' + randomStrOrig(10));
console.log('Revised  : ' + randomStr(10));
