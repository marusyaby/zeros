module.exports = function zeros(expression) {
    var factorials = expression.split('*');
    var fives = 0;
    var twos = 0;

    factorials.forEach(function (factorial) {
        var nextDiff = factorial.includes('!!') ? 2 : 1;
        var number = parseInt(factorial);

        for (var i = 1; i < number; number -= nextDiff) {
            var currentNumber = number;

            while (currentNumber > 1) {
                if (currentNumber % 5 === 0) fives += 1;

                currentNumber /= 5;
            }

            currentNumber = number;

            while (currentNumber > 1) {
                if (currentNumber % 2 === 0) twos += 1;

                currentNumber /= 2;
            }
        }
    });
    return (fives < twos) ? fives : twos;
};

