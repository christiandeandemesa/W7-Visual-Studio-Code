function quickSort(arr, left = 0, right = arr.length - 1){
    if (left < right){
        const index = partition(arr, left, right);
        quickSort(arr, left, index);
        quickSort(arr, index + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = Math.floor(Math.random() * arr.length);
    while (arr[left] < pivot) {
        left++;
    }
    while (arr[right] > pivot) {
        right--;
    }
    if (left >= right) {
        return right;
    }
    swap(arr, left, right);
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const myArr = [3, 9, 1, 4, 8, 5, 0, 6, 2, 7];
console.log(quickSort(myArr));