n = 7
for (let i=0; i < n; i++) {	
  var row= "";
	for (let j = 1; j< n; j++) {
	if (i + j > n-1) {
		row += "";
	} else {
		row += "0"
		}
    for (let num = 1; num <=7; num++) {
      result = num + row;
      }
}
console.log(result);
};