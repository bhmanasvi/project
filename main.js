var speechrecognition = window.webkitSpeechRecognition;
var Recognition = new speechrecognition();

function start()
{
    document.getElementById("textbox").innerHTML = " ";
    Recognition.start();
}

Recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content == "take my selfie")
    {
        speak();
    }
    
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);

    setTimeout(function()  
 {imgid="selfie1"
     takeselfie(); 
     speak_data = "Taking your selfie in 10 seconds";
     var utter_this = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utter_this);
    }, 5000);

    setTimeout(function()  
 { imgid="selfie2"
    takeselfie();
    speak_data = "Taking your selfie in 15 seconds";
     var utter_this = new SpeechSynthesisUtterance(speak_data); 
     synth.speak(utter_this);
    }, 10000);
    
    setTimeout(function()  
    { imgid="selfie3"
        takeselfie();  
       }, 15000); 
    
}

Webcam.set({
    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

function takeselfie()
    {
        Webcam.snap(function(data_URI){
            if(imgid=="selfie1"){
                document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_URI+'">'
            }
            if(imgid=="selfie2"){
                document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_URI+'">'
            }
            if(imgid=="selfie3"){
                document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_URI+'">'
            }
        }); 
    }
