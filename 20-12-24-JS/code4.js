// write a function to remove duplicate elements from an array

// method 1 using set
function removeDuplicates(arr) {
    return [...new Set(arr)]; 
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]


// method 2 using filter
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// method 3 using reduce
function removeDuplicates(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// method 4 using forEach
function removeDuplicates(arr) {
    let result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

// method 5 using for loop
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// method 6 using object
function removeDuplicates(arr) {
    let obj = {};
    arr.forEach((item) => {
        obj[item] = true;
    });
    return Object.keys(obj);
}

// method 7 using map
function removeDuplicates(arr) {
    let map = new Map();
    arr.forEach((item) => {
        map.set(item, true);
    });
    return [...map.keys()];
}

// method 8 using indexOf
function removeDuplicates(arr) {
    let result = [];
    arr.forEach((item) => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}

// method 9 using includes
function removeDuplicates(arr) {
    let result = [];
    arr.forEach((item) => {
        if (!result.includes(item)) {
            result.push(item);
        }
    });
    return result;
}

// method 10 using while loop
function removeDuplicates(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}

// method 11 using sort
function removeDuplicates(arr) {
    return arr.sort().filter((item, index) => arr.indexOf(item) === index);
}

// method 12 using for of loop
function removeDuplicates(arr) {
    let result = [];
    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    return result;
}

// method 13 using for in loop
function removeDuplicates(arr) {
    let result = [];
    for (let i in arr) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// method 14 using reduce with object
function removeDuplicates(arr) {
    return Object.keys(arr.reduce((acc, item) => {
        acc[item] = true;
        return acc;
    }, {}));
}

// method 15 using reduce with array
function removeDuplicates(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// method 16 using reduce with filter
function removeDuplicates(arr) {
    return arr.reduce((acc, item) => {
        if (acc.indexOf(item) === -1) {
            acc.push(item);
        }
        return acc;
    }, []);
}

// method 17 using reduce with includes
function removeDuplicates(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

