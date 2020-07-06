import InputHandler from './InputController.js';
import { checkArgument, requireNonNull, isIterable } from './util.js';
import HtmlAudioSample from './HtmlAudioSample.js';

class CssController extends InputHandler {
  // private class field (ES2019)
  #map = new Map();

  // this should be private when using static factory method
  constructor(htmlElements) {
    super();

    checkArgument(isIterable(htmlElements), 'htmlElements must be iterable.');
    htmlElements.forEach((htmlElement) => {
      requireNonNull(htmlElement, 'htmlElement must not be null.');
      const key = parseInt(htmlElement.dataset.key);
      const value = htmlElement;
      this.#map.set(key, value);
      this.addTransitionListener(htmlElement);
    });
  }

  addTransitionListener(htmlElement) {
    htmlElement.addEventListener('transitionend', (evt) => {
      if (evt.propertyName === 'transform') {
        htmlElement.classList.remove('playing');
      }
    })
  }

  // fluent API design
  static from(htmlElements) {
    return new CssController(htmlElements);
  }

  handleInput(key) {
    const htmlElement = this.#map.get(key);
    if (htmlElement) {
      htmlElement.classList.add('playing');
    }
  };
}

export default CssController;