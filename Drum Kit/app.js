// alert(1)
'use strict'

//1.첫번째 버튼을 클릭하면 alert 메세지 '클릭됨!'을 화면에 출력(addEventListen사용)
//const btn1 = document.querySelector('button');
//btn1.addEventListener('click', btn1Clicked);//콜백함수는 매개변수로 함수가 입력될 때



//2.모든 클래스 drum이 있는 버튼들을 클릭하면 '클릭됨!'을 화면에 출력(반복문사용)
const btns = document.querySelectorAll('.drum');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', btn1Clicked);
};

function btn1Clicked() {
    console.log(this);//현재 클릭한 객체

    //눌렀을 때 색바꾸기
    //this.style.color = 'white';

    // 오디오
    // const audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    // 키보드를 눌렀을 때 텍스트 나오게
    drumSound(this.textContent)
};

//3.키보드를 눌렀을 때 이벤트 만들기
document.addEventListener('keydown', function (event) {
    console.log(event.key);//이벤트 객체(자동생성)

    // 클릭 시 다른 소리가 나오게 하기
    // 중복제거
    drumSound(event.key);
})

function drumSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
    }

}
