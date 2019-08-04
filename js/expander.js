function sidebar_toggle_fluid() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSFluid');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider1")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider1")).css("background-color","rgba(0,0,0,0)");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider1")).css("-webkit-transform","scale(1.4,1.4)");
    $(document.getElementById("ninja-slider1")).css("background-color","rgba(0,0,0,0.7");
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
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider2")).css("-webkit-transform","scale(1.4,1.4)");
    $(document.getElementById("ninja-slider2")).css("background-color","rgba(0,0,0,0.7");
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
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider3")).css("-webkit-transform","scale(1.4,1.4)");
    $(document.getElementById("ninja-slider3")).css("background-color","rgba(0,0,0,0.7");
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
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider4")).css("-webkit-transform","scale(1.4,1.4)");
    $(document.getElementById("ninja-slider4")).css("background-color","rgba(0,0,0,0.7");
    buttonText.value = "CLOSE";
  };
};