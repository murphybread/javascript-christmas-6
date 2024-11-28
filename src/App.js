import InputView from "./InputView.js";

class App {

  async run() {
    const input = await InputView.readDate();
    const menusArray = await InputView.readMenu();
    
  }
}

export default App;

