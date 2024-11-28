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

class Promotion{
    constructor (menusArray, day){
        this.menusArray = menusArray;
        this.day = day;
        this.menuType = "";

    }
    daysPromotion (){
        if ((this.day%7 === 1 || this.day%7 === 2 ) && this.menuType === "main"){
            return 2023;
        }
        else if (( this.day%7 !== 1 || this.day%7 !== 2 ) && this.menuType === "dessert"){
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

    calculatePriceBeforePromotion (){
        let totalPriceBeforePromotion = 0;
        this.menusArray.forEach((menu) => {
            let menuName = menu.split("-")[0];
            let menuCount = menu.split("-")[1];

            for (let storeMenu in Menus){
                if ( Object.keys(Menus[storeMenu]).includes(menuName)){
                    totalPriceBeforePromotion += Menus[storeMenu][menuName] * menuCount ;
                }
            }
        });
        return totalPriceBeforePromotion;
    }

    giveawayPromotion (){
        const totalPriceBeforePromotion = this.calculatePriceBeforePromotion();

        if (totalPriceBeforePromotion >= 120000){
            return ["샴페인-1"];
        }
        return "";
        
    }


}

export default Promotion;