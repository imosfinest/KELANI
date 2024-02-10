// Write a function that reverses a string. The input string is given as an array of characters s.
//Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
function reverseString(g) {
  // return g.reverse();
  let rev = [];
  for (let i = g.length - 1; i >= 0; i--) {
    rev.push(g[i]);
  }
  return rev;
}
let input = ["h", "e", "l", "l", "o"];
console.log(reverseString(input));

// rot =[]
// for(i =0; i< n ;i++){
//    let r =[]
//   for(j=n-1; j>=0;j--){
//    r.push(a[j][i])
//   }
//   rot.push(r)
// }
// ret rot

function rotate(n) {
  let rot = [];
  for (let i = 0; i < n.length; i++) {
    let r = [];
    for (let j = n.length - 1; /*j>-1;*/ j >= 0; j--) {
      r.push(n[j][i]);
    }
    rot.push(r);
  }
  return rot;
}
let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(rotate(matrix));
