// interface
// it should not be possible to instantiate this
class InputController {
  handleInput(key) {
    throw new Error('InputController must overwrite handleInput() method.');
  };
}

export default InputController;