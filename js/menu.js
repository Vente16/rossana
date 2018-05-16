$(document).ready(function(){


	var event = new Date();

  var f  = new Date();
  $(".hora").append(formato(f));

    var options = { year: 'numeric', month: 'long', day: 'numeric' };

    $(".fecha-completa").append("<span class='fechaActual'>"+event.toLocaleDateString('es-ES', options)+"</span>");

    

   $("#botonMenu").click(function(){

      $(".menu").removeClass(".menu").addClass("menu-responsive");
      $(".menu ul").addClass("ul-responsive");
      $(".menu li").addClass("li-responsive");
      $(".menu a").addClass("menu-link-responsive");
      $(".menu li span").addClass("menu-span-responsive");
      $("#botonClose").show();
      $("#botonClose").addClass("btn-close-responsive");
      $(".menu").removeClass("menu");

      
   }); 

   $("#botonClose").click(function(){
       
       $(".aside").removeClass("aside-responve"); 
       $(".menu-responsive").addClass("menu");
       $(".menu-responsive").removeClass("menu-responsive");
       $("nav ul").removeClass();
       $("nav li").removeClass();
       $("nav li span").removeClass();
       $("#botonClose").removeClass("btn-close-responsive");
       $("#botonClose").css("display", "none");
      

 
   });



    function formato(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }


   


});