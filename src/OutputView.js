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
    },

    printGiveawayPromotion(giveawayPromotion) {
        Console.print("\n<증정 메뉴>");
        if(giveawayPromotion){
            Console.print("샴페인 1개")
        }
        else{
            Console.print("없음");
        }
    },

    printPromptionList(promotionList){
        let promotionFlag = 0;
        Console.print("\n<혜택 내역>");
        promotionList.forEach((promotion) => {
            if(promotion[1]){
                Console.print(`${promotion[0]} -${promotion[1]}원`);
                promotionFlag+=1;
            }

        });
        if(promotionFlag === 0){
            Console.print("없음");
        }
    },

}

export default OutputView;