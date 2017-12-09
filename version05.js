// i = 0                    // Initialization
// Say "hey" if i < 3       // Condition
// Increase i by 1          // Final-expression

// 0 "hey"
// 1 "hey"
// 2 "hey"
// 3

// for (initialization; condition; final-expression) {
// for (var i = 0; i < 3;  i++) {
//   console.log("hey");
// }

// i = i + 1    <= long way
// i++          <= shorcut


// i = i + 5    <= no short way to write this

var testArray = ['item 1', 'item 2', 'item 3']

for (var i = 0; i < testArray.length;  i++) {
  console.log(testArray[i]);
}
