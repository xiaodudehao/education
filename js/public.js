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
                    }
                }
            })
// 登录模态框的校验规则
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
                                alert("异常！");
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



// 当用户登录之后调用的css
// $(".loginicon").addClass("checkloginicon");
// $(".login").append("<div class='exit'><a href=''>退出</a></div>")
// $(".log").css({"display":"none"});
// $(".register").css({"display":"none"});
