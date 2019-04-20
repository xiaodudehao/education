require([],function(){
    // 原生js开始
//计算内容的高度 来判断是多少行
//    var wareName=document.getElementById('wareNameText');
   var wareName1 = document.querySelectorAll('.wareNameText');
   for(var j=0;j<wareName1.length;j++){
    var wareNameText = wareName1[j].innerHTML;//获取内容
    console.log(j);
    
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

    // jq开始
$("body").on("click",function(){
    console.log("5555555555");
    
})
    $('#myModal').on('shown.bs.modal', function (e) {
        // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
        console.log("aa");
        
        $(this).css('display', 'block');
        var modalHeight=$(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;
        $(this).find('.modal-dialog').css({
            'margin-top': modalHeight
        });
    });

    // jq结束
})