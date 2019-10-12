module.exports = function zeros(expression) {

    var zeros = 0;
    var factorials = expression.split('*');

    factorials.forEach( function (factorial) {
        if (factorial.includes('!!') && parseInt(factorial)%2 !== 0) {
            zeros += 0;
        } else {
            var currentNumber = parseInt(factorial);
            while (currentNumber > 0) {
                currentNumber = Math.floor(currentNumber / 5);
                zeros += currentNumber;
            }
        }
    });

    return zeros;
};

