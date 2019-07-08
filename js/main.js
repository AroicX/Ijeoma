import $ from "jquery";
import Fade from "./transition";

$( document ).ready(function() {
    
    $(".nav-menu").click(function(){
      
        $(".mobile").slideToggle( "slow" );
      
    });


    $(".nav-search").click(function(){
      
      	 $(".backdrop").toggle( "slow");
        $(".wrapper").toggle( "slow");
      
    });

    $(".backdrop").click(function(){
      
      	 $(".backdrop").fadeOut(400);
        $(".wrapper").fadeOut(300);
      
    });


});
