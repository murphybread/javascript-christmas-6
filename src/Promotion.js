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

const PROMOTION_LIST = [
    ["크리스마스 디데이 할인",0],
    [ "평일 할인",0],
    [ "주말 할인" ,0],
    [ "특별 할인", 0],
    ["증정 이벤트",0]
]

class Promotion{
    #promotionList;

    constructor (menusArray, day){
        this.menusArray = menusArray;
        this.day = Number(day);

    }
    weekdayPromotion (menuType){
        if ((this.day%7 !== 1 || this.day%7 !== 2 ) && menuType === "dessert"){
            return 2023;
        }
        return 0;
    }

    weekendPromotion (menuType){
       if (( this.day%7 === 1 || this.day%7 === 2 ) && menuType === "main"){
            return 2023;
        }
        return 0; 
    }

    specialPromotion (){
        if (this.day%7 === 3 || this.day === 25){
            return 1000;
        }
        return 0;

    }
    christmasDdayPromtion (){
        if (this.day <= 25){
            return 1000 + (this.day-1) *100
        }
        return 0
    }

    calculatePromotions(){
        this.#promotionList = PROMOTION_LIST
        if (this.calculatePriceBeforePromotion() <= 10000){
            return this.#promotionList;
        }
        let weekdayPromotionPrice = 0;
        let weekendPromotionPrice = 0;

        this.menusArray.forEach((menu) => {
            let [menuName, menuCount] = menu.split("-");
            for (let storeMenu in Menus){
                if ( Object.keys(Menus[storeMenu]).includes(menuName)){
                    weekdayPromotionPrice += this.weekdayPromotion(storeMenu) * menuCount;
                    weekendPromotionPrice += this.weekendPromotion(storeMenu) * menuCount;
                }
            }
        });
  
        return calculatePromotions(weekdayPromotionPrice,weekendPromotionPrice);
    }


    calculatePromotions(weekdayPromotionPrice, weekendPromotionPrice) {
        const promotionList = [
            ["크리스마스 디데이 할인", this.christmasDdayPromtion()],
            ["평일 할인", weekdayPromotionPrice],
            ["주말 할인", weekendPromotionPrice],
            ["특별 할인", this.specialPromotion()],
            ["증정 이벤트", this.giveawayPromotion()],
        ];
        return promotionList;
    }
    calculatePriceBeforePromotion (){
        let totalPriceBeforePromotion = 0;
        this.menusArray.forEach((menu) => {
            let [menuName, menuCount] = menu.split("-");
            totalPriceBeforePromotion += this.#calculateMenuPrice(menuName, menuCount);
        });
        return totalPriceBeforePromotion;
    }

    #calculateMenuPrice(menuName, menuCount){
        for (let storeMenu in Menus){
            if ( Object.keys(Menus[storeMenu]).includes(menuName)){
                return Menus[storeMenu][menuName] * menuCount ;
                }
        }
        return 0; 
    }


    calculatePricePromotion(){
        let promtionPrice = 0
        const promotionList = this.calculatePromotions();
        promotionList.forEach((promotion) => {
            promtionPrice += promotion[1];
        });

        return promtionPrice;

    }

    giveawayPromotion (){
        const totalPriceBeforePromotion = this.calculatePriceBeforePromotion();

        if (totalPriceBeforePromotion >= 120000){
            return 25000;
        }
        return 0;
        
    }


}

export default Promotion;