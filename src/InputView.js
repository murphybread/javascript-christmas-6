import { MissionUtils, Console } from "@woowacourse/mission-utils"

const Menus = {
    appetizer: {
        양송이수프: 6000,
        타파스: 5500,
        시저샐러드: 8000
    },
    main:{
        티본스테이크: 55000 ,
        바비큐립: 54000,
        해산물파스타: 35000,
        크리스마스파스타: 25000
    },
    dessert: {
        초코케이크:15000,
        아이스크림:5000
    },
    beverage: {
        제로콜라:3000,
        레드와인:60000,
        샴페인:25000
    }
}
const MENU_ERROR_MESSAGE = "[ERROR] 유효하지 않은 메뉴입니다. 다시 입력해 주세요.";


class Validator {
    constructor(menu){
        this.menuName = menu.split("-")[0];
        this.menuCount = menu.split("-")[1];
    }


    validateExstingMenu (){
        for (let storeMenu in Menus){
            if ( Object.keys(Menus[storeMenu]).includes(this.menuName)){
                return true;
            }
        }
        return false
    }

    validateCountMenu (){
        return !isNaN(this.menuCount) && this.menuCount >= 1;
    }

    validateReqeustFormat (){

        return typeof this.menuName === "string" && !isNaN(Number(this.menuCount));
    }

    validateDuplicateMenu(){
                for (let storeMenu in Menus){
            if ( Object.keys(Menus[storeMenu]).includes(this.menuName)){
                return false;
            }
        }
        return true

    }
}


const InputView = {
    async readDate() {
        Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
        while (true) {
            try {
                const input = await Console.readLineAsync(
                    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n"
                );
                if (Number(input) < 1 || Number(input) > 31 || isNaN(Number(input))) {
                    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
                }
                return input;
            } catch (error) {
                Console.print(error.message);
            }
        }
    },
    
    async readMenu(){
                while (true) {
            try {
                const requestMenus = await Console.readLineAsync("주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n");
                const menusArray  = requestMenus.split(",");
                console.log(menusArray);
                if (!InputView.readDuplicateMenu(menusArray)){
                    throw new Error(MENU_ERROR_MESSAGE);
                }

                menusArray.forEach((menu) => {
                    const validator = new Validator(menu)
                    if (!validator.validateReqeustFormat() ||!validator.validateExstingMenu() || !validator.validateCountMenu()  ){
                        throw new Error(MENU_ERROR_MESSAGE);
                    }

                    console.log(`menu Accepted`);

                })
                Console.print("주문 메뉴가 정상적으로 입력되었습니다.\n 12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!");

                return menusArray;
            } catch (error) {
                Console.print(error.message);
            }
        }
    },

    readDuplicateMenu(menusArray){
        let orderedMenus = [];
        menusArray.forEach((menu) => {
            if ( !orderedMenus.includes(menu.split("-")[0])){
                orderedMenus.push(menu.split("-")[0]);
            }
            else {
                return false;
            }
        });
        return true;

    }

}
export default InputView;
