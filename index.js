// window.alert("Hello World");
// alert("Hello DOM");

var name = "alice";
console.log(name);
console.log(window.name);

/**
 * A function that adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
    return a + b;
}

console.log(add(1,2));
console.log(window.add(1, 2));
