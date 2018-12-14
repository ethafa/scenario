client = new Paho.MQTT.Client("broker.shiftr.io", Number(443), "controlpanel");
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

var receivedMessage = "";

var char1position = "";
var char2position = "";

var gameScreen = 0;

var Tag1 = '2253548096';
var Tag2 = '1448307264';
var Tag3 = '652110400';
var Tag4 = '3336399424';
var Tag5 = '3336071744';
var Tag6 = '642083648';
var Tag7 = '909405248';
var Tag8 = '3336596544';
var Tag9 = '2252696384';
var Tag10 = '3593694272';
var Tag11 = '3590484800';
var Tag13 = 'noLight';


var img;
var clickStatus = false;

var timerStarted=false;

function preload() {
  img = loadImage('assets/screens-03.jpg');
  img2 = loadImage('assets/screens-04.jpg');
  img3 = loadImage('assets/screens-05.jpg');
  img4 = loadImage('assets/screens-06.jpg');
  img5 = loadImage('assets/screens-07.jpg');
  img6 = loadImage('assets/screens-08.jpg');
  img7 = loadImage('assets/screens-09.jpg');
  img8 = loadImage('assets/screens-10.jpg');
  img9 = loadImage('assets/screens-11.jpg');
  img13 = loadImage('assets/screens-12.jpg');
  img10 = loadImage('assets/screens-14.jpg');
  img11 = loadImage('assets/screens-15.jpg');
  img12pre1 = loadImage('assets/screens-17.jpg');
  img12pre2 = loadImage('assets/screens-16.jpg');
  img12 = loadImage('assets/screens-20.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  client.connect({
    onSuccess: onConnect,
    userName: "try",
    password: "try",
    useSSL: true,
  });
  textAlign(CENTER);
}

function draw() {
  background(220);
  displayScreen();

  if (gameScreen == 0) {
    if (receivedMessage == Tag1) {
      gameScreen = 1;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag5) {
      gameScreen = 0;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag7) {
      gameScreen = 3;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag6) {
      gameScreen = 2;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag8) {
      gameScreen = 4;
      console.log("vado a screen " + gameScreen);
    }
  }
  if (gameScreen == 1) {
    if (receivedMessage == Tag5) {
      gameScreen = 0;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag7) {
      gameScreen = 3;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag6) {
      gameScreen = 2;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag8) {
      gameScreen = 4;
      console.log("vado a screen " + gameScreen);
    }
  }
  if (gameScreen == 2) {
    if (receivedMessage == Tag5) {
      gameScreen = 0;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag7) {
      gameScreen = 3;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag1) {
      gameScreen = 1;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag8) {
      gameScreen = 4;
      console.log("vado a screen " + gameScreen);
    }
  }
  if (gameScreen == 3) {
    if (receivedMessage == Tag5) {
      gameScreen = 0;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag1) {
      gameScreen = 1;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag6) {
      gameScreen = 2;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag8) {
      gameScreen = 4;
      console.log("vado a screen " + gameScreen);
    }
  }

  if (gameScreen == 4) {
    if (receivedMessage == Tag5) {
      gameScreen = 0;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag7) {
      gameScreen = 3;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag1) {
      gameScreen = 1;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag6) {
      gameScreen = 2;
      console.log("vado a screen " + gameScreen);
    }
  }

  if(gameScreen == 2){
    if (timerStarted==false){
      timerStarted=true;
      setTimeout(function(){
        gameScreen = 6;
        timerStarted=false;
      },5000);
    }
  }
  /*  setTimeout(function() {
              gameScreen = 3;
            }, 5000);

        }
        if (gameScreen == 1) {
          if (clickStatus) {
            gameScreen = 3;
            console.log("vado a screen " + gameScreen);
            clickStatus = false;
          }
        }

        if (char2position == Tag2) {
          gameScreen = 5;
          console.log("vado a screen " + gameScreen);
          setTimeout(function() {
            gameScreen = 6;
            console.log("vado a screen " + gameScreen);
          }, 5000);
        }

        if (gameScreen == 6) {
          setTimeout(function() {
            gameScreen = 7;
            console.log("vado a screen " + gameScreen);
          }, 5000);
        }*/

  if (gameScreen == 1) {
    if (receivedMessage == Tag4) {
      gameScreen = 7;
      console.log("vado a screen " + gameScreen);
      receivedMessage = "";
    }
  }
  if (gameScreen==7){
    if (receivedMessage == Tag1){
      gameScreen = 14;
      console.log("vado a screen " + gameScreen);
    } else if (receivedMessage == Tag3){
      gameScreen = 10;
      console.log("vado a screen " + gameScreen);
    }else if (receivedMessage == Tag11){
      gameScreen = 9;
      console.log("vado a screen " + gameScreen);
    }
  }
  if ((gameScreen == 10) || (gameScreen == 9)) {
    if ((char1position == Tag3) && (char2position == Tag11)) {
      gameScreen = 11;
      console.log("vado a screen " + gameScreen);
    } if (clickStatus) {
      gameScreen = 7;
      console.log("vado a screen " + gameScreen);
      clickStatus = false;
    }

    receivedMessage = "";
  }
  if ((gameScreen == 10) || (gameScreen == 9)) {
    if ((char1position == Tag11) && (char2position == Tag3)) {
      gameScreen = 11;
      console.log("vado a screen " + gameScreen);
    } if (clickStatus) {
      gameScreen = 7;
      console.log("vado a screen " + gameScreen);
      clickStatus = false;
    }
    receivedMessage = "";
  }

  if (gameScreen == 11){
    if (char2position == Tag13) {
      gameScreen = 1;
      console.log("vado a screen " + gameScreen);
    }
  }
  if (gameScreen == 1) {
    if (clickStatus) {
      gameScreen = 7;
      console.log("vado a screen " + gameScreen);
      clickStatus = false;
    }
  }
  }

function displayScreen() {
  switch (gameScreen) {
    case 0:
      image(img, 0, 0);
      break;
    case 1:
      image(img2, 0, 0);
      break;
    case 2:
      image(img3, 0, 0);
      break;
    case 3:
      image(img4, 0, 0);
      break;
    case 4:
      image(img5, 0, 0);
      break;
    case 5:
      image(img6, 0, 0);
      break;
    case 6:
      image(img7, 0, 0);
      break;
    case 7:
      image(img8, 0, 0);
      break;
    case 8:
      image(img9, 0, 0);
      break;
    case 9:
      image(img10, 0, 0);
      break;
    case 10:
      image(img11, 0, 0);
      break;
    case 11:
      image(img12, 0, 0);
      break;
    case 12:
      image(img12pre1, 0, 0);
      break;
    case 13:
      image(img12pre2, 0, 0);
      break;
      case 14:
        image(img13, 0, 0);
        break;
    default:
  }
}
//text(receivedMessage, width/2,height/2);
//  console.log('val:');
//  console.log(gameScreen);
function mouseClicked() {
  sendMessage("/minorinteractive/studio/test/1", "got a message");
  console.log("click");
  clickStatus = true;
}

function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("connected to mosquitto");
  client.subscribe("/etafa-rfid/#");
}

function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

function onMessageArrived(message) {
  console.log(message.destinationName + " -> " + message.payloadString);
  receivedMessage = message.payloadString;

  if (message.destinationName == "/etafa-rfid/1") {
    char1position = receivedMessage;
  } else if (message.destinationName == "/etafa-rfid/2") {
    char2position = receivedMessage;
  }

}

function sendMessage(topic, message) {
  message = new Paho.MQTT.Message(message);
  message.destinationName = topic;
  client.send(message);
}
