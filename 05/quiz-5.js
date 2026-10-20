// 다음과 같이 arr 배열이 주어졌을 때 1초 간격으로 arr 배열의 요소를 출력하는 Node.js 비동기 함수를 작성하세요.
const arr = [10, 20, 30, 40, 50];

function start(arr) {
    let index = 0;

    function delay() {
        if (index < arr.length) {
            console.log(arr[index]);
            index++;
            setTimeout(delay, 1000);
        }
    }
    delay();
}

start(arr);