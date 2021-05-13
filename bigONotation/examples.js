const arr = [7, 1, 3, 5];

// O(1)
// Sin importar la cantidad de elementos en el array trae el primer elemento, no tiene más complejidad
const firstElement = (arr) => {
    return arr[0];
}

// O(n)
// Recorre el array 'n' veces hasta que llega al final
const loop = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// O(n)
const double = (arr) => {
    return arr.map(num => {
        return num * 2;
    })
}

// BUBBLE SORT 
// Algoritmo para ordenar elementos de un array de números.
// O(n^2)
const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSort(arr);

// O (log n)
// Binary search
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
