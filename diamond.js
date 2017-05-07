function drawManyDiamond(N,H){
	if(N < 1 || H < 1 || H % 2 == 0){
		return;
	}
	let h = Math.floor(H / 2) + 1;
	let width = H - 1;

	for(let i = 0; i< H ;i++){
		let str='';
		if(i < h){
			for(let j = 0; j < N * H - N +1;j++){
				let j2 = j % width;
				if((j2 == h - 1 - i) || (j2 == h - 1 + i)){ //4 - 1 -1=2 , 4-1 -2=1,4-1-3=0,
																// 4-1+1=4,4-1+2=5,4-1+3=6
					str += '*';
				}else{
					str += ' ';
				}
			}
		}else{
			for(let j = 0; j < N * H - N; j++){
				let j2 = j % width;
				if((j2 === (i -h +1)) || (j2 === width - (i-h +1))){
					str +='*';
				}else{
					str +=' ';
				}
			}
		}
		console.log(str);
	}
}
drawManyDiamond(7,7)