// 03 폴더에 mine 폴더가 있는지 확인한 후, 없다면 mine 폴더를 새로 만드는 코드를 작성하세요.

const fs = require('fs');

if (!fs.existsSync("./mine")) {
    fs.mkdirSync("./mine", (err) => {
        if (err) {
            console.log(err);
        }
        console.log("folder created");
    });
} else {
    console.log("folder already exists");
}