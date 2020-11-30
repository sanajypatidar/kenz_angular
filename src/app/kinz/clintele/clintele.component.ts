import { Component, OnInit } from '@angular/core';
declare  var jQuery:  any;
 
@Component({
  selector: 'app-clintele',
  templateUrl: './clintele.component.html',
  styleUrls: ['./clintele.component.css']
})
export class ClinteleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (function ($){

    $(document).ready(function(){
      $("#k").hover(function(){
        $("#k").attr("src","images/k_hover.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z.jpg");
      });

      $("#e").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e_hover.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z.jpg");
      });
      $("#n").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n_hover.jpg");
        $("#z").attr("src","images/z.jpg");
      });
      $("#z").hover(function(){
        $("#k").attr("src","images/k.jpg");
        $("#e").attr("src","images/e.jpg");
        $("#n").attr("src","images/n.jpg");
        $("#z").attr("src","images/z_hover.jpg");
      });
      
      
    });

    $(window).scroll(function() {
       var value = $(this).scrollTop();
       if (value > 700){
        $("#mainNav .nav-lin").css("color", "#000");
        $("#mainNav .navbar").css("background-color", "transparent");
        $("#mainNav .navbar").css("opacity", "1");
       }else{
        $("#mainNav .logo").attr("src", "assets/images/header_logo2-black.png");
        $("#mainNav .nav-lin").css("color", "#fff");
        $("#mainNav .navbar").css("background-color", "transparent");
        $("#mainNav .navbar").css("opacity", "1");
       }
        
    });
  })(jQuery)
  }

}
