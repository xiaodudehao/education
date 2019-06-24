var HTTP_URL = "http://192.168.1.126/lanhong/index.php/Admin/"
var HTTP_URLH ="http://192.168.1.126/lanhong/index.php/Home/"

// 保存图片地址的变量
var imgsrc = "http://192.168.1.126/lanhong/Public/img/";
var imgsrc2 = "http://192.168.1.126/lanhong/Application/Admin/Public/upload/";
var imgsrc3 = "http://192.168.1.126/lanhong/Application/Home/Public/touxiang/";
var imgsrc4 =  "http://192.168.1.126/lanhong/Application/Admin/Public/school/";
//保存视频地址
var videosrc = "http://192.168.1.126/lanhong/Application/Home/Public/";
// 保存头像图片名称的变量。
var imgname;
//保存学校的名称数组
var schoolname;

var cc;

var url = location.href
var urlarr = url.split("=")
var cid = urlarr[urlarr.length - 1]
// console.log(cid)

// //提示框初始化，toast-top-center表示提示框的位置
// toastr.options = {
//     positionClass: 'toast-top-center', // 提示框位置
//     closeButton: true  // 是否显示关闭按钮
// }
// 模态框居中
modalCenter('#myModal')
modalCenter('#myModal1')

//获取学校下拉框中要展示的内容
$.ajax({
    type:"get",

    url: "http://192.168.1.126/lanhong/index.php/Home/Index/set_school",

    dataType:"json",
   
    success:function(data){
        // console.log("学校",data);
        schoolname = data
        school()
    },
    error:function(jqXHR){
        console.log("发生错误:"+jqXHR.status);
    }
});
// 从localastorage中取学校数据渲染到页面注册模态框中的多选框。
function school(){
    if(schoolname != undefined){
        // console.log(schoolname);
        localStorage.setItem('schoolname',JSON.stringify(schoolname));
        var str="";
        for(var i=0;i<schoolname.length;i++){
            str += '<option value="'+schoolname[i].name+'">'+schoolname[i].name+'</option>'
        }
       str += '<option value="其它">其它</option>'
        // console.log(str);
        $(".selectvalue").html(str);
        // localStorage.removeItem('schoolname');
    }else{
        schoolname = JSON.parse(localStorage.getItem('schoolname'));
        // console.log(schoolname)
        // 由于在测试的时候有些页面还没有连接起来，所以没有localstorage的值。为了防止报错，就直接提跳出了。
        if(schoolname == undefined){
            return;
        }
        var str="";
        for(var i=0;i<schoolname.length;i++){
            str += '<option value="'+schoolname[i].name+'">'+schoolname[i].name+'</option>'
        }
       str += '<option value="其它">其它</option>'
        // console.log(str);
        $(".selectvalue").html(str);
    }
}   
school()
    

$(".course_resources").attr('href','./repository.html?cid='+ cid +'');
$(".teacher_href").attr('href','./teacher_team.html?cid='+ cid +'');
$(".introduction_href").attr('href','./course_introduction.html?cid='+ cid +'');
$(".catalog_href").attr('href','./course_catalog.html?cid='+ cid +'');
$(".announcement_href").attr('href','./course_announcement.html?cid='+ cid +'');
$(".criteria_href").attr('href','./scoring_criteria.html?cid='+ cid +'');
$(".test_href").attr('href','./course_test.html?cid='+ cid +'');
$(".course_discussion").attr('href','./discussion.html?cid='+ cid +'');
$(".course_class").attr('href','./add_class.html?cid='+ cid +'');
$(".course_sum").attr('href','./coursestatistics.html?cid='+ cid +'');
$(".course_study_sum").attr('href','./learstatistics.html?cid='+ cid +'');

//  学生课程页面跳转
$(".left_menu_coursehomepage").attr('href','./coursehomepage.html?c_id='+ cid +'');
$(".left_menu_scoresranking").attr('href','./scoresranking.html?c_id='+ cid +'');
$(".left_menu_announcement").attr('href','./announcement.html?c_id='+ cid +'');
$(".left_menu_standard").attr('href','./standard.html?c_id='+ cid +'');
$(".left_menu_onlinestudy").attr('href','./onlinestudy.html?c_id='+ cid +'');
$(".left_menu_test").attr('href','./coursehomepage.html?c_id='+ cid +'');
$(".left_menu_discussion").attr('href','./stu_discussion.html?c_id='+ cid +'');



