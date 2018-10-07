module.exports = function solveSudoku(matrix) {
	// your solution
	var p = [];
	var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (var r = 0; r < 9; r++) {
		for (var c = 0; c < 9; c++) {
		if ( matrix[r][c] == 0 ) {
			var r1 = Math.floor(r / 3) * 3;
			var c1 = Math.floor(c / 3) * 3;
			for (var i = 0; i < 9; i++) {
				p.push(matrix[r1 + i % 3][c1 + Math.floor(i / 3)]);
				p.push(matrix[r][i]);
				p.push(matrix[i][c]);
				}
			p.filter(number => number > 0);
			var z = num.filter(number => p.indexOf(number) < 0);
			for (var i = 0; i < z.length; i++) {
				matrix[r][c] = z[i];
				if (solveSudoku(matrix)) {
					return solveSudoku(matrix);
					}
				}
			matrix[r][c] = 0;
			return !matrix;
			}
		}
	}
return matrix;
}