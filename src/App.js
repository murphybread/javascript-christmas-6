import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Promotion from "./Promotion.js";

class App {

  async run() {
    const day = await InputView.readDate();
    const menusArray = await InputView.readMenu();
    OutputView.printEventMessage(day);
    OutputView.printMenu(menusArray);
    const promotion = new Promotion(menusArray, day);

    OutputView.printRecipt(promotion);

  }
}

export default App;

