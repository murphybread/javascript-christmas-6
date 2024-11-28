import { MissionUtils, Console } from "@woowacourse/mission-utils"

const InputView = {
    async readDate() {
        while (true) {
            try {
                const input = await Console.readLineAsync(
                    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n"
                );

                // 입력값 검증
                if (Number(input) < 1 || Number(input) > 31 || isNaN(Number(input))) {
                    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
                }

                return input; // 유효한 입력 반환
            } catch (error) {
                // 예외 메시지 출력
                Console.print(error.message);
            }
        }
    }
    // ...
}
export default InputView;
