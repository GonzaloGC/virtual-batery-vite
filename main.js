import "./style.css";
import bateryBg from "./drumBackground.jpg";

document.querySelector("#bateryApp").innerHTML = `
<header>
  <img class="bg" src="${bateryBg}" alt="batery">
  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">aplaudir</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">pulsar</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">pulsar</span>
    </div>
  </div>

  <audio data-key="65" src="soundsDrum/aplaudir.wav"></audio>
  <audio data-key="83" src="soundsDrum/hihat.wav"></audio>
  <audio data-key="68" src="soundsDrum/kick.wav"></audio>
  <audio data-key="70" src="soundsDrum/openhat.wav"></audio>
  <audio data-key="71" src="soundsDrum/boom.wav"></audio>
  <audio data-key="72" src="soundsDrum/ride.wav"></audio>
  <audio data-key="74" src="soundsDrum/snare.wav"></audio>
  <audio data-key="75" src="soundsDrum/tom.wav"></audio>
  <audio data-key="76" src="soundsDrum/tink.wav"></audio>
</header>

`;
