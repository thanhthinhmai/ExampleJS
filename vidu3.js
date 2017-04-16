/**
 * Created by dom on 4/14/17.
 */
let str = "hello";
String.prototype.reverse = function() {
    let str1 = "";
    for (let i = this.length -1 ; i >= 0; i--){
        str1 += this.charAt(i);
    }
    return str1;
};

console.log(str.reverse());

