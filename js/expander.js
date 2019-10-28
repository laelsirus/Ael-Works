function sidebar_toggle_fluid() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSFluid');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-fluid")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-fluid")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-fluid")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-fluid")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-fluid")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-fluid")).toggleClass("emphasized");
    buttonText.value = "CLOSE";

    // $(document).mouseup(function (e){
    //   // var container = $("#ninja-slider-fluid");
    //   var container = $(document.getElementsByClassName('sliderClass'));
    //   if( container.has(e.target).length === 0)
    //     // container.hide();
    //     alert('영역 밖입니다.');
    // });
  };
};


function sidebar_toggle_dongju() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSDongju');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-dongju")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-dongju")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-dongju")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-dongju")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-dongju")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-dongju")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};


function sidebar_toggle_trace() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSTrace');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-trace")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-trace")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-trace")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-trace")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-trace")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-trace")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};

function sidebar_toggle_sharp() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSharp');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-sharp")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-sharp")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-sharp")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-sharp")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-sharp")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-sharp")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};

function sidebar_toggle_synesthesia() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSynesthesia');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-synesthesia")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-synesthesia")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-synesthesia")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-synesthesia")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-synesthesia")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-synesthesia")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};

function sidebar_toggle_sound() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSound');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    $(document.getElementById("ninja-slider-soundmusic")).css("-webkit-transform","scale(1,1)");
    $(document.getElementById("ninja-slider-soundmusic")).css("background-color","rgba(0,0,0,0)");
    $(document.getElementsByTagName("body")).css("overflow","auto");
    $(document.getElementById("ninja-slider-soundmusic")).toggleClass("emphasized");
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    $(document.getElementById("ninja-slider-soundmusic")).css("-webkit-transform","scale(1.2,1.2)");
    $(document.getElementById("ninja-slider-soundmusic")).css("background-color","rgba(0,0,0,0.7");
    $(document.getElementsByTagName("body")).css("overflow","hidden");
    $(document.getElementById("ninja-slider-soundmusic")).toggleClass("emphasized");
    buttonText.value = "CLOSE";
  };
};