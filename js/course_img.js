$().ready(function () {
    // select_cou_img()
})
// 课程图片查询
function select_cou_img() {
    var CourseImgAjax = $.ajax({
        url: HTTP_URL + "Index/cu_logo",
        type: "get",
        timeout: 5000,
        dataType: "json",
        async: false,    //不进行异步刷新
        data: {
            cid: cid,
        },
        success: function (data) {
            console.log(data)
            var res = ""
            if(data.logo==''){
                res += '< img  src="/Application/Admin/Public/upload/mo.png" id="preview" class="headicon fl">\n' +
                    '                    <div class="imgtitle ">\n' +
                    '                        <input name="logo" type="file" id="filebtn" class="filebtn">\n' +
                    '                    </div>'
            }else{
                res += '< img  src="/Application/Admin/Public/upload/'+data.logo +'" id="preview" class="headicon fl">\n' +
                    '                    <div class="imgtitle ">\n' +
                    '                        <input name="logo" type="file" id="filebtn" class="filebtn">\n' +
                    '                    </div>'
            }
            $(".headimg").html(res)
            $(".filebtn").on("change",function(){
                //  preview是id
                imgPreview(this,"preview")
                fileObj = document.getElementById("filebtn").files[0];
                // console.log(fileObj);
            })
            $(".headicon").on('load', function () {
                UpladFile()
            })
        },
        error: function (e) {
            toastr.error("网络开小猜了，请稍后再试！")
            console.log(e)
        },
        complete: function (xhr, status) {
            // 隐藏loading
            $("#loadingModal").modal("hide")
        }
    })
}

// 原生ajax发送头像信息开始
var xhr;
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
}
function UpladFile() {
    var fileObj = document.getElementById("filebtn").files[0];
    // console.log(fileObj);
    var FileController = "http://192.168.1.112/lanhong/index.php/Admin/Index/courlogo";
    var form = new FormData();
    form.append("myfile", fileObj);
    form.append("cid", cid);

    createXMLHttpRequest();
    xhr.onreadystatechange = handleStateChange;
    xhr.open("post", FileController, true);
    xhr.send(form);
}
function handleStateChange() {
    // select_cou_img()
    // if (xhr.readyState == 4) {
    //     if (xhr.status == 200 || xhr.status == 0) {
    //         // history.go(0)
    //     }
    // }
}
// 原生ajax发送头像信息结束
//预览图片的函数，传入选中file按钮标签还有要展示的img标签
function imgPreview(fileDom,lookid){
    //判断是否支持FileReader
    if (window.FileReader) {
        var reader = new FileReader();
    } else {
        alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
    }
    //获取文件
    var file = fileDom.files[0];
    // console.log(file);
    var imageType = /^image\//;
    //是否是图片
    if (!imageType.test(file.type)) {
        alert("请选择图片！");
        return;
    }
    //读取完成
    reader.onload = function(e) {
        //获取图片dom
        var img = document.getElementById(lookid);
        //图片路径设置为读取的图片
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}
var fileObj
$(".filebtn").on("change",function(){
    imgPreview(this,"preview")  // preview是id
    fileObj = document.getElementById("filebtn").files[0];
    // console.log(fileObj);
})
// 图片发生改变时
$(".headicon").on('load', function () {
    UpladFile()
})