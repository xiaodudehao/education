$(function(){
    var uid = 1;
    var cid = 1;
    var videofileid;
    
    // 保存头像图片名称的变量。
    var imgname;
    // 模态框居中
    modalCenter('#myModal')
    modalCenter('#myModal1')
    modalCenter('#myModal2')
    // 当添加课程的时候
    // $("#boxscroll").css({"overflow-x": "hidden", "overflow-y": "auto"})
    // 获取大类id
    var clas = getSearch ("clas")
    // 获取文件章节id
    var zid =  getSearch ("vid")
    //提示框初始化，toast-top-center表示提示框的位置
    toastr.options = {
        positionClass: 'toast-top-center', // 提示框位置
        closeButton: true  // 是否显示关闭按钮
    }

    // 超出高度显示省略号
    line(".username",30)
    line(".usertext",70)
    var param = {
                cid: cid,
                sl: "DESC",
                page: 1,
            }
    var question;
    var note;
    var state;
    // $(".import").on("change",function(){
    //     question=$(".import").val()
    //     console.log(question);
    // })
    // 点击提问按钮
    $(".questionbutton").on("click",function(){
        $(this).addClass("activebutton")
        $(".notebutton").removeClass("activebutton")
        // 控制文本框显示与隐藏
        $(".questionimport").css({"display":"inline-block"})
        $(".noteimport").css({"display":"none"})
        // 控制公开与隐藏按钮展示与隐藏
        $(".privacy").css({"display":"none"});
        state =0;
    })
    // 点击笔记按钮
    $(".notebutton").on("click",function(){
        $(this).addClass("activebutton")
        $(".questionbutton").removeClass("activebutton")
        // 控制文本框显示与隐藏
        $(".questionimport").css({"display":"none"})
        $(".noteimport").css({"display":"inline-block"})
        // 控制公开与隐藏按钮展示与隐藏
        $(".privacy").css({"display":"block"});
        state = 1;
    })

    // 点击提交按钮
    $(".present").on("click",function(){
        var value;
        var url;
        var data;
        var pubval;
        if(state){
            // 笔记内容
            value = $(".noteimport").val()
            if(value.trim() == ""){
                console.log("内容为空");
                toastr.error("内容不能为空")
                return 
            }
            // 获取是否公开
            pubval = $('input:radio[name="Question1"]:checked').val();
            data =  {
                id: uid,
                zid: 13,
                state: 1,
                cid: cid,
                text: value,
                state: pubval,
            }
            url = "Studymanage/add_note"
        }else{
            // 提问内容
            value = $(".questionimport").val()
            if(value.trim() == ""){
                console.log("内容为空");
                toastr.error("内容不能为空")
                return 
            }
            data =  {
                id: uid,
                zid: 13,
                state: 1,
                cid: cid,
                text: value
            }
            url ="Studymanage/add_ask"
        }
        
        // 提交笔记或提交问题的ajax
        $("#loadingModal").modal("show")
        $.ajax({
            url: HTTP_URLH + url,
            type: "post",
            data: data,
            dataType: "json",
            success: function (data) {
                console.log(data);
                // 清空输入框
                if(state){
                    $(".noteimport").val("")
                }else{
                    $(".questionimport").val("")
                    myquiz()
                }
                // toastr.success("操作成功")
            },
            error: function (e) {
                // toastr.error("网络开小猜了，请稍后再试")
                console.log(e)
            },
            complete: function (xhr, status) {
                // 隐藏loading
                $("#loadingModal").modal("hide")
            }
        })
        
    })
    // http://192.168.1.112/lanhong/Application/Home/Public/text/5cff6200f1e7c.txt
    // 点击我的提问
    $(".myquestion").on("click",function(){
        $(".myquestion").addClass("activetitle");
        $(".herquestion").removeClass("activetitle")
        // 控制显示我的提问
        $(".askquestions").css({"display":"block"})
        $(".myaskquestion").css({"display":"none"})
    })
    // 点击他人提问
    $(".herquestion").on("click",function(){
        $(".myquestion").removeClass("activetitle");
        $(".herquestion").addClass("activetitle")
        //控制显示他人提问
        $(".askquestions").css({"display":"none"})
        $(".myaskquestion").css({"display":"block"})
        line(".username",30)
        line(".usertext",70)
    })
    // myaskquestionchild

    // 渲染他人的提问
    var minlength = 0;
    var mylength = 4;
    var strque;
    var nodate = 0;
    var herdata;
    function scrollquestion(){
        // 判断是否有提问的数据
        if(herdata == null){
            $(".myaskquestionchild").append('<div class="nodate">没有提问</div>')
        }else{
            for(var i=minlength; i<mylength; i++){
                if(i > herdata.length-1) {
                    // console.log("没有了");
                    if(nodate == 0) {
                        nodate = 1;
                        $(".myaskquestionchild").append('<div class="nodate">没有数据了</div>')
                    }

                }else{
                    // console.log("第",i);
                    // console.log(herdata[i]);
                    var questiontime;

                questiontime = timestampToTime( herdata[i].data)
                // console.log(questiontime)

                    strque = '<div class="eachquestion  clearfix"  data-qid="'+ herdata[i].id +'">\n'+
                                '<img class="usericon fl"   src="'+imgsrc3+ herdata[i].topic[0].logo +'" alt="">\n'+
                                '<div class="usercontent fl">\n'+
                                    '<div class="username">\n'+
                                       herdata[i].topic[0].username+
                                    '</div>\n'+
                                    '<div class="userdate">\n'+
                                        questiontime+
                                    '</div>\n'+
                                    '<div class="usertext">\n'+
                                        herdata[i].name+
                                    '</div>\n'+
                                    '<div class="useroption clearfix">\n'+
                                        '<div class="comment fr">\n'+
                                            '<img src="../img/评论.png" alt="">评论\n'+ herdata[i].num+
                                        '</div>\n'+
                                        // '<div class="praise fl">\n'+
                                        //     '<img src="../img/点赞.png" alt="">点赞\n'+herdata[i].praise+
                                        // '</div>\n'+
                                    '</div>\n'+
                                '</div>\n'+
                            '</div>   ';
                    $(".myaskquestionchild").append(strque)
                }
            }
            minlength = minlength + 4;
            mylength = mylength + 4;
        }
    }


    // 渲染我的提问
    var myminlength = 0;
    var mymylength = 4;
    var mystrque;
    var mynodate = 0;
    var mydata;
    function scrollmyquestion(){
        // 判断是否有提问的数据
        if(mydata == null){
            $(".askquestionchild").append('<div class="nodate">没有提问</div>')
        }else{
            for(var i=myminlength; i<mymylength; i++){
                if(i > mydata.length-1) {
                    // console.log("没有了");
                    if(mynodate == 0) {
                        mynodate = 1;
                        $(".askquestionchild").append('<div class="nodate">没有数据了</div>')
                    }

                }else{
                    // console.log("第",i);
                    // console.log(mydata[i]);
                    var myquestiontime;

                myquestiontime = timestampToTime( mydata[i].data)
                // console.log(myquestiontime)

                    mystrque = '<div class="eachquestion clearfix"  data-qid="'+ mydata[i].id +'">\n'+
                                '<img class="usericon fl" src="'+imgsrc3+ mydata[i].topic[0].logo +'" alt="">\n'+
                                '<div class="usercontent fl">\n'+
                                    '<div class="username">\n'+
                                       mydata[i].topic[0].username+
                                    '</div>\n'+
                                    '<div class="userdate">\n'+
                                        myquestiontime+
                                    '</div>\n'+
                                    '<div class="usertext">\n'+
                                        mydata[i].name+
                                    '</div>\n'+
                                    '<div class="useroption clearfix">\n'+
                                        '<div class="comment fr">\n'+
                                            '<img src="../img/评论.png" alt="">评论\n'+mydata[i].num+
                                        '</div>\n'+
                                        // '<div class="praise fl">\n'+
                                        //     '<img src="../img/点赞.png" alt="">点赞\n'+mydata[i].praise+
                                        // '</div>\n'+
                                    '</div>\n'+
                                '</div>\n'+
                            '</div>   ';
                    $(".askquestionchild").append(mystrque)
                }
            }
            myminlength = myminlength + 4;
            mymylength = mymylength + 4;
        }
    }



    // 当鼠标滚轮转动时 他人提问
    $(".myaskquestion").scroll(function() {
        var myh = $(".myaskquestionchild").height();
        var fatherh = $(".myaskquestion").height();
        var scrollt = $(".myaskquestion").scrollTop();
        // 如果滚动距离大于自身高度减去父亲高度
        if(scrollt >= myh - fatherh){
            scrollquestion()
        }
    });

    // 当鼠标滚轮转动时 我的提问
    $(".askquestions").scroll(function() {
        var mymyh = $(".askquestionschild").height();
        var myfatherh = $(".askquestions").height();
        var myscrollt = $(".askquestions").scrollTop();
        // 如果滚动距离大于自身高度减去父亲高度
        if(myscrollt >= mymyh - myfatherh){
            scrollmyquestion()
        }
    });




    // 获取他人提问
    $("#loadingModal").modal("show")
    $.ajax({
        url: HTTP_URLH + "Studymanage/t_ask",
        type: "post",
        data: {
            id: uid,
            cid: cid
        },
        dataType: "json",
        success: function (data) {
            console.log("他人提问数组取反",data.reverse());
            // 将数据赋值给“我的问题”
            herdata = data
            // 转化时间戳
            // herdata[i].data = data[i].date-0;
            scrollquestion()
            // toastr.success("操作成功")
        },
        error: function (e) {
            // toastr.error("网络开小猜了，请稍后再试")
            console.log(e)
        },
        complete: function (xhr, status) {
            // 隐藏loading
            $("#loadingModal").modal("hide")
        }
    })

    // 获取我的提问
    $("#loadingModal").modal("show")
    function myquiz(){
        $.ajax({
            url: HTTP_URLH + "Studymanage/z_ask",
            type: "post",
            data: {
                id: uid,
                cid: cid
            },
            dataType: "json",
            success: function (data) {
                console.log("我的提问数组取反",data.reverse());
                // 将数据赋值给“我的问题”
                mydata = data
                // 转化时间戳
                // mydata[i].data = mydata[i].data-0;
                scrollmyquestion()
                // toastr.success("操作成功")
            },
            error: function (e) {
                // toastr.error("网络开小猜了，请稍后再试")
                console.log(e)
            },
            complete: function (xhr, status) {
                // 隐藏loading
                $("#loadingModal").modal("hide")
            }
        })     
    }
    myquiz()

    // 事件委托，给每个提问跳转事件。
    // 点击他人提问时跳转页面
    $(".askquestionchild").on("click",".eachquestion",function(){
        window.location.href = "./stu_discussion_question.html?qid="+$(this).data("qid")
    })
     // 点击我的提问时跳转页面
    $(".myaskquestionchild").on("click",".eachquestion",function(){
        window.location.href = "./stu_discussion_question.html?qid="+$(this).data("qid")
    })

    // 视频或者文件章节的id
    var wid = getSearch ("wid");
    // 视频或者文件的大类的id
    var rid = getSearch ("rid");  
        // 根据章节id和大类id来获取视频地址并渲染到页面
        $("#loadingModal").modal("show")
        $.ajax({
            url: HTTP_URLH + "Studymanage/set_resource",
            type: "post",
            data: {
                id: wid,
                val: rid
            },
            dataType: "json",
            success: function (data) {
                // // 判断是视频大类渲染视频
                if( 4 == rid){
                    $(".mainvideo").css({"display": "inline-block"})
                    $("#cc").attr("src",videosrc+ "vedio/" + data[0].savename)
                    // toastr.success("操作成功")
                }else{
                    $(".textcontent").css({"display": "block"})
                    $(".textcontent iframe").attr("src",videosrc+"text/"+data[0].savename)
                    console.log("文本地址为",videosrc+"text/"+data[0].savename);
                    
                }
                console.log('视频',data);
                // 视频id
                videofileid = data[0].id

                // 获取视频播放到的位置
                $.ajax({
                    url: HTTP_URLH + "Video/set_time",
                    type: "post",
                    data: {
                        zid: videofileid,
                        uid: uid
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log("视频播放时间",data);
                        // 渲染时间到视频上
                        max = data[0].data;
                        video.currentTime = data[0].data
                        
                    },
                    error: function (e) {
                        // toastr.error("网络开小差了，请稍后再试")
                        console.log(e)
                    },
                    complete: function (xhr, status) {
                        // 隐藏loading
                        $("#loadingModal").modal("hide")
                    }
                })


            },
            error: function (e) {
                // toastr.error("网络开小差了，请稍后再试")
                console.log(e)
            },
            complete: function (xhr, status) {
                // 隐藏loading
                $("#loadingModal").modal("hide")
            }
        })
    
        // 当视频暂停时
        $("#cc").on("pause",function(){
            console.log("shipingzantingle");
            // if(video.currentTime >max){
            //     //max时最大播放时间
            //     max = video.currentTime;
            // }
            pausevideo( video.currentTime )
        })
        // 离开页面时触发的事件
        $(window).unload(function(){
            pausevideo( video.currentTime )
        });
        // 如果当前时间是最大时间那么就保存
        function pausevideo(time){
            if(time > max){
                $.ajax({
                    url: HTTP_URLH + "Video/video_time",
                    type: "post",
                    data: {
                        uid: uid,
                        cid: cid,
                        data: time,
                        resourceid: videofileid
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (e) {
                        toastr.error("网络开小差了，请稍后再试")
                        console.log(e)
                    },
                    complete: function (xhr, status) {
                        // 隐藏loading
                        $("#loadingModal").modal("hide")
                    }
                })
            }
        }




    // 事件戳转时间的函数
    function timestampToTime(timestamp) {
        var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '.';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
        var D = date.getDate() + ' ';
        // var h = date.getHours() + ':';

        // var m = date.getMinutes() + ':';
        // var s = date.getSeconds();
        return Y+M+D;
    }
    $(".topbutton").on("click",function(){
        console.log(3333333333);
        
        history.go(-1)
    })
})