$(".log").on('click',function(){
    document.onkeydown = function(e) {
        var ev = (typeof event!= 'undefined') ? window.event : e;
        if(ev.keyCode == 13) {
            return false;
        }
    }
})


//课程学习页面的路由
// 当为file协议时跳转前的地址会拼接到地址中，http协议不会
// $(".leftcatalogue .cataloguenam a:nth-child(1)").attr('href','coursehomepage.html?cid='+ cid +'');
// $(".leftcatalogue .cataloguenam a:nth-child(2)").attr('href','./scoresranking.html?cid='+ cid +'');
// $(".leftcatalogue .cataloguenam a:nth-child(3)").attr('href','./announcement.html?cid='+ cid +'');
// $(".leftcatalogue .cataloguenam a:nth-child(4)").attr('href','./standard.html?cid='+ cid +'');
// $(".leftcatalogue .cataloguenam a:nth-child(5)").attr('href','./onlinestudy.html?cid='+ cid +'');
// // $(".leftcatalogue .cataloguenam a:nth-child(6)").attr('href','./coursehomepage.html?cid='+ cid +'');
// $(".leftcatalogue .cataloguenam a:nth-child(7)").attr('href','./stu_discussion_communication.html?cid='+ cid +'');

// bootstrap注册和登录模态框居中
function modalCenter(modalId){
    $(modalId).on('show.bs.modal', function (e) {
        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
        $(this).css('display', 'block');
        var modalHeight=$(window).height() / 2 - $(modalId + ' .modal-dialog').height() / 2;
        $(this).find('.modal-dialog').css({
            'margin-top': modalHeight
        });
    });
}

        // 模态框居中
        modalCenter('#myModal')
        modalCenter('#myModal1')

// 点击按钮让bootstrap模态框消失
function modalhidden(click,modalId){
    $(click).on("click",function(){
      
        $(modalId).modal('hide')
    })
}

    // 原生js开始
//计算内容的高度 来判断是多少行
//设置行高的函数。
function line(clas,hei){
    // console.log(333);
    
    var wareName1 = document.querySelectorAll(clas);
    for(var j=0;j<wareName1.length;j++){
     var wareNameText = wareName1[j].innerHTML;//获取内容
    //  console.log(j);
     
     var  heig = wareName1[j].clientHeight;//获取内容当前的高度
        if(heig>hei){//这个71数字是两行的时候的高度，根据你设定的字体大小有关
       for(var i=0;heig>hei;i++){
       	  //每次删掉最后一个然后返回
       wareNameText = wareNameText.substring(0,wareNameText.length-1);
       //重新返回的字符在写在span里面 ，计算新的高度
       wareName1[j].innerHTML = wareNameText;
       heig = wareName1[j].clientHeight;
       }
       //得到正好符合高度的字符，删除最后一个变为省略号 填充在页面里
       newText = wareNameText.substring(0,wareNameText.length-1)+'...';
       wareName1[j].innerHTML = newText;
       }
    }
}


var wareName1 = document.querySelectorAll('.wareNameText');
for(var j=0;j<wareName1.length;j++){
 var wareNameText = wareName1[j].innerHTML;//获取内容
//  console.log(j);
 
 var  heightSome = wareName1[j].clientHeight;//获取内容当前的高度
    if(heightSome>71){//这个71数字是两行的时候的高度，根据你设定的字体大小有关
   for(var i=0;heightSome>71;i++){
   	  //每次删掉最后一个然后返回
   wareNameText = wareNameText.substring(0,wareNameText.length-1);
   //重新返回的字符在写在span里面 ，计算新的高度
   wareName1[j].innerHTML = wareNameText;
   heightSome = wareName1[j].clientHeight;
   }
   //得到正好符合高度的字符，删除最后一个变为省略号 填充在页面里
   newText = wareNameText.substring(0,wareNameText.length-1)+'...';
   wareName1[j].innerHTML = newText;
   }
}
 // 原生js结束


 
