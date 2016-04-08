(function (global) {
    var jac = {};

    //cookie操作
    jac.cookie = {
    	//获取cookie
        get: function getCookie(name) {
            var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
                val = document.cookie.match(reg);
            return val ? (val[2] ? unescape(val[2]) : "") : null;
        },
        //设置cookie
        set: function setCookie(name, value, expires, path, domain, secure) {
            var exp = new Date(),
                expires = arguments[2] || null,
                path = arguments[3] || "/",
                domain = arguments[4] || null,
                secure = arguments[5] || false;
            expires ? exp.setMinutes(exp.getMinutes() + parseInt(expires)) : "";
            document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ?
                ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
        },
        //删除cookie
        del: function delCookie(name, path, domain, secure) {
            var value = getCookie(name);
            if (value != null) {
                var exp = new Date();
                exp.setMinutes(exp.getMinutes() - 1000);
                path = path || "/";
                document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ?
                    ';domain=' + domain : '') + (secure ? ';secure' : '');
            }
        },
    };
    //本地存储localStorage
	jac.localStorage = {
		//获取localStorage
        get: function get(k){
			var v = window.localStorage.getItem(k);
			if(v){
				return JSON.parse(v);
			} else {
				return undefined;
			}
		},
		//设置localStorage
		set: function set(k, v){
			if(!window.localStorage) { 
				return false; 
			}
			var str;
			try {
				window.localStorage.removeItem(k);
				str = JSON.stringify(v);
				window.localStorage.setItem(k, str);
			    return true;
			} catch(e) {
			   return false;
			}
		},
		//删除localStorage
		del: function del(k){  
			window.localStorage.removeItem(k); 
		},
		//清除localStorage
		clear: function clear(){  
			window.localStorage.clear();
		},
		//获取localStorage的key
		key: function key(i){
			return window.localStorage.key(i);
		},
    };
    //本地存储sessionStorage
	jac.sessionStorage = {
		//获取sessionStorage
        get: function get(k){
			var v = window.sessionStorage.getItem(k);
			if(v){
				return JSON.parse(v);
			} else {
				return undefined;
			}
		},
		//设置sessionStorage
		set: function set(k, v){
			if(!window.sessionStorage) { 
				return false; 
			}
			var str;
			try {
				window.sessionStorage.removeItem(k);
				str = JSON.stringify(v);
				window.sessionStorage.setItem(k, str);
			    return true;
			} catch(e) {
			   return false;
			}
		},
		//删除sessionStorage
		del: function del(k){  
			window.sessionStorage.removeItem(k); 
		},
		//清除sessionStorage
		clear: function clear(){  
			window.sessionStorage.clear();
		},
		//获取sessionStorage的key
		key: function key(i){
			return window.sessionStorage.key(i);
		},
    };
    //校验相关
	jac.validate = {
    	//是否必填
		isNotNull: function(element) {
			return element.val() != ""&&element.length >0;
		},	
		//是否为有效的电子邮件
		isEmail: function(element) {
		    var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;   
			return reg.test(element.val());
		},
		//是否为有效的网址
		isUrl: function(element) {
			var reg = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;   
			return reg.test(element.val());
		},
		//是否为有效的日期
		isDate: function(element) {			
			return !/Invalid|NaN/.test(new Date(element.val()).toString());
		},
		//是否为有效的日期 (YYYY-MM-DD)
		isDateISO: function(element) {
			var reg = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;   
			return reg.test(element.val());
		},
		//是否为正确的数字
		isNumber: function(element) {
			var reg = /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;   
			return reg.test(element.val());
		},
		//只能输入数字
		isDigits: function(element) {
			var reg = /^\d+$/;   
			return reg.test(element.val());
		},
		//最少 {0} 个字
		isMinlength: function(element,minlength) {
			var length = element.length;
			return length >= minlength;
		},
		//最多 {0} 个字
		isMaxlength: function(element,maxlength) {
			var length = element.length;
			return length <= maxlength;
		},
		//值是否相等
		isEqualTo: function(element1,element2) {
			return element1.val() === element2.val();
		},
    };

    //登录相关
	jac.login = {
        //获取token
    	getToken: function getToken() {
	    	return  jac.cookie.get("access_token");
	    },
	  	//验证是否登录
	    isLogin:function isLogin() {
	    	if(jac.login.getToken()==null||jac.login.getToken()==""||jac.login.getToken()=="\"\""){
	    		return false;
	    	}else{
	    		return true;
	    	}
	    },
	    //去登录
	    goToLogin: function goToLogin(rurl) {
	    	if(rurl==undefined||rurl==null||rurl==""){
	    		rurl = location.href;
	    	}
	        if(!jac.login.isLogin()){
	           location.href =
				   jac.basePath + "/login.htm?rurl="+ encodeURIComponent(rurl);
	        }       
	    },
	    //检测本地是否登录，如果登录则继续执行
	    doLoginFunction: function doLoginFunction(callback) {
	    	if(!jac.login.isLogin()){
				jac.login.goToLogin();
	        }else{
	        	 callback && callback();
	        }
	    },
	    //检测从服务器返回的json数据，是否有未登录错误
	    checkJsonDataIsLogin: function checkJsonDataIsLogin(data) {
	    	//10001:缺少参数access_token
	    	//10002:参数access_token不合法
	    	if(data.code == 10001 || data.code == 10002){
				jac.login.goToLogin();
	    		return;
	    	}
	    },
    };
    //ajax操作
	jac.ajax = {
    	//post请求
    	post: function post(opt,callback){
    		opt.type = "post";
    		loginRequest(opt,callback);    		
    	},
    	//get请求
    	get: function get(opt,callback){
    		opt.type = "get";
    		loginRequest(opt,callback);   
    	},	    		    	   	
    };
    //判断请求是否需要登录
    function loginRequest(opt,callback){
    	
    	if(opt.isToken==undefined||opt.isToken!=false){
			opt.isToken = true;
		};
		if(opt.isToken){
			jac.login.doLoginFunction(request(opt,callback));
		}else{
			request(opt,callback);
		}
    };
    //发起请求
    function request(opt,callback){
    	if (opt.data == undefined||typeof (opt.data) == 'object') {
            var param = [];
            for (var k in opt.data) {
                param.push(k + '=' + opt.data[k])
            }
            if(jac.login.getToken()!=null&&jac.login.getToken()!=""){
            	  param.push('access_token=' + jac.login.getToken());
        	}
            if(jac.login.getToken()!=null&&jac.login.getToken()!=""){
		      	  param.push('t=' + Math.random());
		  	}
            if (param.length > 0) {
                param = param.join('&');
                opt.url += (opt.url.indexOf('?') > 0 ? '&' : '?') + param;
            }
        }
    	$.ajax(
    		{
	            url: opt.url,
	            type: opt.type,
	            processData: false,
	            timeout: 15000,
	            dataType: "jsonp",
	            jsonp: "callback",
	            success: function(result) {
					jac.login.checkJsonDataIsLogin(result);
	            	callback && callback(result);
	            }
	        }
    	);
    };
    window[global] = jac;
}("JAC"));
//实现String的format方法
String.prototype.format = function (values) {
    return this.replace(/\{\{([\w\s\.\'\"\(\),-\[\]]+)?\}\}/g, function(match, key) {
        return values[key];
    });
};
