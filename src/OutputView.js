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

    printPromotionPrice(promotionPrice){
        Console.print("\n<총혜택 금액>");
        if (promotionPrice !== 0){
            Console.print(`-${promotionPrice}원`);

        }else {
            Console.print(`${promotionPrice}원`);
        }

    },

    printAcutalPrice(totalPriceBeforePromotion, promotionPrice,giveawayPromotion){
        Console.print("\n<할인 후 예상 결제 금액>");
        Console.print(`${totalPriceBeforePromotion-promotionPrice+giveawayPromotion}원`);
    },

    printEventBadge(promotionPrice){
        Console.print("\n<12월 이벤트 배지>");
        if( promotionPrice >= 20000 ){
            Console.print("산타");
        }
        else if (promotionPrice >= 10000){
            Console.print("트리")
        }
        else if (promotionPrice >= 5000){
            Console.print("별")
        }
        else{
            Console.print("없음");
        }
    }

}

export default OutputView;