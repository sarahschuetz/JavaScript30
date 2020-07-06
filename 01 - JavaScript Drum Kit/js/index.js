import HtmlAudioSample from './HtmlAudioSample.js';
import KeyboardInputController from './KeyboardInputController.js';
import AudioController from './AudioController.js';
import CssController from './CssController.js';

const audioNodes = document.querySelectorAll('audio');
const audioController = AudioController.from(audioNodes);

const keyNodes = document.querySelectorAll('.key');
const cssController = CssController.from(keyNodes);

const keyboardInputController = KeyboardInputController.create();
keyboardInputController.registerController(audioController);
keyboardInputController.registerController(cssController);

window.addEventListener('keydown', (evt) => {
  keyboardInputController.handleInput(evt.keyCode);
});
