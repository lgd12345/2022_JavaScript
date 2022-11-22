// alert(1)
'use strict';

const panels = document.querySelectorAll('.panel');

// for (let i = 0; i < panels.length; i++) {
//     panels[i].addEventListener('click', function () {
//         panels[i].classList.add('active');
//         // console.log('클릭했음')
//     });
// }
//같은 내용 (새로나온 반복문 forEach)
panels.forEach(function (panel) {
    // console.log(panel);
    panel.addEventListener('click', function () {
        // 문제점: 다른 패널들의 active클래스 제거부터 하고 다시 액티브 되어야함

        //여기서 함수 불러오기
        removeActiveClasses();

        //눌렀을 때 액티브 나오기
        panel.classList.add('active');

    });
});

//문제점 해결하는 함수 만들고
function removeActiveClasses() {
    panels.forEach(function (panel) {
        panel.classList.remove('active');
    });
};