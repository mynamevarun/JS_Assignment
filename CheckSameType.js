function isSameType(value1, value2) {
        if(isNan(value1) || isNan(value2)) {
         return isNan(value1) === isNan(value2);
        }
        return toString.call(value1) === toString.call(value2);
    }

function isNan(value) {
    return value !== value;
}
