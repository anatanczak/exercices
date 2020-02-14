//TO DO : Not working;
function bubbleSort(unsortedArray) {
  let swap;

  do {
    for (i = 0; i < unsortedArray.length; i++) {
      if (unsortedArray[i] > unsortedArray[i + 1]) {
        let temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[i + 1];
        unsortedArray[i + 1] = temp;
        swap = true;
      } else {
        swap = false;
      }
    }
  } while (swap === true)
}

// let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 9, 5, 7, 1, 0, 5];

// bubbleSort(array1);
bubbleSort(array2);

// console.log(array1);
console.log(array2);