
function thaphanoi(n,a,b,c){
	
	if(n === 1)
		chuyen(1,a,c);
	else{
		thaphanoi(n-1,a,c,b);
		chuyen(n,a,c);
		thaphanoi(n-1,b,c,a);
	}
	return;
}
function chuyen(n,a,c){
		
		console.log('Chuyen dia thu '+ n.toString()+' ' + 'tu coc' +' '+ a +' '+ 'sang' +' '+ c);
		return;
}
thaphanoi(3,'A','B','C');
