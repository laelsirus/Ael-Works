function sidebar_toggle_fluid() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSFluid');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
    // $(document).mouseup(function (e){
    //   // var container = $("#ninja-slider1");
    //   var container = $(document.getElementsByClassName('sliderClass'));
    //   if( container.has(e.target).length === 0)
    //     // container.hide();
    //     alert('영역 밖입니다.');
    // });

    // document.getElementById('fluid').click();
  };
};

function sidebar_toggle_dongju() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSDongju');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
  };
};


function sidebar_toggle_trace() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSTrace');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
  };
};

function sidebar_toggle_sharp() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSharp');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
  };
};

function sidebar_toggle_synesthesia() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSynesthesia');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
  };
};

function sidebar_toggle_sound() {
  var root = document.documentElement;
  var buttonText = document.getElementById('FSSound');
  if (~root.className.indexOf(' selector')) {
    root.className = root.className.replace(' selector', '');
    buttonText.value = "EXPAND";
  } else {
    root.className += ' selector';
  };
};
