const getneratenumbers = require("./generate.js");
const validsetinput = require("./validate.js");
const checkNumbers = require("./compare.js");

 const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
let answer = [];
let attempts = 0;
const maxAttempts = 10;
function startGame() {
    answer = getneratenumbers();
    attempts = 0;
    console.log("=====================================================");
    console.log("숫자 야구 게임");
    console.log("=====================================================");
    console.log("0~9 까지의 중복되는 5자리 숫자를 맞춰보세요");
    console.log("=====================================================");
    console.log("종료하려면 exit을 입력해주세요");
    askinput();
}




function askinput(){
    rl.question("숫자를 입력하세요 : ",(input) => {
        if(input === "exit")return endGame();

        if(!validsetinput(input)){
            console.log("잘못된 입력입니다 (중복0.5자리)");
             return askinput();
        }

        attempts++;
        const {strike ,ball} = checkNumbers(input,answer);
        console.log(`결과: ${strike} 스트라이크, ${ball} 볼`);

        if(strike === 5){
            console.log("\n 정답입니다. 게임종료");
            return endGame();
        }
        if(attempts >= maxAttempts){
            console.log(`\n실패 정답은 ${answer.join("")}였습니다. 게임종료`);
            return endGame();
        }

         askinput();
    });
    
    }
function endGame(){
    console.log("\n게임을 종료합니다.");
    rl.close();
}