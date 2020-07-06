import InputHandler from './InputController.js';
import { checkArgument, requireNonNull, isIterable } from './util.js';
import HtmlAudioSample from './HtmlAudioSample.js';

class AudioController extends InputHandler {
  // private class field (ES2019)
  #map = new Map();

  // this should be private when using static factory method
  constructor(audioNodes) {
    super();

    checkArgument(isIterable(audioNodes), 'audioNodes must be iterable.');
    audioNodes.forEach((audioNode) => {
      requireNonNull(audioNode, 'audioNode must not be null.');
      const key = parseInt(audioNode.dataset.key);
      const value = HtmlAudioSample.from(audioNode);
      this.#map.set(key, value);
    });
  }

  // fluent API design
  static from(audioNodes) {
    return new AudioController(audioNodes);
  }

  handleInput(key) {
    const audioSample = this.#map.get(key);
    if (audioSample) {
      audioSample.play();
    }
  };
}

export default AudioController;