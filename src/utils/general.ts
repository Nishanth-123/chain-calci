export const computeExpression = (expression: string, value: number): number => {
    console.log("12345 ", expression, replaceX(expression, value), eval(replaceX(expression, value)))
    return eval(replaceX(expression, value));
}

function replaceX(expr: string, value: number) {
    // Remove all spaces
    // expr = expr.replace(/\s+/g, '');
    
    // Create array of operators to check against
    const operators = ['+', '-', '*', '/', '^'];
    
    let result = '';
    for (let i = 0; i < expr.length; i++) {
        debugger
        if (expr[i] === 'x') {
            // Check if x is the first character or if previous character is not an operator
            if (i !== 0 && !operators.includes(expr[i - 1])) {
                result += '*' + value;
            } else {
                result += value;
            }
        } else if (expr[i] === '^') {
            result += '**';
        }else {
            result += expr[i];
        }
    }
    
    return result;
}