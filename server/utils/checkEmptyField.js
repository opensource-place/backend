const checkEmptyField = (...args) => {
    for (let i = 0; i < args.length; i++) {
        if (args[i] === "") return false;
    }
    return true;
}

module.exports = checkEmptyField;