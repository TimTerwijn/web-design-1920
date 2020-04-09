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

recognition.continuous = true;
recognition.interimResults = true;

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

let content = "";
recognition.onresult = function(event) {
    // event is a SpeechRecognitionEvent object.
    // It holds all the lines we have captured so far. 
    // We only need the current one.
    const output = document.getElementById("output");

    var current = event.resultIndex;
    
    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    // There is a weird bug on mobile, where everything is repeated twice.
    // There is no official solution so far so we have to handle an edge case.
    var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

    let result = event.results[current];
    let isFinal = result.isFinal && (result[0].confidence > 0);

    if(!mobileRepeatBug && isFinal) {
        // Add the current transcript to the contents of our Note.
        content += transcript;
        output.innerHTML = content;
    }
}

const button = document.getElementById("button");
button.addEventListener("click", startRecording);

function startRecording() {
    content = "";
    recognition.start();
}

  