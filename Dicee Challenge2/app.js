'use strict'//문법잡아줌
//테스트용 alert('hi')

// 이미지선언
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');

//img1,img2에 주사위 3번이 나오게한다.
// img1.setAttribute('src', 'images/dice3.png')
// img2.setAttribute('src', 'images/dice3.png')


//랜덤 숫자를 1-6으로 만들어서 randomNumber1에 입력
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomNumber3 = Math.floor(Math.random() * 6) + 1;
//랜덤 숫자의 주사위 사진을 img1에 나오게 한다.
img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
img3.setAttribute('src', 'images/dice' + randomNumber3 + '.png');

//랜덤숫자를 비교하여서 player1 또는 plsyer2 중 누가 이겼는지 나오게 결과창 출력하기
//비겼을 경우엔 drow!를 보여준다.
const h1 = document.querySelector('h1');

if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
    h1.textContent = '1 player가 이겼습니다.'
} else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
    h1.textContent = '2 player가 이겼습니다.'
} else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
    h1.textContent = '3 player가 이겼습니다.'
} else {
    h1.textContent = '비겼습니다.'
};
