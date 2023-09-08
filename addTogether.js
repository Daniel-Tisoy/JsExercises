/* 
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
    let valid = args.every(e => (e && Number.isInteger(e)) ? true : false)

    if (!valid) {
        return undefined;
    } else if (args.length > 1) {
        return args.reduce((ac, cur) => ac + cur);
    }
    else {
        return (y) => {
            if (y && Number.isInteger(y)) {
                return args[0] + y
            }
        }
    }
}
addTogether(4, undefined)
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
addTogether(23, 30)
addTogether(5)(undefined)
