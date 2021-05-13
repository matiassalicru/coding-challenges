// O(n)
function isEven(arr) {
    const evens = [];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        }
    }
    console.log(evens);
    return evens;
}

isEven([2, 3, 4, 5, 6]);