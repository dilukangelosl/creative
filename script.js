$(document).ready(function () {
    new WOW().init();
    $('.menuOverlay').fadeOut();
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: false,
        sectionSelector: '.section',
        animateAnchor: true,

        //events
        onLeave: function (index, nextIndex, direction) {
           
         },
        afterLoad: function (anchorLink, index) { 
           if(index ==1){
            playAudio();
           }else if(index == 2 ){
               pauseAudio();
           }
        },
        afterRender: function () { },
    });


    var x = document.getElementById("audio"); 
    x.play();
function playAudio() { 
$("#audio").animate({volume: 1}, 1500);

} 

function pauseAudio() { 
$("#audio").animate({volume: 0}, 1500);

}
   
playAudio();






    var speed = 60;
    var letter = document.getElementById("letter");
    var tl = new TimelineMax({ repeat: -1 });
    tl.to(letter, speed, { backgroundPosition: "2500px 3000px", ease: Linear.easeNone });

    $('#section1').mousemove(function (res) {



        speed = 20;
        tl.duration(speed)
        setTimeout(function (r) {
            speed = 60;
            tl.duration(speed)
        }, 1000)

    })



    $('.l2').hover(function () {
        var bg = $(this).css('background-image');
        bg = bg.replace('url(', '').replace(')', '').replace(/\"/gi, "");

        $('.main').css({ "background": "url(" + bg + ")", "background-size": "cover", "background-repeat-x":"repeat" });
    })




    var quotes = [
        {
            title: "Milton Glaser",
            content: "There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for."
        },
        {
            title: "Paul Rand",
            content: "The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring."
        },
        {
            title: "Stefan Sagmeister",
            content: "You can have an art experience in front of a Rembrandt… or in front of a piece of graphic design."
        },
        {
            title: "David Carson",
            content: "Graphic design will save the world right after rock and roll does."
        },
        {
            title: "Bob Gill",
            content: "I’ve never had a problem with a dumb client. There is no such thing as a bad client. Part of our job is to do good work and get the client to accept it."
        }
    ];
    var randomindex = Math.floor(Math.random() * quotes.length);
    setTimeout(function(){
    $("#loader-wrapper").fadeOut();
    var typed = new Typed('.quotetext', {
        strings: ["", quotes[randomindex].content],
        typeSpeed: 40
    });
    $('.aurthor').append(quotes[randomindex].title);
    
   },200);

   $('.menuOverlay').vide({
    mp4: "menuvideo.mp4",
    poster: "poster.png"
  },
  {
    
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%', // Similar to the CSS `background-position` property.
    posterType: 'png', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    resizing: true // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing

  });
    
  var typed = null ;
  function startQuote(){
    var randomindex = Math.floor(Math.random() * quotes.length);
    setTimeout(function(){
      typed = new Typed('.mquotetext', {
        strings: [ quotes[randomindex].content],
        typeSpeed: 20,
        fadeOut:true,
        showCursor:false
    });

    $('.maurthor').html("");
    $('.maurthor').append(quotes[randomindex].title);
    
   },1500);
  }


   $('#menuIcon').click(function(){
       $('#mainMenu').css("left","0px");
       
       function showMenu(){
        $('#mainMenu').css("-webkit-clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");

        $('#menuIcon').animate({right:'-100px'},300);
        $('.menuOverlay').fadeIn();
        $('.maurthor').animate({opacity: 1}, 3000);
        $('.mquotetext').animate({opacity: 1}, 3000);
        startQuote();
       }
       setTimeout(showMenu,100);
   })

   $('#close').click(function(){
    $('#mainMenu').css("-webkit-clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
    if(typed != null){
        typed.destroy();
    }
    
    $('.maurthor').html("");
    $('.mquotetext').html("");
    function hideMenu(){
        $('#mainMenu').css("left","-300px");
        $('.maurthor').animate({opacity: 0}, 1000);
        $('.mquotetext').animate({opacity: 0}, 1000);
        $('#menuIcon').animate({right:'50px'},300);
        $('.menuOverlay').fadeOut();
       
       }
       setTimeout(hideMenu,100);
   })

   

});