// alert(1)
'use strict'

const h3 = document.querySelector('h3');//숨어있는태그
const color1 = document.querySelector('.color1');//색을 지정가능한 입력창
const color2 = document.querySelector('.color2');//색을 지정가능한 입력창
const body = document.querySelector('body');//바디태그

//JS이벤트 함수,addEventListener(a,b)(색바꿀때마다 이벤트가 만들어지는)
//a는  click과 같은 이벤트 종류 , b는 실행 함수
color1.addEventListener('input', setGradient);


color2.addEventListener('input', setGradient);

// function 입력함수() {
//     alert('색을 바꿨네요!')
// }
function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
    h3.textContent = body.style.background + ";";

}
