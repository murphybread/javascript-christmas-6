import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {

  async run() {
    const input = await InputView.readDate();
    const menusArray = await InputView.readMenu();
    OutputView.printMenu(menusArray);



  }
}

export default App;

