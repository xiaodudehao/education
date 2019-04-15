require([],function(){
    // $('#myModal').modal({
    //     keyboard: false
    //   })

      var data = {
        person:[
            {title:"jack",num:18,href:"l",src:"h",shcoolname:"a",teacher: "e"},
            {title:"ross",num:18,href:"m",src:"i",shcoolname:"b",teacher: "f"},
            {title:"tomer",num:18,href:"n",src:"j",shcoolname:"c",teacher: "g"},
            {title:"jerry",num:18,href:"o",src:"k",shcoolname:"d",teacher: "h"},
        ],
    };
    var html = template("hot",data);
    $(".hot").html(html);
})