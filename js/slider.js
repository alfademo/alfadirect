var SlideSpeed = 1300;
var TimeOut = 4000;
 
$(document).ready(function(e) {
    $('.slider').css(
        {"position" : "absolute",
         "top":'0', "left": '0'}).hide().eq(0).show();
    var slideNum = 0;
    var slideTime;
    slideCount = $("#slider .slide").size();
    var animSlide = function(arrow){
        clearTimeout(slideTime);
        $('.slide').eq(slideNum).fadeOut(SlideSpeed);
        if(arrow == "next"){
            if(slideNum == (slideCount-1)){
			slideNum=0;
			}
            else{slideNum++}
            }
        else if(arrow == "prev"){
            if(slideNum == 0){
			slideNum=slideCount-1;
			}
            else{
			slideNum-=1
			}
        }
        else{
            slideNum = arrow;
            }
        $('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
        $(".control-slide.active").removeClass("active");
        $('.control-slide').eq(slideNum).addClass('active');
        }
    var $adderSpan = '';
    $('.slide').each(function(index) {
            $adderSpan += '<span class = "control-slide">' + index + '</span>';
        });
    $('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('#slidercover');
    $(".control-slide:first").addClass("active");
     
    $('.control-slide').click(function(){
    var goToNum = parseFloat($(this).text());
    animSlide(goToNum);
    });
    var pause = false;
    var rotator = function(){
    if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
            }
    $('#slidercover').hover(    
        function(){
		clearTimeout(slideTime); pause = true;
		},
        function(){
		pause = false; rotator();
        }
		);
    rotator();
});