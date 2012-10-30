function makeSingleClock(element, options) {
  function update() {
    var date = options.getDate();
    element.innerHTML = options.formatDate(now)
  }
  update();
  setInterval(update, 1000);
}

function makeClock(elements, options) {
  options = options || {};
  //default to local time
  options.getDate = options.getDate||function(){
    return new Date();
  };
  //default to time string
  options.formatDate = options.formatDate||function(date){
    return date.toTimeString();
  };
  if (typeof elements === 'string') {
    makeClock(document.querySelectorAll(elements), options);
  } else if (typeof elements.length === 'number') {
    for (var i = 0; i < elements.length; i++) {
      makeSingleClock(elements[i], options);
    }
  } else {
    makeSingleClock(elements, options);
  }
}
module.exports = makeClock;