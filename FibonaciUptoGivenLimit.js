function getFibonaciNumbersUptoGivenLimit(limit) {
    let fibonaciNumbers = [];
    fibonaciNumbers[0] = 0;
    fibonaciNumbers[1] = 1;

    for (let i = 2; i < limit; i++) {
        fibonaciNumbers[i] = fibonaciNumbers[i-1] + fibonaciNumbers[i-2];
    }

    return fibonaciNumbers;
}
