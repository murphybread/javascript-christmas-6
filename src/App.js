import InputView from "./InputView.js";

class App {
  // constructor() {
  //   this.inputView = new InputView();
  // }
  async run() {
    await InputView.readDate();
  }
}

export default App;

