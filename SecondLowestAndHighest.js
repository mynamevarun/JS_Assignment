function findSecondLargestAndSmallestNumber(numbers) {
	let secondMaximum = 0, firstMaximum = 0, firstLowest = Infinity, secondLowest = Infinity;
	for(let i = 0; i < numbers.length; i++) {
		// find second maximum number
		if(numbers[i] > firstMaximum){
			secondMaximum = firstMaximum;
			firstMaximum = numbers[i]
		} else if(numbers[i] > secondMaximum){
			secondMaximum = numbers[i];
		}
		
		// find second lowest number
		if (numbers[i] < firstLowest){
			secondLowest = firstLowest;
			firstLowest = numbers[i];
		} else if(numbers[i] < secondLowest){
			secondLowest = numbers[i];
		}
	}
	
	return {secondMaximum, secondLowest};
}
