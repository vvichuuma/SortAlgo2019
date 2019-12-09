//THis is the code for Insertion sort:
//you use a while loop:
//you check for the elements towards your left and swap it.
//you use for loop for incrementing
//you use while loop for decrementing.

function insertion(a) {
  for (let i = 0; i < a.length; i++) {
    var j = i;

    while (j > 0) {
      if (a[j - 1] > a[j]) {
        var c = a[j - 1];
        a[j - 1] = a[j];
        a[j] = c;
      }

      j = j - 1;
    }
  }

  console.log(a);
}

insertion([3, 1, 5, 2, 7]);
insertion([10, 5, 6, 1, 3, 2, 9, 7]);
