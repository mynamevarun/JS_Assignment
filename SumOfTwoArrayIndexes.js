function arrayIndexSum(array1, array2) {
  let result = [];
  let counter = 0;
  let temp = 0;

  if (array1.length === 0) {
       return "array1 is empty";
  }
  if (array2.length === 0) {
    return "array2 is empty";    
  }
  
  while (counter < array1.length && counter < array2.length) {
    result.push(array1[counter] + array2[counter]);
    counter++;
  }

 if (counter === array1.length) {
    for (temp = counter; temp < array2.length; temp++)   {
      result.push(array2[temp]);
    }
 } else {
 		for (temp = counter; temp < array1.length; temp++) {
      result.push(array1[temp]);
    }
 }

	return result;
}
