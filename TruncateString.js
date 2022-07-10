function truncateString(givenString, length) {
	if (givenString.length > length) {
		if (length <= 3) {
			return givenString.slice(0, length - 3) + "...";
		} else {
         return givenString.slice(0, length) + "...";
		}
	} else {
      return givenString;
	}
}
