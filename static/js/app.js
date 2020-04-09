try {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
}
catch(e) {
    console.error(e);
    $('.no-browser-support').show();
    $('.app').hide();
}

const output = document.getElementById("output");

recognition.onstart = function() { 
    output.innerHTML ='Voice recognition activated. Try speaking into the microphone.';
    // alert('Voice recognition activated. Try speaking into the microphone.');
}

recognition.onspeechend = function() {
    // alert('You were quiet for a while so voice recognition turned itself off.');
    // output.innerHTML ='You were quiet for a while so voice recognition turned itself off.';
}

recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
        output.innerHTML = 'No speech was detected. Try again.';  
        // alert('No speech was detected. Try again.');        
    };
}

recognition.onresult = function(event) {
    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    const output = document.getElementById("output");

    var current = event.resultIndex;
    
    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;
    output.innerHTML = transcript;
  }

  recognition.start();