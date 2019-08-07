function sidebar_toggle_fluid() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSFluid');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider1")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider1")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementById("ninja-slider1")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider1")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider1")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementById("ninja-slider1")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};


function sidebar_toggle_dongju() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSDongju');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider2")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider2")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementById("ninja-slider2")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider2")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider2")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementById("ninja-slider2")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};


function sidebar_toggle_trace() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSTrace');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider3")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider3")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementById("ninja-slider3")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider3")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider3")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementById("ninja-slider3")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};

function sidebar_toggle_sharp() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSharp');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider4")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider4")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementById("ninja-slider4")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider4")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider4")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementById("ninja-slider4")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};


function sidebar_toggle_sound() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSound');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider5")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider5")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementById("ninja-slider5")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider5")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider5")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementById("ninja-slider5")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};
