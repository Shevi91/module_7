function getUniqueSortedArray(arr) {
    const uniqueSet = new Set(arr);
    const sortedArray = Array.from(uniqueSet).sort((a, b) => a - b);
    return sortedArray;
}

const numbers = [5, 2, 8, 5, 3, 8, 1, 9, 3];
const uniqueSortedNumbers = getUniqueSortedArray(numbers);

console.log(uniqueSortedNumbers); 