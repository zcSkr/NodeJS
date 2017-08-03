$(function(){

    //导航栏点击事件
    $("#navUL>li").click(function(){
        $("#navUL>li").removeClass("clickLi");
        $(this).addClass("clickLi");
    });

    //显示文字效果
    $(".focus_picture").hover(function(){
        $(".maskTitle").eq($(this).index()).show();
    },function(){
        $(".maskTitle").hide();
    });

    //ting的效果
    $(".ting-img").hover(function(){
        $(this).children().eq(0).css("transform","scale(1.1)");
        $(this).children().eq(1).css("opacity",0.4)
    },function(){
        $(this).children().eq(0).css("transform","scale(1)");
        $(this).children().eq(1).css("opacity",0);
    });

    //底部图标hover效果
    var imgArr = ["../img/foot-app.png","../img/foot-sina.png","../img/foot-wechat.png"];
    var imgArrH = ["../img/foot-appH.png","../img/foot-sinaH.png","../img/foot-wechatH.png"];
    $(".app-icon").each(function(ind){
        $(".app-icon").eq(ind).hover(function(){
            $(this).attr("src",imgArrH[ind]);
            if(ind == 2){
                $("#ewCode").show();
            }
        },function(){
            $(this).attr("src",imgArr[ind]);
            if(ind == 2){
                $("#ewCode").hide();
            }
        });
    });

    //顶部导航栏效果
    var initTop = 0;
    $(window).scroll(function(){
        var scrollTop = $(document).scrollTop();
        if(scrollTop > initTop){
            if(scrollTop >= $("nav").height()){
                $("nav").slideUp("fast");
            }
            if(scrollTop >= 980){
                $("#backTop").show();
            }
        } else {
            $("nav").slideDown("fast");
            $("#backTop").hide();
        }
        initTop = scrollTop;
    });
    //回到顶部
    $("#backTop").click(function(){
        $(document).scrollTop(0);
    })


});