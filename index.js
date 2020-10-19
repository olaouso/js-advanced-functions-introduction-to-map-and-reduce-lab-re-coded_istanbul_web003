function mapToNegativize(numbers) {
    return numbers.map(number => number * -1);
}

function mapToNoChange(array) {
    return array.map(elem => elem);
}

function mapToDouble(numbers) {
    return numbers.map(number => number * 2);
}

function mapToSquare(numbers) {
    return numbers.map(number => number * number);
}

function reduceToTotal(numbers, startingNumber=0) {
    return numbers.reduce(((acc, cur) => acc + cur), startingNumber); 
}

function reduceToAllTrue(values) {
    return values.reduce((acc, cur) => {
        if (!cur || !acc) {
            return false;
        }

        return true;
    }, true);
}

function reduceToAnyTrue(values) {
    return values.reduce((acc, cur) => {
        if (!!cur || !!acc) {
            return true;
        }

        return false;
    }, false);
}