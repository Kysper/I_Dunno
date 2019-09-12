// Assign parking spaces from left to right in an N x N parking lot

//Find the row with the least cars and assign the next avaiable space in that row for Charible to assign to the drivers as they enter the lot

//Example : Space
//Row:12345
//Row:12345
//Row:12345
//Row:12345
//Row:12345

//Cars are parked from left to right in the row with the least number of spaces. There will never be a gap in the full spaces such as 1,0,0,1,0 in any row. In the envet of a tie. the first free spot is chosen.

///11100
//11110
//11000
//11100
//10000

// In this exampke the next avaiable spot is row:5 spot 2

//Input are as follows
//first line = n, which is the n x n grid

//second and thrid lines define the 2d array sizes

//all spots inputs denote if the spot is empty or full , 1 = full 0 = empty

//write a function that prints the row and psace of the next space charlie should assign to his customers and reutnrs an array with the anser array[0] = row, array[1]=space

//contraints = 1 <= n <= 100

function carParking(n, available) {
    function carParking(n, available) {
        let row = [];
        let space = []];
        for (row = [n]; row < row.length; row++) {
          for (i; i<i.length; i++) {
      
      
            if (n === avaiable) {
              console.log(space[available]);
            }
          }
        }
  }
}

carParking(20, 5);
