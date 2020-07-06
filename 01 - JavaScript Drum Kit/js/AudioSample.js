// interface
// it should not be possible to instantiate this
class AudioSample {
  play() {
    throw new Error('AudioSample must overwrite play() method.');
  };
}

export default AudioSample;