// Original
function to_pretty_numOrig(a) {
    if (!a) {
        return "0";
    }
    a = Math.round(a);
    var b = "";
    while (a) {
        var c = a % 1000;
        if (!c) {
            c = "000"
        } else {
            if (c < 10 && c != a) {
                c = "00" + c
            } else {
                if (c < 100 && c != a) {
                    c = "0" + c
                }
            }
        }
        if (!b) {
            b = c
        } else {
            b = c + "," + b
        }
        a = (a - a % 1000) / 1000
    }
    return "" + b
}

// Revision
function to_pretty_num(a) {
    return !a ? '0' : Math.round(a).toLocaleString('en');
}


// DEBUG

console.log('Original : ' + to_pretty_numOrig(1004200));
console.log('Original : ' + to_pretty_numOrig());

console.log('Revised  : ' + to_pretty_num(1004200));
console.log('Revised  : ' + to_pretty_num());
