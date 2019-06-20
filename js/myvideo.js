/* 
      功能1：视频的播放功能
        1. 给播放按钮注册点击事件
        2. 播放视频， 修改小图标
        3. 添加判断，当前是否是播放视频
    */
   var swit = document.querySelector(".switch")
   var iconPlay = document.querySelector('.glyphicon-play')
   var iconFull = document.querySelector('.glyphicon-fullscreen')
   var video = document.querySelector('video')
   var iconVolume = document.querySelector('.glyphicon-volume-down')
   var range1 = document.querySelector('.range1')
   var range2 = document.querySelector('.range2')
   var lis = document.querySelectorAll('li')

   // iconPlay.addEventListener('click', function() {
   //   if (this.classList.contains('glyphicon-play')) {
   //     // 修改小图标
   //     this.classList.remove('glyphicon-play')
   //     // glyphicon 
   //     this.classList.add('glyphicon-pause')
   //     // 播放视频
   //     video.play()
   //   } else {
   //     // 修改小图标
   //     this.classList.add('glyphicon-play')
   //     this.classList.remove('glyphicon-pause')
   //     // 播放视频
   //     video.pause()
   //   }
   // })
   var pp;
   pp=0;
   $(".switch").on("click",function(){
       if(pp){
           // $(".switch").addClass('glyphicon-play')
           // $(".switch").removeClass('glyphicon-pause')

           pp = 0;
           video.pause()

       }else{
           // $(".switch").addClass('glyphicon-pause')
           // $(".switch").removeClass('glyphicon-play')
           pp = 1;
           video.play()
       }
   })
//    当视频播放时
   video.addEventListener('play',function(){  
       console.log(1111);
             // 修改小图标
             $(".switch").addClass('glyphicon-pause')
       $(".switch").removeClass('glyphicon-play')


   });  
   // 当视频暂停时
   video.addEventListener('pause',function(){  
       console.log(2222);
 
       // 修改小图标
       $(".switch").addClass('glyphicon-play')
       $(".switch").removeClass('glyphicon-pause')
   }); 



       // 禁止快进功能。
       var sym;
       var sym=0;
       var max=0;
       var video=document.querySelector("#cc")
       setInterval(function () {
           var time=video.currentTime
           // 当前值减去之前值大于1
           if(time-sym>1&&time>max){
               // 如果当前值大于最大值就返回到之前的位置。
               // 如果没有就可以跳到那个位置
               // video.currentTime=max
               video.currentTime=sym
               console.log(video.currentTime);
               
           }
           sym=video.currentTime
           // 如果当前的值大于历史最大值就保存
           if(sym>max){
               max = sym;
           }
        //    console.log(video.currentTime);
       },500);

   /* 
     功能2：视频的全屏功能
       1. 给全屏按钮注册一个点击事件
       2. 让vedio全屏
   */
   iconFull.addEventListener('click', function() {
     fullScreen(video)
     video.controls=false;
   })

   /* 
   功能三
     1. 当视频播放的时候，进度条要跟着变
     2. 当拖动进度条的时候，视频要跟着变

     video.duration : 获取的视频总长度（秒数）
     video.currentTime: 获取的视频的当前播放位置（秒数）

     视频的当前时间 / 视频的总时间  =  range的当前值 / range的总长度(100)
     事件： timeupdate 当前的播放位置改变的时候，会触发
   */
   video.addEventListener('timeupdate', function() {
     // console.log(video.duration, video.currentTime)
     $(".progressbotton").css({"left":(video.currentTime / video.duration)*($(".progressbotton").parent().width()-8)})
     ,$(".progressline").css({"width":(video.currentTime / video.duration)*($(".progressbotton").parent().width()-8)+8 })
     range1.value = video.currentTime / video.duration * 100
   })
   // change input的区别？？？？
   // input: 输入事件， 只要在修改input框的value,一直触发
   // change: 不会实时的触发，当失去焦点的时候,判断当前的值与之前的值是否发生了改变，如果发生了改变，会触发唱歌事件
   // input是实时的， change: 失去焦点的时候
//    range1.addEventListener('input', function() {
//      video.currentTime = this.value / 100 * video.duration
//    })


   /* 
     功能4：设置音量
       range2当前的value / 100 = 音量 / 1
       1. 给range2注册input事件
       2. 设置音量
   */ 
