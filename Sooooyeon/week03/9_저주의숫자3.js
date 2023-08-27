// 문제 설명
// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n	result
// 15	25
// 40	76



function solution(n) {
    let x3 = 0
    // n까지 반복
    for (let i = 1; i <= n; i++) {
        // i에 증가에 따른 x3의 증가
        x3++
        // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
        while (x3.toString().includes('3') || x3 % 3 === 0) {
            x3++
        }
    }
    return x3
}