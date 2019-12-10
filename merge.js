//This is the code for merge sort:
//This follows divide and conquer method.
//This takes in two parameters beginning of the list and end of a list.
//

function merge(left, right) {
  let resArray = [],
    leftIndex = 0,
    rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return resArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(a) {
  if (a.length <= 1) {
    return a;
  }

  //figure out the middle value:
  const middle = Math.floor(a.length / 2);

  const left = a.slice(0, middle);
  const right = a.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 4, 1, 6, 8, 5, 3, 7]));
console.log(mergeSort([2, 1, 8, 5, 3, 7]));