//    range2.addEventListener('input', function() {
//      video.volume = this.value / 100
//      // 根据volume动态修改图标
//      if (video.volume === 0) {
//        iconVolume.classList.remove('fa-volume-up')
//        iconVolume.classList.add('fa-volume-off')
//      } else {
//        iconVolume.classList.add('fa-volume-up')
//        iconVolume.classList.remove('fa-volume-off')
//      }
//    })
   
   /* 
     功能五：视频切换功能
       1. 给li注册点击事件
       2. 获取到当前li身上的自定义属性url
       3. 修改video.src属性即可
   */
   for (var i = 0; i < lis.length; i++) {
     lis[i].addEventListener('click', function() {
       var url = this.dataset.url
       // 修改video的src
       video.src = url

       // 修改了src，还需要让视频重新播放
       video.play()
     })
   }


   var drag=function(obj,par,voice){
               // console.log(vioce);
               var num = 0;
                obj.bind("mousedown",start);

                function start(event){
                    if(event.button==0){//判断是否点击鼠标左键
                        /*
                         * clientX和clientY代表鼠标当前的横纵坐标
                         * offset()该方法返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
                         * bind()绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
                         * getX获取当前鼠标横坐标和对象离屏幕左侧距离之差（也就是left）值，
                         * getY和getX同样道理，这两个差值就是鼠标相对于对象的定位，因为拖拽后鼠标和拖拽对象的相对位置是不变的
                         */
                        gapX=event.clientX-obj.offset().left;
                        gapY=event.clientY-obj.offset().top;
                        //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
                        $(document).bind("mousemove",move);
                       //此处的$(document)可以改为obj
                        $(document).bind("mouseup",stop);
                       console.log(gapX,gapY);

                    }
                    return false;//阻止默认事件或冒泡
                }
                function move(event){
                   var num;
                   num = event.clientY-gapY-obj.parent().offset().top;
                   if(num>50){
                       obj.css({
                        //"left":(event.clientX-gapX)+"px",
                           "top":(50)+"px"
                       });
                       par.css({"height":10})
                       // 改变声音
                       video.volume =0
                   }else if(num<0){
                       obj.css({
                        //"left":(event.clientX-gapX)+"px",
                           "top":(0)+"px"
                       });
                       par.css({"height":60})
                       // 改变声音
                       video.volume =1
                   }else{
                       obj.css({
                        //"left":(event.clientX-gapX)+"px",
                           "top":(num)+"px"
                       });
                       par.css({"height":60-num})
                       // 改变声音
                       video.volume =(60-num)/60
                   }
                    return false;//阻止默认事件或冒泡
                }
                function stop(){
                    //解绑定，这一步很必要，前面有解释
                    $(document).unbind("mousemove",move);
                    $(document).unbind("mouseup",stop);
                }
            }

            drag($(".rangetwobutton"),$(".rangetwoline"),video.volume);//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数,兄弟元素，音频对象


var drag2=function(obj,par){
                var num= 0;
               // console.log(vioce);
                obj.bind("mousedown",start);

                function start(event){
                    if(event.button==0){//判断是否点击鼠标左键
                        /*
                         * clientX和clientY代表鼠标当前的横纵坐标
                         * offset()该方法返回的对象包含两个整型属性：top 和 left，以像素计。此方法只对可见元素有效。
                         * bind()绑定事件，同样unbind解绑定，此效果的实现最后必须要解绑定，否则鼠标松开后拖拽效果依然存在
                         * getX获取当前鼠标横坐标和对象离屏幕左侧距离之差（也就是left）值，
                         * getY和getX同样道理，这两个差值就是鼠标相对于对象的定位，因为拖拽后鼠标和拖拽对象的相对位置是不变的
                         */
                        gapX=event.clientX-obj.offset().left;
                        gapY=event.clientY-obj.offset().top;
                        //movemove事件必须绑定到$(document)上，鼠标移动是在整个屏幕上的
                        $(document).bind("mousemove",move);
                       //此处的$(document)可以改为obj
                        $(document).bind("mouseup",stop);
//                        console.log("鼠标x"+gapX,"鼠标y"+gapY);

                    }
                    return false;//阻止默认事件或冒泡
                }
                function move(event){
                   var num;
                   num = event.clientX-gapX-obj.parent().offset().left;
                //    console.log(num);
                   
                   if(num>obj.parent().width()-8){
                       obj.css({
                        "left":(obj.parent().width()-8)+"px",
   //                         "top":(50)+"px"
                       });
                       par.css({"width":obj.parent().width()})
                       // 
                       video.currentTime =  video.duration
                   }else if(num<0){
                       obj.css({
                        "left":(0)+"px",
   //                         "top":(0)+"px"
                       });
                       par.css({"width":8})
                       // 
                       video.currentTime = 0
                   }else{
                       obj.css({
                           "left":(num)+"px",
   //                         "top":(num)+"px"
                       });
                       par.css({"width":num+8})
                       // 改变视频
                    //    console.log('进度条长度',par.width());
                       
                       video.currentTime = par.width()/obj.parent().width() * video.duration
                   }
                    return false;//阻止默认事件或冒泡
                }
                function stop(){
                    //解绑定，这一步很必要，前面有解释
                    $(document).unbind("mousemove",move);
                    $(document).unbind("mouseup",stop);
                }
            }

            drag2($(".progressbotton"),$(".progressline"));//传入的必须是jQuery对象，否则不能调用jQuery的自定义函数,兄弟元素，音频对象