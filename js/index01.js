require.config({

　　　　paths: {
    // jquery无法写在paths里
　　　　　 math: "math",
        max: 'max',
　　　　}

　　});
// 对于jquery来说，无论函数的形参是什么都可以,jquery的地址是以index.html的相对路径找的。
require(['node_modules/jquery/dist/jquery.js','math','max'], function(a,math,max) {
    // 这里直接写app.js文件中的sayHello函数就可以了。不要写sayHell.了
    max.max(8,9);
　  $(document).ready(function(){
        console.log('233');
        $('.img').on("mouseover",function() {
            console.log(333);
            
        })
        　　
　　　　    

    })
    alert(math.add(1,1));
        
        
　　});