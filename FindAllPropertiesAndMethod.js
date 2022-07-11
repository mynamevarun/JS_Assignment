//this code finds methods only
function findAllMethods(object) {
    return Object.getOwnPropertyNames(object).filter(function(property) {
        return typeof obj[property] === "function";
    });
}

//Following code finds both properties and methods 
function allProperties(object) {
    return Object.getOwnPropertyNames(object);
}