// 注册模态框的校验规则
 $('#registerform').bootstrapValidator({
    　　　　　　　　message: 'This value is not valid',
                　feedbackIcons: {
                    　　　　　　　　valid: 'glyphicon glyphicon-ok',
                    　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                    　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                　　　　　　　　   },
                fields: {
                    telephoneemail: {
                        message: '用户名验证失败',
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 手机号或邮箱不能为空'
                            },
                            regexp: {
                                regexp: /(0?(11|13|14|15|17|18|19)[0-9]{9})|(^\w+@\w+(\.[a-z]+)+$)/,
                                message: 'ⓧ 请输入正确的手机号或邮箱'
                            }
                        }
                    },
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户名不能为空'
                            }
                        }
                    },
                    password:{
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户密码不能为空'
                            },
                            stringLength: {
                                min: 6,
                                max: 16,
                                message: 'ⓧ 密码长度必须在6到16位之间'
                            },
                            regexp: {
                                regexp: /^[^\u4e00-\u9fa5]{0,}$/,
                                message: 'ⓧ 密码不能有汉字'
                            }
                        }
                    },
                    zname: {
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 真实姓名不能为空'
                            }
                        }
                    }
                }
            })
// 学生登录模态框的校验规则
$('#loginform').bootstrapValidator({
    　　　　　　　　message: 'This value is not valid',
                　feedbackIcons: {
                    　　　　　　　　valid: 'glyphicon glyphicon-ok',
                    　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                    　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                　　　　　　　　   },
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户名不能为空'
                            }
                        }
                    },
                    password:{
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户密码不能为空'
                            },
                            regexp: {
                                regexp: /^[^\u4e00-\u9fa5]{0,}$/,
                                message: 'ⓧ 密码不能有汉字'
                            }
                        }
                    }
                }
            })
// 教师登录模态框的校验规则
$('#teacherloginform').bootstrapValidator({
    　　　　　　　　message: 'This value is not valid',
                　feedbackIcons: {
                    　　　　　　　　valid: 'glyphicon glyphicon-ok',
                    　　　　　　　　invalid: 'glyphicon glyphicon-remove',
                    　　　　　　　　validating: 'glyphicon glyphicon-refresh'
                　　　　　　　　   },
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户名不能为空'
                            }
                        }
                    },
                    password:{
                        validators: {
                            notEmpty: {
                                message: 'ⓧ 用户密码不能为空'
                            },
                            regexp: {
                                regexp: /^[^\u4e00-\u9fa5]{0,}$/,
                                message: 'ⓧ 密码不能有汉字'
                            }
                        }
                    }
                }
            })            

            // 
            $(".childa").on("click",function(){
                $(".childa").css({"color":"#33b150"})
                $(".childb").css({"color":"#999"})
                $(".studentregister").css({"display":"block"})
                $(".teacherregister").css({"display":"none"});
            })
            $(".childb").on("click",function(){
                $(".childb").css({"color":"#33b150"})
                $(".childa").css({"color":"#999"})
                $(".teacherregister").css({"display":"block"})
                $(".studentregister").css({"display":"none"});
            })

            // 在单击这个按钮时，如果没有验证通过就提示内容
            $('.registerbutton').on('click',function(){
               $('#registerform').data('bootstrapValidator').validate()
                    $.ajax({
                        //几个参数需要注意一下
                            type: "POST",//方法类型
                            dataType: "json",//预期服务器返回的数据类型
                            url: "/users/login" ,//url
                            data: $('#registerform').serialize(),
                            success: function (result) {
                                console.log(result);//打印服务端返回的数据(调试用)
                                if (result.resultCode == 200) {
                                    alert("SUCCESS");
                                    console.log("成功"); 
                                }
                                ;
                            },
                            error : function() {
                                // alert("异常！");
                            }
                        });
            })
            $('.linkregister').on("click",function(){
                
            })
            // 在单击这个按钮时，如果没有验证通过就提示内容
            // $('.loginbutton').on('click',function(){
            //     // 根据返回回来的数据来打印
            //     var i=2;
            //     if(i == 1){
            //         $('.codeerr').css({'display':'block',}).text('验证码错误')
            //     }else if(i == 2){
            //         $('.codeerr').css({'display':'block',}).text('用户名或密码错误')
            //     }

            //     $.ajax({
            //         //几个参数需要注意一下
            //             type: "POST",//方法类型
            //             dataType: "json",//预期服务器返回的数据类型
            //             url: "/users/login" ,//url
            //             data: $('#loginform').serialize(),
            //             success: function (result) {
            //                 console.log(result);//打印服务端返回的数据(调试用)
            //                 if (result.resultCode == 200) {
            //                     alert("SUCCESS");
            //                 }
            //                 ;
            //             },
            //             error : function() {
            //                 alert("异常！");
                            
            //             }
            //         });
            // })


        // 为了尽量不影响提示文字的display：none;属性，只能改变间距或定位。
        // 当高度大于50时

