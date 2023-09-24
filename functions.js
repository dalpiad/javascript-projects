function makeLine(length) {
    let line = '';
    for (let i = 0; i < length; i++) {
        line = line+'#';
    }
    return line;
}

//console.log(makeLine(7));

function makeSquare(length) {
    let square = '';
    for (let i = 0; i < length-1; i++) {
        square += `${makeLine(length)}\n`;
    }
    square += makeLine(length);
    return square;
}

//console.log(makeSquare(6));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle.slice(0, -1);
}

//console.log(makeRectangle(5, 5));

function makeSquare(length) {
    let square = makeRectangle(length, length)
    
    return square;
}

//console.log(makeSquare(5));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i) + '\n';
    }
    return stairs.slice(0, -1);
}

//console.log(makeDownwardStairs(7))

function makeSpaceLine(numSpaces, numChars) {
    let lineSpaces = '';
    let lineChars = '';
    for (let i = 0; i < numSpaces; i++) {
        lineSpaces += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        lineChars += '#';
    }
    return (lineSpaces + lineChars + lineSpaces);
}

//console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height) {
    let isosceles = '';
    for (let i = 0; i < height; i++) {
        isosceles += makeSpaceLine((height - i - 1), (2 * i + 1)) + '\n';
    }
    return isosceles.slice(0, -1);
}

//console.log(makeIsoscelesTriangle(5));

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

//console.log(reverse(makeIsoscelesTriangle(5)));

function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height) + '\n' + reverse(makeIsoscelesTriangle(height));
    return diamond;
}

console.log(makeDiamond(5));

