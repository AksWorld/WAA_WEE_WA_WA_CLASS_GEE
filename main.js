x = 0;
y = 0;

draw_apple = "";
screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
    apple= loadImage("apple.png");
    console.log("preload");
  
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   to_number  = Number(content);
   console.log(to_number);
    
    if(Number.isInteger(to_number)){
    draw_apple="set";
    console.log("Test for Number successful");
    }
    else{
    draw_apple="Not set because there is no number";
    console.log("Test for Number fail");
    }

}

function setup() {
 console.log("setup complete")
 screen_width=window.innerWidth;
 screen_height=(window.innerHeight-150);
 canvas = createCanvas(screen_width,screen_height);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
     for(var i=1; i <= to_number; i++)
    {
         console.log("for loop success")
         x=Math.floor(Math.random() * 700);
         y=Math.floor(Math.random()*400);
         image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML= to_number + " Apples drawn";
    speak_data=to_number + "Apples drawn";
    speak(speak_data);
    draw_apple = "";
  
  }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}

function clearTheCanvas(){
  clear();
  document.getElementById("status").innerHTML= "";
}

 



