require([],function(){
    // $('#myModal').modal({
    //     keyboard: false
    //   })
     // 热门课程的数据和模板
      var data = {
        person:[
            {title:"jack",num:18,href:"l",src:"img/未标题-7.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"ross",num:18,href:"m",src:"img/未标题-7.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"tomer",num:18,href:"n",src:"img/未标题-7.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"jerry",num:18,href:"o",src:"img/未标题-7.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
        ],
    };

    var html = template("hot",data);
    $(".hot").html(html);
     // 最新课程的数据和模板
     var data = {
        person:[
            {title:"jack",num:18,href:"l",src:"img/未标题-9.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"ross",num:18,href:"m",src:"img/未标题-9.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"tomer",num:18,href:"n",src:"img/未标题-9.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
            {title:"jerry",num:18,href:"o",src:"img/未标题-9.png",shcoolname:"上海市城市科技学校",teacher: "王翠湖"},
        ],
    };

    var html = template("new",data);
    $(".new").html(html);

    // 轮播图的数据和模板
    var data1 = [
        {src: "img/banner1.jpg",id:1},
        {src: "img/banner2.jpg",id:2},
        {src: "img/banner3.jpg",id:3},
        {src: "img/banner4.jpg",id:4}
    ]
    var html1 = template("slideshow",data1);
    $(".carousel-inner").html(html1);        
    // 轮播图小圆点
    var html2 = template("slideshowdot",data1);
    $(".carousel-indicators").html(html2);      

    // 监听网页并打印键盘码
    $(window).keyup(function(event){
        console.log(event.which);
    });
    // 写网络地址要记得加http://
    // console.log(window.location.href="http://www.baidu.com");
    
    // 3.使用jQuery的属性替换方法
    //  $(location).attr('href', 'http://www.jb51.net');
    //  $(window).attr('location','http://www.jb51.net');
    //  $(location).prop('href', 'http://www.jb51.net')

    // 分类九个数据的渲染
    var data2 = [
        {href:"a",txt:"农林牧渔类"},
        {href:"a",txt:"资源环境类"},
        {href:"a",txt:"能源与新能源类"},
        {href:"a",txt:"土木水利类"},
        {href:"a",txt:"加工制造类"},
        {href:"a",txt:"石油化工类"},
        {href:"a",txt:"轻纺食品类"},
        {href:"a",txt:"交通运输类"},
        {href:"a",txt:"信息技术类"}
    ]
    var html3 = template("classify",data2);
    $(".catalogue ul").html(html3);
    $(".next").on("click",function(){
        console.log("单击了下一页按钮");
        
    })

    // 学校模板的渲染
    var data3 = [
        {href:"a",src:"img/未标题-12.png",name:"上海市城市科技学校"},
        {href:"a",src:"img/未标题-14.png",name:"上海市城市科技学校"},
        {href:"a",src:"img/未标题-12.png",name:"上海市城市科技学校"},
        {href:"a",src:"img/未标题-14.png",name:"上海市城市科技学校"},
        {href:"a",src:"img/未标题-12.png",name:"上海市城市科技学校"}
    ]
    var html4 = template("schoolmodal",data3);
    $(".nameofinstitution").html(html4);

})