$('.telephone').on('input',function(){
    if($(this).parent().height()>50){
        // console.log('aaaaaaaaaaa');
        $('.form-group').css({"height":'50px'});
        $('.form-control-feedback .bv-no-label .glyphicon .glyphicon-ok').css({"display":'none'});
        // $('.form-group .help-block').css({'margin-top':'-3px'})
    }
})
$('.username').on('input',function(){
    
    if($(this).parent().height()>50){
        // console.log('aaaaaaaaaaa');
        $('.form-group').css({"height":'50px'});
        $('.form-control-feedback').css({"display":'none'});
        // $('.form-group .help-block').css({'margin-top':'-3px'})
    }
})
$('.password').on('input',function(){
    if($(this).parent().height()>50){
        // console.log('aaaaaaaaaaa');
        $('.form-group').css({"height":'50px'});
        $('.form-control-feedback').css({"display":'none'});
        // $('.form-group .help-block').css({'margin-top':'-3px'})
    }
})
// $('.telephone').on('blur',function(){
//     console.log(33);
        
//         $('.bv-form .help-block').css({'position':'absolute','display':'block','left':'50px','top':'46px'})
// })
// // bootstarpvalidator表单定位
// // $('.telephone').on('focus',function(){
// //     console.log(33);
// //         $('.form-control-feedback ').css({'display':'none'});
// // })

// 用户名注册1.点击注册按钮，然后向后台发送表单。后台注册成功返回一个ID
// 并将模态框内容清空，而且关闭模态框。
// 如果失败返回一个字符。然后提示用该户名已存在。

// 获取地址栏信息
function getSearch (k) {
    // 获取地址栏内容
    var str = location.search;
    // 解码成中文
    str = decodeURI(str);
    str = str.slice(1);
    
    var arr = str.split("&");
    var obj = {};
    // 获取键和值
    arr.forEach(function( v,i) {
        var key = v.split("=")[0];
        var value = v.split("=")[1];
        obj[ key ] = value;
    })
    return obj[ k ];
}

$(".check").on('click',function(){
    $('.codeimg').click();
})

// 判断导航栏的几个页面，如果是这几个页面，字体变绿。
var arrurl = location.href.split("/");
var htmlurl = arrurl[arrurl.length -1].split(".")[0]
// console.log("arr", htmlurl );
//首页
if(htmlurl == "index"){
 $(".header ul li").eq(0).addClass("activehead")
// 课程
}else if(htmlurl == "calssify"){
    $(".header ul li").eq(1).addClass("activehead")
//院校
}else if(htmlurl == "academy"){
    $(".header ul li").eq(2).addClass("activehead")

}
    
// 当用户登录之后调用的css
// $(".loginicon").addClass("checkloginicon");
// $(".login").append("<div class='exit'><a href=''>退出</a></div>")
// $(".log").css({"display":"none"});
// $(".register").css({"display":"none"});

// 当搜索图标被单击后发送请求，并携带数据。
$(".searchicon").on("click", function () {
    var val = $('.searchinput').val();
    // 此处写ajax请求
    $.ajax({
        url: HTTP_URLH + "Calssify/search",
        type: 'get',
        datatype: 'json',
        success: function () {
            window.location.href=("http://www.lanhong.com/index.php/Home/Calssify/search?name="+ val)
            //alert(window.location.host)
        }
    });
    // alert("被单击了"+val)
    // console.log("被单击了"+val)
})


// $(function(){
//     // 模态框居中
//     var user_id = $.cookie("course")
//     console.log("dsfaasdf" + user_id)
// })



// //  获取cookie
// try {
//     var user_id = $.cookie("course");
// }catch (e) {
    
// }














