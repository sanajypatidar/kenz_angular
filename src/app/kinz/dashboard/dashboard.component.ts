import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
declare  var jQuery:  any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private auth :AuthService ,private router:Router ) { }

  ngOnInit(): void {
  
    (function ($){
      
      $(window).resize(function(){
        this.circleW = $(".circle-section").width();
        $(".circle-section").css('height', this.circleW + 'px');
      });
  
    $(document).ready(function(){

    	this.circleW = $(".circle-section").width();
    	$(".circle-section").css('height', this.circleW + 'px');
    	//alert(circleW);

    	$(".circle-section").click(function(){
    		this.targetId = $(this).attr('targetid');
        $("#circle-steps").removeAttr('class');
        $("#circle-steps").attr('class', 'clearfix cir-' + this.targetId);
    		// alert(targetId);
    		$(".circle-section, .circle-text").removeClass('active');
    		$('.circle-text').hide();
    		$('#steptext-' + this.targetId).show();
    		$('#steptext-' + this.targetId).addClass('active');
    		$(this).addClass('active');
    	})

      $("#k").hover(function(){
        $("#k").attr("src","assets/images/k_hover.jpg");
        $("#e").attr("src","assets/images/e.jpg");
        $("#n").attr("src","assets/images/n.jpg");
        $("#z").attr("src","assets/images/z.jpg");
      });

      $("#e").hover(function(){
        $("#k").attr("src","assets/images/k.jpg");
        $("#e").attr("src","assets/images/e_hover.jpg");
        $("#n").attr("src","assets/images/n.jpg");
        $("#z").attr("src","assets/images/z.jpg");
      });
      $("#n").hover(function(){
        $("#k").attr("src","assets/images/k.jpg");
        $("#e").attr("src","assets/images/e.jpg");
        $("#n").attr("src","assets/images/n_hover.jpg");
        $("#z").attr("src","assets/images/z.jpg");
      });
      $("#z").hover(function(){
        $("#k").attr("src","assets/images/k.jpg");
        $("#e").attr("src","assets/images/e.jpg");
        $("#n").attr("src","assets/images/n.jpg");
        $("#z").attr("src","assets/images/z_hover.jpg");
      });
      
      
    });

    $(window).scroll(function() {
       var value = $(this).scrollTop();
       if (value > 700){
        $("#mainNav .logo").attr("src", "assets/images/header_logo2-black.png");
        $("#mainNav .nav-lin").css("color", "#000");
        $("#mainNav .navbar").css("background-color", "transparent");
        $("#mainNav .navbar").css("opacity", "1");
       }else{
        $("#mainNav .logo").attr("src", "assets/images/header_logo2.png");
        $("#mainNav .nav-lin").css("color", "#fff");
        $("#mainNav .navbar").css("background-color", "transparent");
        $("#mainNav .navbar").css("opacity", "1");
       }
        
    });
  
  



    })(jQuery)
  }

}
