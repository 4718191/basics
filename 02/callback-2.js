// 1초 간격으로 'A -> B -> C -> D -> STOP' 표시하기   (결과 비교: 02\results\callback-2.js)

function displayletter() {
    console.log("A");
    setTimeout(() => {
        console.log("B");
        setTimeout(() => {
            console.log("C");
            setTimeout(() => {
                console.log("D");
                setTimeout(() => {
                    console.log("Stop!");
                }, 1000);
            }, 3000);
        }, 1000);
    }, 1000);
}

function display() {
    console.log("test");
}

displayletter();
display();