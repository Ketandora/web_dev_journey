// // let one= document.querySelector(".button1");
// // let two= document.querySelector(".button2");
// // let three= document.querySelector(".button3");
// // let four= document.querySelector(".button4");
// // let five= document.querySelector(".button5");
// // let six= document.querySelector(".button6");
// // let seven= document.querySelector(".button7");
// // let eight= document.querySelector(".button8");
// // let nine= document.querySelector(".button9");
// let numbers = document.querySelectorAll(".button0, .decimal,.buttonminus, .buttonresult, .buttondiv, .buttonmul, .buttonplus ,.button1,.button2, .button3 , .button4 , .button5 ,.button6 ,.button7, .button8 , .button9");

// let clear = document.querySelector(".buttonclear");
// let add = document.querySelector(".buttonplus");
// let mul = document.querySelector(".buttonmul");
// let div = document.querySelector(".buttondiv");
// let printt = document.querySelector(".buttonresult");
// let minus = document.querySelector(".buttonminus");
// let modulus = document.querySelector(".buttonmod");
// let display = document.querySelector(".result");
// let make_it_print = document.querySelector(".specialbutton");
// let arr =[];

// numbers.forEach(button =>{
//     button.addEventListener("click" , () => {
//         if(button.innerText === '+' )
//             addit(arr);
//         else if(button.innerText === '-')
//             subit(arr);
//         else if(button.innerText === 'X')
//             mulit(arr);
//         else if(button.innerText === '/')
//             divit(arr);
//         else if(button.innerText === '%')
//             buttonmod(arr);
//         else
//         {
//             arr.push(button.innerText);
//         }
//     });
// });

// clear.addEventListener("click",() => {
//    display.innerText = 0; 
//    while(arr.length<0)
//         arr.pop();
// });
// function addit(arr){
//     let s=0;
//     for(i=0;i<arr.length;i++){
//         s+= Number(arr[i]);
//     }
//     while(arr.length > 0){
//         arr.pop();
//     }
//     display.innerText = s;
// }
// function subit(arr){
//     let s=Number(arr[0]);
//     for(i=1;i<arr.length;i++){
//         s-= Number(arr[i]);
//     }
//     while(arr.length > 0){
//         arr.pop();
//     }
//     display.innerText = s;
// }
// function divit(arr){
//     let s=Number(arr[1]);
//     for(i=1;i<arr.length;i++){
//         s/= Number(arr[i]);
//     }
//     while(arr.length > 0){
//         arr.pop();
//     }
//     display.innerText = s;
// }
// function buttonmod(arr){
//     let s=Number(arr[1]);
//     for(i=1;i<arr.length;i++){
//         s%= Number(arr[i]);
//     }
//     while(arr.length > 0){
//         arr.pop();
//     }
//     display.innerText = s;
// }
// function mulit(arr){
//     let s=Number(arr[1]);
//     for(i=1;i<arr.length;i++){
//         s*= Number(arr[i]);
//     }
//     while(arr.length > 0){
//         arr.pop();
//     }
//     display.innerText = s;
// }

let string ="";
let buttons = document.querySelectorAll(".button");
Array. from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML === '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML === 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target);
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})