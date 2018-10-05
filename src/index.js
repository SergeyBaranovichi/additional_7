module.exports = function solveSudoku(matrix) {
  // your solution
var sud=matrix;
var l=0;
var cnt1=0;
while (l<81){
	var i=0, j=0, o1=0;
	while (i<9){
		j=0;
		while (j<9){
			if(sud[i][j] == 0) o1++;
			j++;
		}
		i++;
	}
	i=0;
	while (i<9){
		j=0;
		while (j<9){
			var a=1;
			while (a<=9){
				var cnt=0;
				if (cnt1 == 1) cnt--;
				//cnt1=0;
				var y1=(Math.floor(i/3))*3;
				var y2=(Math.floor(j/3))*3;
				var y3=(Math.floor(i/3))*3;
				var y4=(Math.floor(j/3))*3;
				while (y1<y3+3){
					while(y2<y4+3){
						var i1=y1, j1=y2;
						if (sud[y1][y2] == 0){
													//�������� �� ������
							var n1=0;
							while (n1<9){
								if (a==sud[y1][n1]) break;
								n1++;
								}	
									//--------------------------------------
							var n2=0;
							var q=0;	
													//�������� �� �������
							while (n2<9){
								if (a==sud[n2][y2]) break;
								n2++;
								}	
									//--------------------------------------
													//�������� � ��������
							var n3=(Math.floor(i/3))*3;
							var n4=(Math.floor(j/3))*3;	
							var n5=(Math.floor(i/3))*3;
							var n6=(Math.floor(j/3))*3;	
							while (n3<n5+3){
								while (n4<n6+3){
									if (a==sud[n3][n4]) break;
									n4++;
									q++;
									}
								n3++;
								n4=(Math.floor(j/3))*3;
								}
									//--------------------------------------
							if (n1==9 && n2==9 && q==9) {
								var z=i1, x=j1;
								//if (cnt1 == 1) cnt--;
								cnt++;
								}
							}
						y2++;
						}
					y1++;
					y2=(Math.floor(j/3))*3;
					}
				if (cnt==1) sud[z][x]=a;
				
				a++;
				}
			j=j+3;
			}
		j=0;
		i=i+3;
		}
	i=0;
	j=0;
	var o2=0;
	
	while (i<9){
		j=0;
		while (j<9){
			if(sud[i][j] == 0) o2++;
			j++;
		}
		i++;
	}
	var sud1=sud;
	var sud2=sud;
	if (o1 == o2) {
		/*i=0;
		while (i<9){
			j=0;
			while (j<9){
				if(sud1 == 0) {
					a=1;
					while (a<=9){

					}
				}
			}
		}*/


		var cnt1=1; } else var cnt1=0;
	
//------------------------------���---------------------------------------
/*i=0;
j=0;
while (i<9){
	a=1;
	while (a<=9){
		var e1=1;
		
		while (e1<=9){
			j=0;
			var p=0;
			while (j<9){
				if (sud[i][j]!=e1)	p++;
				j++;
				}
			if (p==9) {
				a=e1;
				break;
				} 
			}
		
		j=0;
		while (j<9) {
			if (sud[i][j]==0) {
				var l1=Math.floor(i/3)*3;
				var l2=Math.floor(j/3)*3;
				var l3=Math.floor(i/3)*3;
				var l4=Math.floor(j/3)*3;
				while 

			}
			j++;


			
		
		}
	}
}*/
//------------------------------���---------------------------------------
l++;
	}

return sud;
}
