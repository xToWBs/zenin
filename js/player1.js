html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.player1 {
  max-width:750px;
  border:5px solid rgba(0,0,0,0.2);
  box-shadow:0 0 20px rgba(0,0,0,0.2);
  position: relative;
  font-size: 0;
  overflow: hidden;
}

.player1__video {
  width: 100%;
}

.player1__button {
  background:none;
  border:0;
  line-height:1;
  color:white;
  text-align: center;
  outline:0;
  padding: 0;
  cursor:pointer;
  max-width:50px;
}

.player1__button:focus {
  border-color: #e7325e;
}

.player1__slider {
  width:10px;
  height:30px;
}

.player1__controls {
  display:flex;
  position: absolute;
  bottom:0;
  width: 100%;
  transform: translateY(100%) translateY(-5px);
  transition:all .3s;
  flex-wrap:wrap;
  background:rgba(0,0,0,0.1);
}

.player1:hover .player1__controls {
  transform: translateY(0);
}

.player1:hover .progress {
  height:15px;
}

.player1__controls > * {
  flex:1;
}

.progress {
  flex:10;
  position: relative;
  display:flex;
  flex-basis:100%;
  height:5px;
  transition:height 0.3s;
  background:rgba(0,0,0,0.5);
  cursor:ew-resize;
}

.progress__filled {
  width:30%;
  background:#e7325e;
  flex:0;
  flex-basis:30%;
}

/* unholy css to style input type="range" */

input[type=range] {
  -webkit-appearance: none;
  background:transparent;
  width: 100%;
  margin: 0 5px;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: rgba(255,255,255,0.8);
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #e7325e;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.5px;
  box-shadow:0 0 2px rgba(0,0,0,0.2);
}
input[type=range]:focus::-wefbkit-slider-runnable-track {
  background: #bada55;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0), 0 0 1px rgba(13, 13, 13, 0);
  background: #ffffff;
  border-radius: 1.3px;
  border: 0.2px solid rgba(1, 1, 1, 0);
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(13, 13, 13, 0);
  height: 15px;
  width: 15px;
  border-radius: 50px;
  background: #e7325e;
  cursor: pointer;
}
