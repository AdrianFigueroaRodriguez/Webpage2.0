console.log('js is conected');
// Initial screen setup (.is), Menu logo (#is-ml) is hidden, and nav is transparent
setTimeout(function() {
    $('.is').css('opacity', '100%');    
    $('#is-ml').css('opacity', '0.01%');
    $('nav').css('background-color', 'transparent');
}, 50);

setTimeout(function(){
    $('#is-l').css('opacity', '0.01%');
    $('#is-s').css('opacity', '0.01%'); 
    $('#is-ml').css('visibility', 'visible');
    $('#is-ml').css('opacity', '100%');
    $('nav').css('background-color', '#2699FB');
}, 3000);

var media_size = [
    window.matchMedia("(max-width: 575.98px)"),
    window.matchMedia("(max-width: 729.98px)"),
    window.matchMedia("(max-width: 991.98px)"),
    window.matchMedia("(max-width: 1199.98px)"),
    window.matchMedia("(min-width: 1200px)")
] 

function videoScale(){
    //XS
    if(window.matchMedia("(max-width: 575.98px)").matches){
        document.getElementById("ms-vp-c").style.height = "50vh",
        document.getElementById("ms-vp-v").style.height = "50vh"; 
    }
    //SM
    if(window.matchMedia("(max-width: 729.98px)").matches && window.matchMedia("(min-width: 575.99px)").matches ){
        document.getElementById("ms-vp-c").style.height = "50vh",
        document.getElementById("ms-vp-v").style.height = "50vh";
    }
    //MD
    if(window.matchMedia("(max-width: 991.98px)").matches && window.matchMedia("(min-width: 729.98px)").matches ){
        document.getElementById("ms-vp-c").style.height = "50vh",
        document.getElementById("ms-vp-v").style.height = "50vh";
    }
    //LG & XL
    if(window.matchMedia(window.matchMedia("(min-width: 991.98px)").matches)){
        document.getElementById("ms-vp-c").style.height = "50vh",
        document.getElementById("ms-vp-v").style.height = "50vh";
    }
};

for(var i=0; i< media_size.length; i++){
    media_size[i].addListener(videoScale);
}


setTimeout(function(){
    $('#is-l').remove();
    $('#is-s').remove();
    $('.ms').css('opacity', '100%');
    $('#ms-vp-c').css('min-height', '400px');
    $('#ms-vp-v').css('opacity', '100%');
    $('#ms-vp-v').css('min-height', '400px');
    $('#ms-vp-v').css('background-color', 'black');
    $('.f').css('height', '240px');
    $('.fs').css('height', '190px');
    $('.fi').css('height', '50px');
    $('.f').css('opacity', '100%');
    videoScale();
    $('#ms-ns-sc').css('height', '100%');
}, 5000);


