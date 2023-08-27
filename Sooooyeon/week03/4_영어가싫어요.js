// 문제 설명
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// numbers는 소문자로만 구성되어 있습니다.
//     numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// 1 ≤ numbers의 길이 ≤ 50
// "zero"는 numbers의 맨 앞에 올 수 없습니다.

// 입출력 예
// numbers	                                result
// "onetwothreefourfivesixseveneightnine"	123456789
// "onefourzerosixseven"	                14067



// const numbers = "onetwothreefourfivesixseveneightnine";
// const numberString = {
//     zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
// }


function solution(numbers) {
    const num = {
        zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9
    }
    return +numbers.match(/one|two|three|four|five|six|seven|eight|nine|zero/g).map(a => num[a]).join("")
}
// 개념 정리
// match() 메서드는 문자열이 정규식과 매치되는 부분을 검색(인수로 정규식을 받으며, 일치하는 문자열의 배열(Array) 데이터를 반환)
