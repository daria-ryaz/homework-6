// Задание 1

function getSevenCol(arr) {
     return arr.join("")
                .split("")
                .reduce(function(amount,el) {
                    return amount + Number(el === "7")
                },0)
};

// другой способ решения

function getSevenCol(arr) {
    return arr.join("")
                .split("7")
                .length - 1
}

console.log(getSevenCol([1, 7, 4, 77, 73, 77])); //6


// Задание 2

function arrToStr(arr) {
    const res = [];

    while (arr.length) {
        res.push(arr.shift());
        res.push(arr.pop());
    }
    return res.join('');
}
console.log(arrToStr(["a","b","c","d","e","f","g"])) //agbfced
