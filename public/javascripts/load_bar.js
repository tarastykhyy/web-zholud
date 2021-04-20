
        paceOptions = {
         ajax: true,
         elements: false,
         restartOnRequestAfter: false
            };
    
            Pace.on('hide', function() {
            $('.text_load').delay(500).animate({top: '30%', opacity: '0'}, 5000, $.bez([0.19,1,0.22,1]));
    
    
            $('#preloader').delay(1500).animate({top: '-100%'}, 1000, $.bez([0.19,1,0.22,1]));
            TweenMax.from("#preload", 2, {
                delay: 1.8,
                     y: 10,
                     opacity: 0,
                     ease: Expo.easeInOut
               })
          });
    