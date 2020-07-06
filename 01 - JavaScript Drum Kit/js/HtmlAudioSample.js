import AudioSample from './AudioSample.js';
import { checkArgument, requireNonNull } from './util.js';

// interface
class HtmlAudioSample extends AudioSample {
  // private class field (ES2019)
  #audioNode = null;

  // this should be private when using static factory method
  constructor(audioNode) {
    super();
    checkArgument(audioNode.nodeName === 'AUDIO', 'HtmlAudioSample expects Audio Node input.');
    this.#audioNode = requireNonNull(audioNode, 'audioNode must not be null.');
  }

  // fluent API design
  static from(audioNode) {
    return new HtmlAudioSample(audioNode);
  }

  play() {
    this.#audioNode.currentTime = 0;
    this.#audioNode.play();
  };
}

export default HtmlAudioSample;