import InputHandler from './InputController.js';

class KeyboardInputController extends InputHandler {
  // private class field (ES2019)
  #controllers = [];

  // fluent API design
  static create() {
    return new KeyboardInputController();
  }

  handleInput(key) {
    this.#controllers.forEach((controller) => {
      controller.handleInput(key);
    });
  };

  registerController(controller) {
    this.#controllers.push(controller);
  }
}

export default KeyboardInputController;