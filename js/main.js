$(function() {
  $('video').on('mouseover', function(event) {
    this.play();
    $.each($('video').not($(this)), function(i, el) {
      el.pause();
    })
  });

  $('video').on('click', function(event) {
    if(!this.paused) {
      this.pause();
    } else {
      this.play();
      $.each($('video').not($(this)), function(i, el) {
        el.pause();
      });
    }
  });

  var backgrounds = ['doge.gif', 'disc.gif', 'drumstick.gif']

  window.setInterval(function() {
    window.setTimeout(function() {
      var current = $('body').css('backgroundImage');
      var next = '';

      if(current.indexOf('doge.gif') !== -1) {
        next = 'disc.gif';
      } else if(current.indexOf('disc.gif') !== -1) {
        next = 'drumstick.gif';
      } else {
        next = 'doge.gif'
      }

      $('body').css('backgroundImage', "url(" + next + ")");
    }, 1000);
  }, 2500);
})
