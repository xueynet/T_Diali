$(document).ready(function($) {
    //----------------------------
    asmonload();//初始化执行函数
    $(window).resize(function() {asmresize();}); //浏览器动态放大缩小
    $(window).bind("scroll", function(event){asmscroll();});//浏览器滚动监听函数
     //------------------------------
      function asmonload(){
        //pdappear();//是否出现在可视区域内
        zhedie();
      }//初始化监听
      function asmresize(){
        //pdappear();//是否出现在可视区域内 
        zhedie();
        if(navigator.userAgent.indexOf("MSIE 8.0")>0)
          {  
          $(".slick").css("width",$(window).width()+"px");
         }
      }//缩放监听
      function asmscroll(){
        //pdappear();//是否出现在可视区域内
      }//滚动监听
    //-----------------------------
    var jqwd;
    jqwd=$(window).width();
    if(jqwd>767){
    }
  
    
    
  //slick 设置
  if(navigator.userAgent.indexOf("MSIE 8.0")>0)
      {  
      $(".slick").css("width",$(window).width()+"px");
     }
        $(".slick").slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
          autoplay:true,
          slidesToScroll: 1
        });
      
        $(".slick2").slick({
          dots: true,
          arrows:false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 479,
              settings: {
                 slidesToShow: 2
              }
            },
            {
              breakpoint: 320,
              settings: {
                  slidesToShow: 1
              }
            }
          ]
        });
  
        $(".slick3").slick({
          dots: false,
          arrows:true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 640,
              settings: {
                 slidesToShow: 2
              }
            },
            {
              breakpoint: 479,
              settings: {
                  slidesToShow: 1
              }
            }
          ]
        });
      
      $(".slick4").slick({
          dots: false,
          arrows:true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }); 
  
        $(".slick5").slick({
          dots: false,
          arrows:true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1
        });
  
    $(".slick6").slick({
          dots: false,
          arrows:false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 959,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 479,
              settings: {
                  slidesToShow: 1
              }
            }
          ]
        });
  
  //hover图片变化
  $("img[data-hover]").hover(
      function(){   
          $(this).attr("src",$(this).attr("data-hover"));
      },
      function(){
          $(this).attr("src",$(this).attr("data-src"));
      }
      );
  //折叠
    function zhedie(){
      var jqwd1;
      jqwd1=$(window).width();
      if(jqwd1<640){
        $(".m-recruit dt").next("dd").stop().slideUp();
        $(".m-recruit").removeClass("on");
        }else{
        $(".m-recruit dt").next("dd").stop().slideDown();
        $(".m-recruit").addClass("on");
        }//if479
      if(jqwd1<768){
        $(".dc-c7 .m-recruit dt").next("dd").stop().slideUp();
        $(".dc-c7 .m-recruit").removeClass("on");
        }else{
        $(".dc-c7 .m-recruit dt").next("dd").stop().slideDown();
        $(".dc-c7 .m-recruit").addClass("on"); 
      }//if768
    }//zhedie end
  
  
  
  
  });