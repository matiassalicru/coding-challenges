const array = [1, 2, 3, 5, 7, 12, 34, 123, 150];

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        // Find the mid index
        const mid = Math.floor((start + end) / 2);

        // Compare if the number that we're looking is in the middle.
        if (arr[mid] === num) {
            console.log('true');
            return true;
        }
        
        // If the number is on the right side of the array replace the *start* with the mid index of the array.
        else if (arr[mid] < num) {
            start = mid + 1;

        // If the number is on the left side of the array replace the *end* with the mid index of the array.
        } else {
            end = mid - 1;
        }
    }

    console.log("The number doesn't exist on the array");
    return false;
}

binarySearch(array, 34);
