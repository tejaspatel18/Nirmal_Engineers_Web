  /*

  November Template

  http://www.templatemo.com/tm-473-november

  */



  // <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
  // <div style="overflow:hidden;height:500px;width:600px;">
  // <div id="gmap_canvas" style="height:500px;width:600px;">
  // <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
  // <a class="google-map-code" href="http://www.themecircle.net" id="get-map-data">wordpress themes</a>
  // </div>
  // </div>
  // <script type="text/javascript"> 
  // function init_map()
  // {var myOptions = {zoom:17,center:new google.maps.LatLng(23.030297049088603,72.67393616665231),mapTypeId: google.maps.MapTypeId.ROADMAP};
  // map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  // marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(23.030297049088603, 72.67393616665231)});
  // infowindow = new google.maps.InfoWindow({content:"<b>Nirmal Engineers</b><br/>12/13, Neelkanth Avenue, Nr. Kailash Estate, Sardar Patel Ring Rd, Odhav<br/>382415 Ahmedabad" });
  // google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
  // infowindow.open(map,marker);}
  // google.maps.event.addDomListener(window, 'load', init_map);
  // </script>






/* Google Maps
------------------------------------------------*/
var map = '';
var center;

// <div style="overflow:hidden;height:500px;width:600px;">
//    <div id="gmap_canvas" style="height:500px;width:600px;">
//    <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
//    <a class="google-map-code" href="http://www.themecircle.net" id="get-map-data">wordpress themes</a>
//    </div>
//    </div>

/*function initialize() {
  var mapOptions = {
    zoom: 19,
    center: new google.maps.LatLng(23.030297049088603,72.67393616665231),
    scrollwheel: false,
    draggable:false

   //  var myOptions = {zoom:17,center:new google.maps.LatLng(23.030297049088603,72.67393616665231),mapTypeId: google.maps.MapTypeId.ROADMAP};

  // marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(23.030297049088603, 72.67393616665231)});

  };
//map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  map = new google.maps.Map(document.getElementById('GoogleMap'),  mapOptions);
  // infowindow = new google.maps.InfoWindow({content:"<b>Nirmal Engineers</b><br/>12/13, Neelkanth Avenue, Nr. Kailash Estate, Sardar Patel Ring Rd, Odhav<br/>382415 Ahmedabad" });
  // google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
  // infowindow.open(map,marker);

  google.maps.event.addDomListener(map, 'idle', function() {
    calculateCenter();
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(center);
  });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}*/

/* onScroll function
----------------------------------------*/
function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('nav li a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('nav ul li').removeClass("active");
      currentLink.parent().addClass("active");
    }
    else{
      currentLink.parent().removeClass("active");
    }
  });
}

/* HTML Document is loaded and DOM is ready.
--------------------------------------------*/
$(document).ready(function(){
  //slider
  var sudoSlider = $("#slider").sudoSlider({
   effect: "fade",
   pause: 3000,
   auto:true,
   continuous:true
 });

  //mobilemenu
  $('.mobile').click(function(){
    var $self = $(this);
    $('.menumobile').slideToggle( function(){
      $self.toggleClass('closed');
    });
  });

  //navigation script
  $('.Navigation ul li a').click(function(){
    $('.menumobile').removeAttr("style");
    $('#mobile_sec .mobile').removeClass("closed");
  });

  $('a.slicknav_btn').click(function(){
    $(".mobilemenu ul").css({"display":"block"});
  });

  //tab
  $(".tabLink").each(function(){
    $(this).click(function(){
      tabeId = $(this).attr('id');
      $(".tabLink").removeClass("activeLink");
      $(this).addClass("activeLink");
      $(".tabcontent").addClass("hide");
      $("#"+tabeId+"-1").removeClass("hide");
      return false;
    });
  });
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname)
    {
      var target = $(this.hash),
      headerHeight = $(".primary-header").height() + 5; // Get fixed header height
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length)
      {
        $('html,body').animate({
          scrollTop: target.offset().top + 2
        }, 600);
        return false;
      }
    }
  });	

  //Header Small
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 50;
    
    if (distanceY > shrinkOn) {
      $('header').addClass("smaller");
    } else {
      $('header').toggleClass("smaller");
    }
  });
  


}); 

$(document).on("scroll", onScroll);

// Complete page is fully loaded, including all frames, objects and images
$(window).load(function() {
  // Remove preloader
  // https://ihatetomatoes.net/create-custom-preloading-screen/
  $('body').addClass('loaded');
});

