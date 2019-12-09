//bubble sort - It is a method of sorting where you do a loop with in a loop and swap the elements:
//The Big O complexity for this is - O(n)2 where n is the size of the array.

function bubble(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        var c = array[j];
        array[j] = array[j + 1];
        array[j + 1] = c;
      }
    }
  }

  console.log(array);
}

bubble([2, 1, 5, 7, 9]);
bubble([11, 5, 2, 1, 9, 3]);
