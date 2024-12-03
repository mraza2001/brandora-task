
// let arr = [1,3,4,5,6]

// let b = arr.find(item=>item===3)
// console.log(b)















alert(`rti`)


let a=7;
let b="";
let result;
let table;
let check;
let bool=false;
let count=0;

for(let i=1;i<=10;i++){
 table=a*i;

for(let start=2; start<=a-1; start++){
  
    check=table/start;

    if(Number.isInteger(check))
        {
      b="";
      bool=true;
        }else{
            if(bool!==true){
            b="prime";
        }else{b=""}
        }



}
if(b=='prime'){
    count++;
}
console.log(table,b);


}
console.log(count);







  
// let check;
// for(let a=1;a<=50;a++){

//     for(let b=2;b<=a-1;b++){
//         check=a/b;
//         if(Number.isInteger(check)==true){
//            let bool=false;
          
//         }else{
//             bool=true;
//         }
//     if(bool==true){
//         console.log(a)
//     }
//     }
// }