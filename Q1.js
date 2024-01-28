function outerFunction(parameter) {
    // Variable declared within outerFunction
    const localVar = "I am a local variable";

    // Inner function that accesses both the parameter and localVar
    function innerFunction() {
        console.log(`Inner function accessing parameter: ${parameter}`);
        console.log(`Inner function accessing localVar: ${localVar}`);
    }

    // Returning the inner function
    return innerFunction;
}

// Example usage
const outerFuncResult = outerFunction("Hello, Lexical Scoping!");

// Calling the inner function, which still has access to the parameter and localVar
outerFuncResult();
