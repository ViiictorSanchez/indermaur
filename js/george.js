$( document ).ready(function() {

    /* Shoe styles */

    var quotes = $(".shoes-style");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .show()
            .animate({fontSize: '1em'}, 500)
            .fadeOut(700, showNextQuote)
            .animate({fontSize: '0.7em'}, 500);
    }

    showNextQuote();

    /* Numbers counter */

    $(window).scroll(function() {
      var size_matters = $('#section-numbers');
      var hT = size_matters.offset().top,
          hH = size_matters.outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      var done = false;
      if (wS > (hT+hH-wH)){

        $('.number').each(function () {

          $(this).prop('Counter',0).animate({
            Counter: $(this).text()
          }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
              $(this).text( Math.ceil(now) );
            },
            complete: function() {
              $(this).text(Counter);
            }
          });

        });

      }
    });

    /* History next buttons */

    $('.history-step .next a').click(function() {
        var current = $(this).data('id');
        var next = current + 1;
        if( current == 9 ) next = 1;
        $('#history-step-'+current).hide();
        $('#history-step-'+next).fadeIn();
    });

    /* Floating back to top */

    var amountScrolled = 300;

    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.floating-back-to-top').fadeIn('slow');
        } else {
            $('a.floating-back-to-top').fadeOut('slow');
        }
    });

});