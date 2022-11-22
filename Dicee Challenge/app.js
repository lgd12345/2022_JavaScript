'use strict'//문법잡아줌

//테스트용 alert('hi')

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

//img1,img2에 주사위 6번이 나오게한다.
// img1.setAttribute('src', 'images/dice6.png');
// img2.setAttribute('src', 'images/dice6.png');

//랜덤 숫자를 1-6으로 만들어서 randomNumber1에 입력
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

//랜덤 숫자의 주사위 사진을 img1에 나오게 한다.
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');

img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

//랜덤숫자를 비교하여서 player1 또는 plsyer2 중 누가 이겼는지 나오게 결과창 출력하기
//비겼을 경우엔 drow!를 보여준다.

const h1 = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
    h1.textContent = '🚩player 1 wins'
} else if (randomNumber1 < randomNumber2) {
    h1.textContent = '🚩player 2 wins'
} else {
    h1.textContent = '🚩drow!'
} //else 다른문장들의 나머지

