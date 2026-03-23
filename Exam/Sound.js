let synth; 

// setup synth
function setupSound() {
  synth = new p5.MonoSynth(); 
}

// plays same melodi on repeat
function playBackgroundMelody() {
synth.play("C5", 0.8, 0, 0.2);
synth.play("E5", 0.8, 0.2, 0.2);
synth.play("G5", 0.8, 0.4, 0.2);
}