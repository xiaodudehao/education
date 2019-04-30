$(function(){
    // 在未单击课程目录时
    $(".maincatalogue").css({"display":"none"})
    // 单击课程简介
    $('.introductionbutton').on("click",function(){
        $(".maincontent").css({"display":"block"})
        $(".maincatalogue").css({"display":"none"})
    })
    // 单击课程目录
    $('.cataloguebutton').on("click",function(){
        $(".maincontent").css({"display":"none"})
        $(".maincatalogue").css({"display":"block"})
    })
    
    var result = {
        person: [
            {name: "项目1", child: [
                {name: "任务1",child: [{option: "看一看",title:"水泥灰度检测"},{option: "讨论一下",title:"水泥灰检测作用是什么？"}]},
                {name: "任务2",child: [{option: "看一看",title:"水泥灰度检测2"},{option: "讨论一下2",title:"水泥灰检测作用是什么2？"}]},
                {name: "任务3"}]}
        ]
    }
    // 让任务中的步骤都隐藏
    $(".detail").css({"display":"none"});
    var triangle = 0;
    // 如果单击按钮就让任务中的东西展示。
    $('.triangle').on("click",function(){
        triangle ++;
        if(triangle == 2){
            triangle = 0
        }
        if(triangle){
            $(this).css({"transform":"rotate(90deg)"}).parent().next().css({"display":"block"});
        }else{
            $(this).css({"transform":"rotate(0deg)"}).parent().next().css({"display":"none"});
        }

    })

        //bootstrap模态框居中代码
        modalCenter('#myModal')
        modalCenter('#myModal1')

})