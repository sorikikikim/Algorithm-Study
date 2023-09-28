function solution(s) {
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (char === "(") {
            count++;
        } else if (char === ")") {
            count--;
            if (count < 0) {
                return false;
            }
        }
    }

    return count === 0;
}