//Youtube: https://www.youtube.com/watch?v=g-PGLbMth_g
//2 for loops and a if statement for swapping:
function selection(a) {
  for (let i = 0; i < a.length - 1; i++) {
    var iMin = i;

    for (let j = i + 1; j < a.length; j++) {
      if (a[iMin] > a[j]) {
        iMin = j;
      }
    }

    if (iMin != i) {
      var c = a[iMin];
      a[iMin] = a[i];
      a[i] = c;
    }
  }

  console.log(a);
}

selection([2, 7, 1, 3, 9]);
