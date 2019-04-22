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
        console.log(33);
        $(modalId).modal('hide')
    })
}
modalhidden(".registerbutton","#myModal");
