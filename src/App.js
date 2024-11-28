import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Promotion from "./Promotion.js";

class App {

  async run() {
    const day = await InputView.readDate();
    const menusArray = await InputView.readMenu();
    OutputView.printMenu(menusArray);
    const promotion = new Promotion(menusArray, day);

    const calculatePriceBeforePromotion = promotion.calculatePriceBeforePromotion();
    OutputView.printPriceBeforePromotion(calculatePriceBeforePromotion);

    const giveawayPromotion = promotion.giveawayPromotion();
    OutputView.printGiveawayPromotion(giveawayPromotion);

    const promotionList = promotion.calculatePromotions();
    OutputView.printPromptionList(promotionList);

    OutputView.printPromotionPrice(promotion.calculatePricePromotion());


  }
}

export default App;

