let arr =[];
function Demo(){
	let n = 3
	for(let i =0;i<n;i++){
		arr[i]= i+1;
	}
	HoanVi(arr,n)
}
let count =0;
function HoanVi(mang,n){
	if(n===1){
		let str='';
		count ++;
		str = count.toString()+ '.';
		for(let i=0;i<mang.length;i++){
			str+=mang[i].toString()+'';
		}
		str+=' '
		
		console.log(str);
	}
	else{
		for(let i=n-1;i>=0;i--){
			Swap(i,n-1);
			HoanVi(mang,n-1);
			Swap(i,n-1)
		}
	}
}
function Swap(x,y){
	let temp =arr[x];
	arr[x]=arr[y];
	arr[y]=temp;
}
Demo();