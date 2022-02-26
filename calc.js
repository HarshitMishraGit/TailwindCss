let txt=document.getElementById('txt');
let sqx=document.getElementById('sqx');
let ce=document.getElementById('ce');
let del=document.getElementById('del');
let seven=document.getElementById('7');
let eight=document.getElementById('8');
let nine=document.getElementById('9');
let div=document.getElementById('div');
let four=document.getElementById('4');
let five=document.getElementById('5');
let six=document.getElementById('6');
let sub=document.getElementById('sub');
let one=document.getElementById('1');
let two=document.getElementById('2');
let three=document.getElementById('3');
let add=document.getElementById('add');
let sqrt=document.getElementById('sqrt');
let zero=document.getElementById('0');
let dec=document.getElementById('dec');
let eq=document.getElementById('eq');



// // let i=0;
// var num1= new Array();
// var num2= new Array();

// clickMe=(clicked_id)=>{
//         if(clicked_id=="eq"){
//             t1 = fxn1();
//             t2 = fxn2();
//             outputFunc(t1, t2);
//             // num1=[];
//             // i=-1;
//             // console.log(eq);
//         }

// value=clicked_id; //add
// //  console.log(value);
// //  fxn(value);
// if(clicked_id!="eq"&&value!="add"){

// num1[i]=value;

// }
// i++;
// let count=0;

// // console.log(num1);
// if(value!="add"&&count!=1){
// if(value!="eq"){
// num1[i]=value;
//  i++;
    

// let str=num1.join('');
// // console.log(str);
// let num=Number(str);
// // console.log(num);
// fxn1(num);
// }

// }
// if(value=="add"){
// count=1;
// }
// if(count==1){
// if(value!="eq"){
//     num2[i]=value;
//  i++;
    

// let str=num1.join('');
// // console.log(str);
// let num=Number(str);
// // console.log(num);
// fxn2(num);
// }
// }



// // if(value=="add"){


// //         fxn1(num)
// //         output(value)
// //         console.log(value);

// //         // counter=1
// //         num1=[];
// //         i=0;
    

// //         // i=0 par empty aane lagta hai bcz of num1=[];

// //         // console.log(num1);

// // }
// // else {
// //     fxn2(num)

// // }
// // *********************************
// // fxn1(2)
// // fxn2(3)

// // output()


// // output("add")






// }

// fxn1=(num1)=>{
// ll1=num1;
// console.log("This is fxn1==>"+ll1);
// return 2;
// }
// fxn2=(num2)=>{
// ll2=num2;
// console.log("This is fxn2==>"+ll2);
// return 3;
// }

// // output=()=>{
// //     num1=fxn1();
// //     console.log("This is fxn1 in output==>"+num1);
// //     num2=fxn2();
// //     console.log("This is fxn2 in output==>"+num2);
// //     // num2=fxn2();
// //    console.log(num1+num2);
// // }

// outputFunc=(fxn1, fxn2)=>{
//     console.log(fxn1+fxn2);
// }



// *********  Fresh JavaScript  *************

// declaration of arrays num1 and num2
clickMe=(clicked_id)=>{
var num1= new Array();
    var num2 = new Array();
    let value = clicked_id;


// when clicked then, storing in num1
i = 0;
if (clicked_id != "eq" && value != "add") {
    num1[i] = value;
    i++;
}
// converting num1 string to  integer and storing in num_A

let str1=num1.join('');
let num_A=Number(str1);

// now i need to switch to num2
    j = 0;
    let value2 = 0;
if (value == "add") {
    // switch the value variable
    value2 = 1;
}
if (value2 == 1 && value!= "eq") {
    num2[j] = value;
    j++;
}

// converting num2 string -> int and storing in num_B

let str2=num2.join('');
let num_B=Number(str2);

    
    console.log(num_A + num_B)

}

class Calculator
{
    public;

    num1;
    num2;
    operation_Calc;

    setValue=(numA, numB)=>{
        num1 = numA;
        num2 = numB;
        this.getOperator();
        this.getCalculation();
    }

    getOperator = (opt) => {
        this.operation_Calc = opt;
        return this.operation_Calc;
    }

    

};