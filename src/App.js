import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Promotion from "./Promotion.js";

class App {

  async run() {
    const day = await InputView.readDate();
    const menusArray = await InputView.readMenu();
    OutputView.printMenu(menusArray);
    const promotion = new Promotion(menusArray, day);

    OutputView.printPriceBeforePromotion(promotion.calculatePriceBeforePromotion());
    
    OutputView.printGiveawayPromotion(promotion.giveawayPromotion());
    const promotionList = promotion.calculatePromotions();
    OutputView.printPromptionList(promotionList);

    OutputView.printPromotionPrice(promotion.calculatePricePromotion());

    OutputView.printAcutalPrice(promotion.calculatePriceBeforePromotion(), promotion.calculatePricePromotion(),promotion.giveawayPromotion());

  }
}

export default App;

