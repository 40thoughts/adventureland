// Original
function mssinceOrig(a, b) {
    if (!b) {
        b = new Date()
    }
    return b.getTime() - a.getTime()
}
function ssinceOrig(a, b) {
    return mssinceOrig(a, b) / 1000
}
function msinceOrig(a, b) {
    return mssinceOrig(a, b) / 60000
}
function hsinceOrig(a, b) {
    return mssinceOrig(a, b) / 3600000
}



// Revision
function mssince(a, b = new Date()) {   // Set default value to not have to care about the condition
    return b.getTime() - a.getTime();
}
function ssince(a, b) {
    return mssince(a, b) / 1000;
}
function msince(a, b) {
    return mssince(a, b) / 60000;
}
function hsince(a, b) {
    return mssince(a, b) / 3600000;
}


// DEBUG

let date = new Date();
let date1 = new Date(date.getTime() + 60000);
console.log(date);
console.log(date1);
console.log('Original : ' + ssinceOrig(date1));
console.log('Revised  : ' + ssince(date1));
