function truncateString(givenString, length, charactor) {
	if (givenString.length > length) {
		if (length <= 3) {
			return givenString.slice(0, length - 3) + charactor ? charactor : "...";
		} else {
         return givenString.slice(0, length) + charactor ? charactor : "...";
		}
	} else {
      return givenString;
	}
}
