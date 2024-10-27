export const computeExpression = (expression: string, value: number): number => {
    // eslint-disable-next-line
    return eval(replaceX(expression, value));
}

function replaceX(expr: string, value: number) {
    // Remove all spaces
    // expr = expr.replace(/\s+/g, '');
    
    // Create array of operators to check against
    const operators = ['+', '-', '*', '/', '^'];
    
    let result = '';
    for (let i = 0; i < expr.length; i++) {
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


export const isValidExpression = (expr: string): boolean => {
    // Remove all spaces
    expr = expr.replace(/\s+/g, '');
    
    if (expr.length === 0) return false;
    
    // Regular expression for valid characters (only x, numbers, and specified operators)
    const validCharsRegex = /^[x0-9+\-*/^.]+$/;
    if (!validCharsRegex.test(expr)) {
        return false;
    }

    // Check for consecutive operators
    const hasConsecutiveOperators = /[+\-*/^]{2,}/.test(expr);
    if (hasConsecutiveOperators) {
        return false;
    }

    // Check for invalid start/end with operators except minus
    if (/[+*/^]$/.test(expr) || /^[+*/^]/.test(expr)) {
        return false;
    }

    // Check for invalid decimal numbers
    const hasInvalidDecimals = /\d*\.\d*\./.test(expr);
    if (hasInvalidDecimals) return false;

    return true;
}
