// alert(1)
'use strict'


// 버튼과 input 객체를 상수
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// 버튼을 클릭하면  search에  active 클래스를 토글
btn.addEventListener('click', function () {
    search.classList.toggle('active');
    input.focus();//입력착 커서가 깜빡거림
});
