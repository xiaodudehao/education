$(function(){


 // jq开始
     // 从网上抄的bootstrap模态框居中代码
     $('#myModal').on('show.bs.modal', function (e) {
         // 关键代码，如没将modal设置为 block，则$modala_dialog.height() 为零
         $(this).css('display', 'block');
         var modalHeight=$(window).height() / 2 - $('#myModal .modal-dialog').height() / 2;
         $(this).find('.modal-dialog').css({
             'margin-top': modalHeight
         });
     });

    //bootstrap模态框居中代码
    modalCenter('#myModal')
    modalCenter('#myModal1')

    // 向上滚动的距离加上网页视口的高度等于网页的高度的时候加载数据
    // var index = 1;
    // $(window).scroll(function(){
    //     var height = $("body").height();
    //     var clientHeight = $(window).height();
    //     var scrollHeight = $(window).scrollTop();
    //     console.log("height:"+(height),"高度"+(clientHeight+scrollHeight));
    //     if((height+40)==clientHeight+scrollHeight){
    //         index++
    //         console.log('拉到底部了');
    //         var a = $(".mainpart").height()
    //         console.log( $(".mainpart").height(a+50));
            
           
    //     }
    // })

    $(function(){
        $("img.lazy").lazyload({
            // 该插件api地址：http://www.jq22.com/jquery-info390
            placeholder: "img/qq.png",// 占位的图片， 写占图片的地址
        });
    })
   var data3;
    var html4 = template("search",data3);
    $(".searchresult").html(html4);
 // jq结束
})

