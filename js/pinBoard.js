/**
 * Created by jac on 16/4/8.
 */
var Pin = {
    pageNo : "",
    count : "",
};

$(function () {
    Pin.getMsgList(1);
    Pin.bindEvent();
});

Pin.getMsgList = function(_pageNo){
    //组装数据
    var opt = {
        url:"http://sweety0907.dear48.com/index.php?m=content&c=index&a=message_select",
        data:{
            pageNo : _pageNo,
        },
        isToken:false,
    };
    //ajax请求
    JAC.ajax.get(opt,getList);

    function getList (json){
        //json = Pin.fake();
        console.log(json);
        if(json.info.list.length == 0){
            $("#more").hide();
            return;
        }
        Pin.showList(json.info);
    };
};

Pin.showList = function(data){
    var list = data.list;
    Pin.count = data.count;
    Pin.pageNo = data.pageNo;
    var row_str = "<li>"+
                    "<div>"+
                        "<small>{{0}}</small>"+
                        "<h4>{{1}}</h4>"+
                        "<p>{{2}}</p>"+
                    "</div>"+
                  "</li>";

    var row = "";
    for(var i in list){
        var n = list[i];
        var author = n.author;
        var msg = n.detail;
        var date = n.date;
        row += row_str.format([date,author,msg]);
    }
    $("ul.notes").append(row);
};

Pin.bindEvent = function(){

    $("#send").on("click",function(){
        Pin.sendMsg();
    });

    $("#more").on("click",function(){
        Pin.getMore();
    });
};

Pin.getMore = function(){
    if(Pin.count < 15){
        alert("没有更多啦!");
    }
    else{
        Pin.pageNo++;
        Pin.getMsgList(Pin.pageNo);
    }
};

Pin.fake = function(){
    var j = {
        "code": 0,
        "info": {
            "count": 3,
            "pageNo": 1,
            "list": [
                {
                    "author":"哟西",
                    "detail":"唐安琪我们爱你",
                    "date":"2016-01-01 11:11:11"
                },
                {
                    "author":"哟西",
                    "detail":"唐安琪我们爱你",
                    "date":"2016-01-01 11:11:11"
                },
                {
                    "author":"哟西",
                    "detail":"唐安琪我们爱你",
                    "date":"2016-01-01 11:11:11"
                }
                ]
            }
        };
    return j;
};

Pin.sendMsg = function(){
    var _author = $("#name_input").val();
    var msg = $("#msg_content").val();

    if(_author == "" || _author == null || _author == undefined){
        alert("请填写您的昵称或者ID!");
        return;
    }
    if(msg == "" || msg == null || msg == undefined){
        alert("请填写您想对小姐姐说的话!");
        return;
    }

    //组装数据
    var opt = {
        url:"http://sweety0907.dear48.com/index.php?m=content&c=index&a=message_add",
        data:{
            author : _author,
            detail : msg,
        },
        isToken:false,
    };
    //ajaxPost请求
    JAC.ajax.post(opt,postMsg);

    function postMsg (json){
        alert(json.message);
    };
};