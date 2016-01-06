$(document).ready(function () {
    $("#slide").css({left: '0'});
    $("#slide2").css({left: '-100%'});
    $("#slide3").css({left: '-100%', top: '100%'});
    $("#slide4").css({left: '0', top: '100%'});
    $("#slide5").css({left: '100%', top: '100%'});
    $("#slide6").css({left: '100%'});
    
   setInterval(function() {
        
        $("#slide").stop().animate({left: '100%'}, 1000).delay(5000);  
        $("#slide2").stop().animate({left: '0%'}, 1000).delay(5000);
        $("#slide3").stop().animate({top: '0%'}, 1000).delay(5000);
        $("#slide4").stop().animate({left: '-100%'}, 1000).delay(5000);
        $("#slide5").stop().animate({left: '0'}, 1000).delay(5000);
        $("#slide6").stop().animate({top: '100%'}, 1000).delay(5000);
       
        $("#slide").animate({top: '100%'}, 1000).delay(5000);  
        $("#slide2").animate({left: '100%'}, 1000).delay(5000);
        $("#slide3").animate({left: '0%'}, 1000).delay(5000);
        $("#slide4").animate({top: '0'}, 1000).delay(5000);
        $("#slide5").animate({left: '-100%'}, 1000).delay(5000);
        $("#slide6").animate({left: '0'}, 1000).delay(5000);
       
        $("#slide").animate({left: '0'}, 1000).delay(5000);  
       
        $("#slide2").animate({top: '100%'}, 1000).delay(5000);
        $("#slide3").animate({left: '100%'}, 1000).delay(5000);
        $("#slide4").animate({left: '0'}, 1000).delay(5000);
        $("#slide5").animate({top: '0'}, 1000).delay(5000);
        $("#slide6").animate({left: '-100%'}, 1000).delay(5000);
    
        $("#slide").animate({left: '-100%'}, 1000).delay(5000);
        $("#slide2").animate({left: '0'}, 1000).delay(5000);
        $("#slide3").animate({top: '100%'}, 1000).delay(5000);
        $("#slide4").animate({left: '100%'}, 1000).delay(5000);
        $("#slide5").animate({left: '0'}, 1000).delay(5000);
        $("#slide6").animate({top: '0'}, 1000).delay(5000);
       
        $("#slide").animate({top: '0'}, 1000).delay(5000);
        $("#slide2").animate({left: '-100%'}, 1000).delay(5000);
        $("#slide3").animate({left: '0'}, 1000).delay(5000);
        $("#slide4").animate({top: '100%'}, 1000).delay(5000);
        $("#slide5").animate({left: '100%'}, 1000).delay(5000);
        $("#slide6").animate({left: '0'}, 1000).delay(5000);
       
        $("#slide").animate({left: '0'}, 1000).delay(5000);
        $("#slide2").animate({top: '0'}, 1000).delay(5000);
        $("#slide3").animate({left: '-100%'}, 1000).delay(5000);
        $("#slide4").animate({left: '0'}, 1000).delay(5000);
        $("#slide5").animate({top: '100%'}, 1000).delay(5000);
        $("#slide6").animate({left: '100%'}, 1000).delay(5000);
       
     
   }, 4500);
    
    
    $("#content").hover(function() {
        $("h1").stop().animate({opacity: '.4'}, 300);
        $("a").stop().animate({opacity: '1'}, 300);
    });
    
    $("#content").on('mouseleave', function() {
        $("h1").stop().animate({opacity: '0'}, 200);
    });
    
    $("h1").hover(function() {
        $("h1").stop().animate({opacity: '.8'}, 100);
        $("a").css({color: '#000'});
    });
    
    $("h1").on('mouseleave', function() {
        $("h1").stop().animate({opacity: '.4'}, 100);
        $("a").css({color: '#7a7a7a'});
    });
    
  
    
});