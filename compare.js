/**
 * strike / ball 계산 (중복 허용 버전)
 * @param {string} input  // 예: "11223"
 * @param {number[]} answer // 예: [1, 1, 3, 4, 5]
 * @returns {{strike: number, ball: number}}
 */

function checkNumbers(input, answer) {
  
  const inputArr = input.split("").map(Number);

  let strike = 0;

  // 0~9 숫자 개수 카운트
  const answerCount = Array(10).fill(0);
  const inputCount = Array(10).fill(0);

  for (let i = 0; i < answer.length; i++) {
    const a = answer[i];
    const g = inputArr[i];

    // 스트라이크 먼저 카운트
    if (a === g) {
      strike++;
    }

    // 각 숫자 개수 세기
    answerCount[a]++;
    inputCount[g]++;
  }

  // 자리 상관 없이 맞춘 개수(스트라이크+볼)
  let totalMatched = 0;
  for (let d = 0; d < 10; d++) {
    totalMatched += Math.min(answerCount[d], inputCount[d]);
  }

  const ball = totalMatched - strike;

  return { strike, ball };
}

module.exports = { checkNumbers };
