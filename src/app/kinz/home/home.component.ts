import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

declare  var jQuery:  any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth :AuthService ,private router:Router) { }

  ngOnInit(): void {
    
    (function ($){

      $(window).resize(function(){
        this.circleW = $(".circle-section").width();
        $(".circle-section").css('height', this.circleW + 'px');
      });
    $(document).ready(function(){
      $("#k").hover(function(){
        $("#k").attr("src","assets//k_hover.jpg");
        $("#e").attr("src","assets//e.jpg");
        $("#n").attr("src","assets//n.jpg");
        $("#z").attr("src","assets//z.jpg");
      });

      $("#e").hover(function(){
        $("#k").attr("src","assets//k.jpg");
        $("#e").attr("src","assets//e_hover.jpg");
        $("#n").attr("src","assets//n.jpg");
        $("#z").attr("src","assets//z.jpg");
      });
      $("#n").hover(function(){
        $("#k").attr("src","assets//k.jpg");
        $("#e").attr("src","assets//e.jpg");
        $("#n").attr("src","assets//n_hover.jpg");
        $("#z").attr("src","assets//z.jpg");
      });
      $("#z").hover(function(){
        $("#k").attr("src","assets//k.jpg");
        $("#e").attr("src","assets//e.jpg");
        $("#n").attr("src","assets//n.jpg");
        $("#z").attr("src","assets//z_hover.jpg");
      });
      
      
    });

    // $(window).scroll(function() {
    //    var value = $(this).scrollTop();
    //    if (value > 700){
    //     $("#mainNav .logo").attr("src", "assets//header_logo2-black.png");
    //     $("#mainNav .nav-lin").css("color", "#000");
    //     $("#mainNav .navbar").css("background-color", "transparent");
    //     $("#mainNav .navbar").css("opacity", "1");
    //    }else{
    //     $("#mainNav .logo").attr("src", "assets//header_logo2-black.png");
    //     $("#mainNav .nav-lin").css("color", "#fff");
    //     $("#mainNav .navbar").css("background-color", "transparent");
    //     $("#mainNav .navbar").css("opacity", "1");
    //    }
        
    // });
  })(jQuery);

  }

}
