/**
 * Created by dom on 4/14/17.
 */
function nguyento(n) {
    let flag =true;
    if(n < 2){
        flag =false;
    }else {
        for(let i = 2 ;i<n/2;i++){
            if(n%i==0){
                flag =false;
                // break;

            }
        }
    }
    if(flag ==true){
        console.log(n +'- la so nguyen to')
    }else {
        console.log(n + '- khong phai la so nguyen to')
    }


}
function list(){
    let dem = 0;
    for(let i = 2 ; i <=1000; i++){
        if(nguyento(i)==1){
            // console.log(i)
            // dem++;
        }
    }

}
// nguyento(1000)
list()