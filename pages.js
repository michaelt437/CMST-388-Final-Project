$(document).ready(function() {
    
    $(".active_day").css({opacity: '1', zIndex: '1', left: '325px'});
    
    $("#daylinks").click(function(event) {
        event.preventDefault();
    });
    
    $("#daylinks, .active_day").hover(function() {
        
        $("#daylinks").css({'background-color': '#F28538'});
        
            $("#day1").stop().animate({left: '325px'}, 1);
            $("#day1").animate({opacity: '1'}, 1);
            $("#day1").css({zIndex: '1'});
        
            $("#day2").stop().animate({left: '383'}, 1);
            $("#day2").animate({opacity: '1'}, 1);
            $("#day2").css({zIndex: '1'});
        
            $("#day3").stop().animate({left: '441'}, 1);
            $("#day3").animate({opacity: '1'}, 1);
            $("#day3").css({zIndex: '1'});
        
            $("#day4").stop().animate({left: '499'}, 1);
            $("#day4").animate({opacity: '1'}, 1);
            $("#day4").css({zIndex: '1'});
        
            $("#day5").stop().animate({left: '557'}, 1);
            $("#day5").animate({opacity: '1'}, 1);
            $("#day5").css({zIndex: '1'});
        
            $("#day6").stop().animate({left: '615'}, 1);
            $("#day6").animate({opacity: '1'}, 1);
            $("#day6").css({zIndex: '1'});
        
    });
    

    
    $("#nav").on('mouseleave', function() {
        $("#daylinks").css({'background-color': 'black'});
        
        if($("#day1").hasClass('active_day')){
            $("#day1").stop().animate({left: '325px'}, 1);
            $("#day1").css({opacity: '1', zIndex: '1'});
        }else{
            $("#day1").stop().animate({left: '300px'}, 1);
            $("#day1").animate({opacity: '0'}, 0);
            $("#day1").css({zIndex: '-1'});
        }
        
        if($("#day2").hasClass('active_day')){
            $("#day2").stop().animate({left: '325px'}, 1);
            $("#day2").css({opacity: '1', zIndex: '1'});
        }else{
        $("#day2").stop().animate({left: '300'}, 1);
        $("#day2").animate({opacity: '0'}, 0);
        $("#day2").css({zIndex: '-1'});
        }
        
        if($("#day3").hasClass('active_day')){
            $("#day3").stop().animate({left: '325px'}, 1);
            $("#day3").css({opacity: '1', zIndex: '1'});
        }else{
        $("#day3").stop().animate({left: '300'}, 1);
        $("#day3").animate({opacity: '0'}, 0);
        $("#day3").css({zIndex: '-1'});
        }
        
        if($("#day4").hasClass('active_day')){
            $("#day4").stop().animate({left: '325px'}, 1);
            $("#day4").css({opacity: '1', zIndex: '1'});
        }else{
        $("#day4").stop().animate({left: '300'}, 1);
        $("#day4").animate({opacity: '0'}, 0);
        $("#day4").css({zIndex: '-1'});
        }
        $("#day5").stop().animate({left: '300'}, 1);
        $("#day5").animate({opacity: '0'}, 0);
        $("#day5").css({zIndex: '-1'});
        
        $("#day6").stop().animate({left: '300'}, 1);
        $("#day6").animate({opacity: '0'}, 0);
        $("#day6").css({zIndex: '-1'});
    });
    
});