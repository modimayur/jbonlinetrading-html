$(function () {
    $(window).on('load', function () {
        $("#loader").fadeOut();
    });
    $(document).ready(function(){
      if ( $( "#countdown" ).length ) {
        (function () {
          const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;
        
          let birthday = "Sep 30, 2021 00:00:00",
              countDown = new Date(birthday).getTime(),
              x = setInterval(function() {    
        
                let now = new Date().getTime(),
                    distance = countDown - now;
        
                document.getElementById("days").innerText = Math.floor(distance / (day)),
                  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        
                //do something later when date is reached
                if (distance < 0) {
                  let headline = document.getElementById("headline"),
                      countdown = document.getElementById("countdown"),
                      content = document.getElementById("content");
        
                  headline.innerText = "It's my birthday!";
                  countdown.style.display = "none";
                  content.style.display = "block";
        
                  clearInterval(x);
                }
                //seconds
              }, 0)
          }());
      }

      var s =  $('#scrollVBottom');
     if ($(s).length ) {
       $(s).animate({ scrollTop: $(s).prop("scrollHeight")}, 1000);
     }
        $('select.selectize').selectize({
              create: true,
              sortField: 'text',
              load: function(query, callback) {
                var self = this;
                console.log(self);
              }
          });
          // show current input values
        $('select.selectized').each(function() {
            var $input = $(this);
            var $value = $('.orientationBox');
            var update = function(e) { 
                console.log(JSON.stringify($input.val()));
                $value.find('span').text($input.val()); 
                $value.attr('class', 'orientationBox orientation-'+$input.val());
            }
            $(this).on('change', update);
            update();
        });
      });
    // Document https://github.com/selectize/selectize.js/blob/master/docs/usage.md

});