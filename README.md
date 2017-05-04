# ExmpleJS

### Demo
Tìm tất cả các hoán vị của một mảng có N tự nhiên
   Đặt temp là biến cờ để đổi chỗ vị trí 2 phần tử trong mảng x,y.
   
   ```
    function Swap(x,y){
	  let temp =arr[x];
	  arr[x]=arr[y];
	  arr[y]=temp;
    }
    
    ```

```
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
Kiểm tra số chẵn lẻ

### ViDu1
Tính lãi suất trong 1 năm

### ViDu2
Kiểm tra số nguyên tố, liệt kê các số nguyên tố

### ViDu3
Đảo chuỗi kí tự
