$().ready(function () {
    select_student_informasion()
    //提示框初始化，toast-top-center表示提示框的位置
    toastr.options = {
        positionClass: 'toast-top-center', // 提示框位置
        closeButton: true  // 是否显示关闭按钮
    }
    /**
     *对话框
     * @param content  提示内容
     * @param func      点击对话框确认按钮做什么，类型为function
     */
    function confirmBySelf(content, func) {
        $.confirm({
            confirmButtonClass: "btn-primary",   //设置ok按钮样式
            closeIcon: true,        //对话框右上角关闭
            confirmButton: "确认", //确认按钮标题
            cancelButton: "取消", //取消按钮标题
            title: "提示",        //标题
            content: content,        //对话内容
            confirm: function () {
                //点击确认后做什么
                func()
            },
            cancel:function () {
                //点击取消后做什么
            }
        })
    }
})
// 查询个人信息
function select_student_informasion(){
    // loading显示
    $("#loadingModal").modal("show")
    var CouIntrAjax = $.ajax({
        url: HTTP_URLH + "Personal/personal",
        type: "post",
        timeout: 5000,
        dataType: "json",
        // async:false,    //不进行异步刷新
        data: {
            id: 1
        },
        success: function (data) {
            // $.cookie("course", data[0].id)
            // console.log(data)
            if (0 == data.length) {
                // 没有数据，显示提示
                toastr.error("未查询到可用数据")
                $("#loadingModal").modal("hide")
            }
            var res = ""
            for (var i in data) {
                var item = data[i]
                // console.log(item)
                var nima = data[0].id
                console.log("nima"+nima)
                $.cookie("course", nima);
                var res = '<div class="student_information">\n' +
                    '            <img class="backgroundimg" src="../img/interspace.png" alt="">\n' +
                    '            <div class="lucency"></div>\n' +
                    '            <div class="tintroduce">\n' +
                    '                <img class="fl" src="'+ imgsrc3 + item.logo +'" alt="">\n' +
                    '                <div class="fl teacherna" >\n' +
                    '                    <div>'+ item.username +'</div>\n' +
                    '                    <div>恭喜！ 您共学习了 '+ item.hour +' 个小时</div>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </div>'
            }
            $('.mainpartportion').html(res)
        },
        error: function (e) {
            console.log(e)
            toastr.error("网络开小猜了，请稍后再试！")
        },
        complete: function (xhr, status) {
            // 隐藏loading
            $("#loadingModal").modal("hide")
        }
    })
}





