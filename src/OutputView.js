import {Console} from "@woowacourse/mission-utils";

const OutputView = {
    printMenu(menusArray) {
        Console.print("<주문 메뉴>");
        menusArray.forEach((menu) => {
            let menuName = menu.split("-")[0];
            let menuCount = menu.split("-")[1];
            Console.print(`${menuName} ${menuCount}개`);
        });
    },
    
    printPriceBeforePromotion(totalPriceBeforePromotion) {
        Console.print("\n<할인 전 총주문 금액>");
        Console.print(totalPriceBeforePromotion + "원");
    }
}

export default OutputView;