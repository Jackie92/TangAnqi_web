var content_height,content_height_1,content_height_2,content_height_3,content_height_4,content_height_5,content_height_6,content_height_7;
var current_height,window_height;

$('#light').on('animationend',function(){
    $('#light').removeClass("light").addClass("light2");
});

$('#light').on('webkitAnimationEnd',function(){
    $('#light').removeClass("light").addClass("light2");
});

$('#wings').click(function(){
    console.info("move");
    $("body").animate({
        'scrollTop' : "+="+($("#first_bg").height()-$(window).scrollTop())+"px"
    }, 500);
});

window.onload=function(){
    var height = $("#first_bg").height() - 50;
    $("#down-btn").css("marginTop",height).css("display","block");
    var videoHeight = $(".video").width()*0.631;
    $(".video").css("height",videoHeight);
    var width = $("#first_bg").width();
    $("#angel_bg").css("width",width*0.16).css("height",width*0.16*0.523);
    $("#angel_code").css("width",width*0.16).css("height",width*0.16*0.523);
    $("#angel").addClass("angel-show");
    window_height = $(window).height();
    content_height = $('#content-1').height();
    content_height_1 = $('#content-1').offset().top;
    content_height_2 = $('#content-2').offset().top;
    content_height_3 = $('#content-3').offset().top;
    content_height_4 = $('#content-4').offset().top;
    content_height_5 = $('#content-5').offset().top;
    content_height_6 = $('#content-6').offset().top;
    content_height_7 = $('#content-7').offset().top;

};

$(window).resize(function(){
    var height = $("#first_bg").height() - 50;
    $("#down-btn").css("marginTop",height);
    var videoHeight = $(".video").width()*0.631;
    $(".video").css("height",videoHeight);
    var width = $("#first_bg").width();
    $("#angel_bg").css("width",width*0.16).css("height",width*0.16*0.523);
    $("#angel_code").css("width",width*0.16).css("height",width*0.16*0.523);
    window_height = $(window).height();
    content_height = $('#content-1').height();
    content_height_1 = $('#content-1').offset().top;
    content_height_2 = $('#content-2').offset().top;
    content_height_3 = $('#content-3').offset().top;
    content_height_4 = $('#content-4').offset().top;
    content_height_5 = $('#content-5').offset().top;
    content_height_6 = $('#content-6').offset().top;
    content_height_7 = $('#content-7').offset().top;
});

$(window).scroll(function(){
    current_height = window_height+$(window).scrollTop()-content_height/1.5;
    if(!$('#content-1').hasClass('content-left-in') && current_height>content_height_1){
        $('#content-1').addClass('content-left-in');
    }
    if(!$('#content-2').hasClass('content-right-in') && current_height>content_height_2){
        $('#content-2').addClass('content-right-in');
    }
    if(!$('#content-3').hasClass('content-left-in') && current_height>content_height_3){
        $('#content-3').addClass('content-left-in');
    }
    if(!$('#content-4').hasClass('content-right-in') && current_height>content_height_4){
        $('#content-4').addClass('content-right-in');
    }
    if(!$('#content-5').hasClass('content-left-in') && current_height>content_height_5){
        $('#content-5').addClass('content-left-in');
    }
    if(!$('#content-6').hasClass('content-right-in') && current_height>content_height_6){
        $('#content-6').addClass('content-right-in');
    }
    if(!$('#content-7').hasClass('content-left-in') && current_height>content_height_7){
        $('#content-7').addClass('content-left-in');
    }
    if(!$('#content-8').hasClass('content-right-in') && current_height>content_height_7){
        $('#content-8').addClass('content-right-in');
    }
}).trigger('scroll');

function open_video(videoId){
    $('#music')[0].pause();
    switch(videoId){
        case 1:
            $('#myModalLabel').html("终审");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XNTk3MjEyNjQ4" frameborder=0 allowfullscreen></iframe>');
            break;
        case 2:
            $('#myModalLabel').html("恋爱捉迷藏");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XNzE2MzU4MDg0" frameborder=0 allowfullscreen></iframe>');
            break;
        case 3:
            $('#myModalLabel').html("逆流而上首演");
            $('#modal-body').html('<iframe src="http://www.tudou.com/programs/view/html5embed.action?type=0&code=G8fpSdpsTDw&lcode=&resourceId=404716651_06_05_99" allowtransparency="true" allowfullscreen="true" allowfullscreenInteractive="true" scrolling="no" border="0" frameborder="0" style="width:570px;height:498px;"></iframe>');
            break;
        case 4:
            $('#myModalLabel').html("广州巡演");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XMTUwMTIzODc5Ng==" frameborder=0 allowfullscreen></iframe>');
            break;
        case 5:
            $('#myModalLabel').html("第一届总选举拉票会");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XNzM0MzczMzU2" frameborder=0 allowfullscreen></iframe>');
            break;
        case 6:
            $('#myModalLabel').html("第二届总选举");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XMTMwMTMzMTAyMA==" frameborder=0 allowfullscreen></iframe>');
            break;
        case 7:
            $('#myModalLabel').html("Best30-恋爱捉迷藏");
            $('#modal-body').html('<iframe frameborder="0" width="570" height="498" src="http://v.qq.com/iframe/player.html?vid=x0019fo43ab&tiny=0&auto=0" allowfullscreen></iframe>');
            break;
        case 11:
            $('#myModalLabel').html("风大雨大，我们等你回家");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XMTUwMTIwMjQxMg==" frameborder=0 allowfullscreen></iframe>');
            break;
        case 12:
            $('#myModalLabel').html("天使振翅计划");
            $('#modal-body').html('<iframe height=498 width=570 src="http://player.youku.com/embed/XMTQ5NTEwNDA0NA==" frameborder=0 allowfullscreen></iframe>');
            break;
        case 13:
            $('#myModalLabel').html("伙伴的等待");
            $('#modal-body').html('<video width="570" height="498" src="http://us.sinaimg.cn/002CJv05jx06ZXuDIcVF05040101K31w0k02.mp4?KID=unistore,video&Expires=1458022850&ssig=%2FbFw9ociT0" poster="http://ww1.sinaimg.cn/orj480/8f14f57fjw1f1pr18at7nj20j40agwew.jpg" controls="controls" preload="metadata"></video>');
            break;
    }
}

$('#video').on('hidden.bs.modal', function () {
    $('#modal-body').html("");
    $('#music')[0].play();
});

$('#angel_code').hover(
    function(){
        $('#angel_code').removeClass("angel-code-hide").addClass('angel-code-show');
    },
    function(){
        $('#angel_code').removeClass("angel-code-show").addClass('angel-code-hide');
    }
);

$('#angel_code').click(function(){
   window.open("http://zhongchou.modian.com/item/1906.html");
});

//$('#music').on('canplay',function(){
//    $('#music')[0].play();
//});

