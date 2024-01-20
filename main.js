import "./style.css";
import bateryBg from "./drumBackground.jpg";
import aplaudir from "./src/sound/aplaudir.wav";
import boom from "./src/sound/boom.wav";
import hihat from "./src/sound/hihat.wav";
import kick from "./src/sound/kick.wav";
import openhat from "./src/sound/openhat.wav";
import ride from "./src/sound/ride.wav";
import snare from "./src/sound/snare.wav";
import tink from "./src/sound/tink.wav";
import tom from "./src/sound/tom.wav";
import { removeTransition } from "./app";
import { playSound } from "./app";

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

  <audio data-key="65" src="${aplaudir}"></audio>
  <audio data-key="83" src="${boom}"></audio>
  <audio data-key="68" src="${hihat}"></audio>
  <audio data-key="70" src="${kick}"></audio>
  <audio data-key="71" src="${openhat}"></audio>
  <audio data-key="72" src="${ride}"></audio>
  <audio data-key="74" src="${snare}"></audio>
  <audio data-key="75" src="${tink}"></audio>
  <audio data-key="76" src="${tom}"></audio>
  
</header>

`;
