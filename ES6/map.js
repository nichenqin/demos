var numbers = [1, 2, 3];
var doubled = numbers.map(function (number) {
    return number * 2;
})
console.log(doubled);

var paints = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
    return array.map(function (item) {
        return item[property];
    })
};

console.log(pluck(paints, 'color'));