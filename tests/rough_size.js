// Original
function rough_sizeOrig(d) {
    var c = [];
    var a = [d];
    var b = 0;
    while (a.length) {
        var f = a.pop();
        if (typeof f === "boolean") {
            b += 4
        } else {
            if (typeof f === "string") {
                b += f.length * 2
            } else {
                if (typeof f === "number") {
                    b += 8
                } else {
                    if (typeof f === "object" && c.indexOf(f) === -1) {
                        c.push(f);
                        for (var e in f) {
                            a.push(f[e])
                        }
                    }
                }
            }
        }
    }
    return b
}

// Revision
function rough_size(d) {
    let c = new Array();
    let a = [d];
    let b = 0;
    while (a.length) {
        let f = a.pop();
        switch (typeof f) {                   // Much more efficient than deeply nested else/if checks, switches directly to the good case instead of checking everything
          case "boolean":
              b += 4;
              break;
          case "string":
              b += f.length * 2;
              break;
          case "number":
              b += 8;
              break;
          case "object":
              if (c.indexOf(f) === -1) {      // TODO : Can't figure out what this condition is meant for since it will always be true from what I understand
                c.push(f);
                for (let e in f) {
                    a.push(f[e]);
                }
              }
              break;
        }
    }
    return b;
}


// DEBUG

let data = {test: 12};
console.log('\nData     : ' + JSON.stringify(data));
console.log('Original : ' + rough_sizeOrig(data));
console.log('Revised  : ' + rough_size(data));

data = 3;
console.log('\nData     : ' + JSON.stringify(data));
console.log('Original : ' + rough_sizeOrig(data));
console.log('Revised  : ' + rough_size(data));

data = [{test: 12}, {test: 12, test2: 12}, {test: 42, test2: 12}, {test: 36}, {name: "qwerty"}, 32, "qwe", "qwe"];
console.log('\nData     : ' + JSON.stringify(data));
console.log('Original : ' + rough_sizeOrig(data));
console.log('Revised  : ' + rough_size(data));

data = [[{test: 42}, {test: 12}], [{test: 42}, {test: 'YOLO'}]];
console.log('\nData     : ' + JSON.stringify(data));
console.log('Original : ' + rough_sizeOrig(data));
console.log('Revised  : ' + rough_size(data));
