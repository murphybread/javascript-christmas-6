import InputView from "./InputView.js";

class App {

  async run() {
    const input = await InputView.readDate();
  }
}

export default App;

