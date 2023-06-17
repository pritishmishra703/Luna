function play_audio(audio_path, volume) {
    var audio = new Audio(audio_path);
    audio.volume = volume;
    audio.play();
}

function post_wwd() {
    play_audio('/static/resources/music/beep_in.mp3', 0.3)
    startSpeechRecognition();
}

function porcupineErrorCallback(error) {
    console.log(error);
    document.getElementById("status").innerHTML = error;
}


function porcupineKeywordCallback(detection) {
    post_wwd();
}


let porcupine;

async function startPorcupine() {
    try {
        porcupine = await PorcupineWeb.PorcupineWorker.create(
            'knx0Uu+0cGQoX77hoXmqgdffdUIYIm9QGfl//gSOofH7pi0wh+iEww==',
            [{ label: "Hey Luna", base64: HEY_LUNA_KEYWORD_MODEL }],
            porcupineKeywordCallback,
            { base64: modelParams },
        );
        await window.WebVoiceProcessor.
            WebVoiceProcessor.subscribe(porcupine);
    } catch (err) {
        porcupineErrorCallback(err);
    }
}


let pulseInterval;

function pulseWithSpeech() {
    // Get the audio input from the user's microphone
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            // Create a new AudioContext
            const audioContext = new AudioContext();

            // Create a MediaStreamAudioSourceNode from the microphone input
            const sourceNode = audioContext.createMediaStreamSource(stream);

            // Create an AnalyserNode to extract audio data from the input
            const analyserNode = audioContext.createAnalyser();
            analyserNode.fftSize = 256; // Set the FFT size (lower values mean faster response)

            // Connect the source node to the analyser node
            sourceNode.connect(analyserNode);

            // Create a buffer array to hold the audio data
            const bufferLength = analyserNode.frequencyBinCount;
            const audioBuffer = new Uint8Array(bufferLength);

            // Get a reference to the pulse-circle element
            const pulseCircle = document.querySelector('.rec-circle');

            // Create a function to update the pulse-circle size based on the audio data
            function updatePulse() {
                // Get the average audio level from the buffer array
                analyserNode.getByteFrequencyData(audioBuffer);
                const audioLevel = audioBuffer.reduce((acc, val) => acc + val) / bufferLength;

                // Map the audio level to a pulse size (adjust these values as needed)
                var pulseSize = (Math.round(audioLevel * 2)) * 1.1;

                if (pulseSize < 20) {
                    pulseSize = 20;
                }

                pulseSize = Math.min(pulseSize, 40)

                // Set the pulse-circle size
                pulseCircle.style.width = `${pulseSize}px`;
                pulseCircle.style.height = `${pulseSize}px`;
            }
            // Call the updatePulse function periodically to update the pulse size
            pulseInterval = setInterval(updatePulse, 30);
        })
        .catch(error => {
            console.error(error);
        });
}


function speak(text) {
    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance();

    // Set the default voice
    utterance.voice = speechSynthesis.getVoices()[0];
    utterance.text = text
    speechSynthesis.speak(utterance);
}


function focusOnLatestMessage(){
    var messages = document.getElementsByClassName('message');
    var latest_msg = messages[messages.length - 1];
    latest_msg.scrollIntoView(false);
}



function getResponse(input) {
    document.querySelector('#search-input').value = ''
    addMessageToChat(input, 'user', false);
    focusOnLatestMessage();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/generate_chat_response?input=' + input, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText)['response'];
            document.querySelector('.pulse-circle').classList.remove('load')
            speak(response);
            addMessageToChat(response, 'assistant', false);
            focusOnLatestMessage();
        } else {
            console.error('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}


function startSpeechRecognition() {
    if ("webkitSpeechRecognition" in window) {
        let speechRecognition = new webkitSpeechRecognition();
        let final_transcript = "";
        speechRecognition.continuous = true;
        speechRecognition.interimResults = true;
        let silenceTimer;

        speechRecognition.onstart = () => {
            document.getElementById('search-input').placeholder = 'Listening...'
            porcupine.terminate();
            porcupine = null;
            // document.querySelector('.suggestions').style.display = 'none'
            document.querySelector("#search-input").value = '';
            const imageWrapper = document.querySelector('.material-symbols-outlined');
            imageWrapper.style.opacity = 0;
            const recCircle = document.querySelector('.rec-circle');
            recCircle.style.display = 'block'
            const pulseCircle = document.querySelector('.pulse-circle');
            pulseCircle.style.animationPlayState = 'paused';
            pulseCircle.style.transform = 'scale(1.22)';
            pulseWithSpeech();
        };

        speechRecognition.onend = () => {
            document.getElementById('search-input').placeholder = "Say 'Hey Luna' or type..."
            const pulseCircle = document.querySelector('.pulse-circle');
            pulseCircle.style.animationPlayState = 'running';
            pulseCircle.classList.add('load')
            document.querySelector("#search-input").value = final_transcript;
            const imageWrapper = document.querySelector('.material-symbols-outlined');
            imageWrapper.style.opacity = 1;
            const recCircle = document.querySelector('.rec-circle');
            recCircle.style.display = 'none'
            clearInterval(pulseInterval)
            startPorcupine();

            if (final_transcript != '') {
                getResponse(final_transcript)
            }
            else {
                play_audio('/static/resources/music/beep_out.mp3', 0.3)
                pulseCircle.classList.remove('load')
            }
            return final_transcript;
        };

        speechRecognition.onresult = (event) => {
            let interim_transcript = "";

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    final_transcript += ' ' + event.results[i][0].transcript;
                } else {
                    interim_transcript += event.results[i][0].transcript;
                }
            }

            if (interim_transcript != '') {
                document.querySelector("#search-input").value = interim_transcript;
            }

            clearTimeout(silenceTimer);
            silenceTimer = setTimeout(() => {
                speechRecognition.stop();
            }, 3000);
        };

        speechRecognition.start();

        silenceTimer = setTimeout(() => {
            speechRecognition.stop();
        }, 3000);

    } else {
        console.log("Speech Recognition Not Available");
    }
}
startPorcupine();



function replaceTripleBackticks(string) {
    const regex = /```([^`]+)```/g;
    return string.replace(regex, '<pre>$1</pre>');
}



function addMessageToChat(message, className, animation) {
    message = replaceTripleBackticks(message);
    const chatContainer = document.querySelector('.chat');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    const messageP = document.createElement('p');
    messageP.classList.add(className);
    messageP.innerHTML = '';
    messageDiv.appendChild(messageP);
    chatContainer.appendChild(messageDiv);

    if (animation == true) {
        var i = 0;
        var speed = 15;

        function typeWriter() {
            console.log(message.length)
            if (i < message.length) {
                messageP.innerHTML = ''
                messageP.innerHTML = message.slice(0, i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();
    } else {
        messageP.innerHTML = message;
    }
}
