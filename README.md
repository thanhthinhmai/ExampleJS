# ExmpleJS

### Demo
* Tìm tất cả các hoán vị của một mảng có N tự nhiên
   Đặt temp là biến cờ để đổi chỗ vị trí 2 phần tử trong mảng x,y.
   
``` javascript
    function Swap(x,y){
	  let temp =arr[x];
	  arr[x]=arr[y];
	  arr[y]=temp;
    }
 ```
   
``` javascript
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
			//Hoán vị phần tử cuối cùng với phần tử x,y
			Swap(i,n-1);
			//Hoán vị n -1 phần tử còn lại
			HoanVi(mang,n-1);
                         //Đổi lại vị trí ban đầu của phần tử cuối cùng và phần tử x,y hiện tại
			Swap(i,n-1)
		}
	}
}

```
### ViDu
* Kiểm tra số chẵn lẻ

### ViDu1
* Tính lãi suất trong 1 năm

### ViDu2
* Kiểm tra số nguyên tố, liệt kê các số nguyên tố

### ViDu3
Đảo chuỗi kí tự
### Draw Diamond
* Vẽ các khối bằng javascript
1. Để vẽ nửa trên của khối cần vẽ. Ta có đoạn code sau đây:

```
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
```
- Thỏa mãn điều kiện j2 == h - 1 - i ||  j2 == h -1 +i (let  j2= j%width) sẽ in * 
- Không thỏa mãn điều kiện in ra chuỗi rỗng. 
 2. Để vẽ nửa dưới .Ta có đoạn code sau đây.
 ```
for(let j = 0; j < N * H - N; j++){
				let j2 = j % width;
				if((j2 === (i -h +1)) || (j2 === width - (i-h +1))){
					str +='*';
				}else{
					str +=' ';
				}
			}
```

- Để in ra dấu '*' ở nửa dưới thì phải thoả mãn điều kiện. 
- if((j2 === (i -h +1)) || (j2 === width - (i-h +1))) 
- Nếu không thỏa mãn thì sẽ in ra chuỗi rỗng 
 
### Tháp Hà Nội
* Mô tả bài toán Tháp Hà nội
- Yêu cầu bài toán chuyển toàn bộ n đĩa từ cọc ban đầu A  sang cọc đích C, cọc trung gian là B.
  Trong mọi trường hợp chuyển đĩa phải thoả mãn điều kiện đĩa to hơn phải nằm  dưới đĩa nhỏ.
- Với n = 1:
     - Ta có thể dịch chuyển đĩa từ cọc A sang cọc C.
- Với n = 2:
     - Chuyển đĩa nhỏ từ cọc A sang cọc trung gian B.
     - Chuyển đĩa lớn từ cọc A sang cọc đích C.
     - Chuyển đĩa nhỏ từ cọc B sang cọc đích C.
- Với n > 2 :
     - Chuyển n -1 đĩa từ cọc A sang cọc trung gian B.
     - Chuyển đĩa to nhất từ cọc A sang cọc đích C.
     - Chuyển n-1 đĩa từ cọc B sang cọc đích C.
- Function thaphanoi(n,a,b,c) là một hàm đệ quy thực hiện việc chuyển đĩa thứ n từ cọc A sang cọc C.
- Sử dụng cọc trung gian B.
- Từ bài toán chuyển n đĩa .Ta sẽ biến thành bài toán chuyển n -1 đĩa vào cọc.
- Điểm dừng của thuật toán đệ quy là khi n = 1.
```
function thaphanoi(n,a,b,c){
	
	if(n === 1)
		chuyen(1,a,c);
        // Ta chuyển đĩa nhỏ từ cọc A --> C
	else{
                // Chuyển n - 1 đĩa từ cọc A sang cọc B, cốc C là cọc trung gian.
		thaphanoi(n-1,a,c,b);
                // Thực hiện chuyển n đĩa từ cọc A sang cọc C.
		chuyen(n,a,c);
                // Chuyển n -1 đĩa từ cọc B sang cọc A , cọc C là cọc trung gian.
		thaphanoi(n-1,b,c,a);
	}
	return;
}
```
- Function chuyen(n,a,c) thực hiện việc chuyển đĩa thứ n từ cọc A sang cọc C.
```
function chuyen(n,a,c){
		console.log('Chuyen dia thu '+ n.toString()+' ' + 'tu coc' +' '+ a +' '+ 'sang' +' '+ c);
		return;
}
thaphanoi(3,'A','B','C');
```
  
- Kết quả
```
Chuyen dia thu 1 tu coc A sang C
Chuyen dia thu 2 tu coc A sang B
Chuyen dia thu 1 tu coc C sang A
Chuyen dia thu 3 tu coc A sang C
Chuyen dia thu 1 tu coc B sang C
Chuyen dia thu 2 tu coc B sang A
Chuyen dia thu 1 tu coc C sang B
```
