// js:能力检测  you can you up
function fullScreen(element) {
  
  // 如果element有webkitRequestFullScreen这个方法，就可以调用
  if ('requestFullScreen' in element) {
    console.log(333);
    element.msRequestFullscreen()
    element.requestFullScreen()
  } else if ('webkitRequestFullScreen' in element) {
    
    console.log(444);
    
    element.webkitRequestFullScreen()
  } else if ('mozRequestFullScreen' in element) {
    console.log(5555);
    
    element.mozRequestFullScreen()
  }else if (element.msRequestFullscreen) { 
    console.log(666);
    
    element.msRequestFullscreen()
  }else {
    
    console.log(element.msRequestFullscreen);
    
    alert('亲，你的浏览器不支持全屏的api,要不换个浏览器？？？？')
  }
}   

// /*
//   * 全屏
// */
// function fullScreen(ele){
//   var fullScreenEnabled  = document.fullScreenEnabled || document.webkitFullScreenEnabled || document.mozFullScreenEnabled || document.msFullScreenEnabled;
//   var isFullScreen         = document.fullScreenElement || document.webkitFullScreenElement || document.mozFullScreenElement || document.msFullScreenElement;
//   if (fullScreenEnabled === undefined || fullScreenEnabled) {
//      if (isFullScreen === undefined) {
//         if (ele.requestFullScreen) {
//            ele.requestFullScreen();
//         } else if (ele.webkitRequestFullScreen) {
//            ele.webkitRequestFullScreen();
//         } else if (ele.mozRequestFullScreen) {
//            ele.mozRequestFullScreen();
//         } else if (ele.msRequestFullScreen) {
//            ele.msRequestFullScreen();
//         } else {
//            console.log('不存在进入全屏的方法！ =&gt; undefined');
//         }
//      } else if (isFullScreen === null) {
//         if (ele.requestFullScreen) {
//            ele.requestFullScreen();
//         } else if (ele.webkitRequestFullScreen) {
//            ele.webkitRequestFullScreen();
//         } else if (ele.mozRequestFullScreen) {
//            ele.mozRequestFullScreen();
//         } else if (ele.msRequestFullScreen) {
//            ele.msRequestFullScreen();
//         } else {
//            console.log('不存在进入全屏的方法！ =&gt; null');
//         }
//      } else {
//        console.log('元素已经是全屏状态了！');
//        return true;
//      }
//   } else {
//     console.log('不支持全屏模式！');
//   }
// }

// /*
//   * 退出全屏
// */
// function exitFullScreen(){
//   var fullScreenEnabled  = document.fullScreenEnabled || document.webkitFullScreenEnabled || document.mozFullScreenEnabled || document.msFullScreenEnabled;
//   var isFullScreen         = document.fullScreenElement || document.webkitFullScreenElement || document.mozFullScreenElement || document.msFullScreenElement;
//   if (fullScreenEnabled === undefined || fullScreenEnabled) {
//      if (isFullScreen === undefined) {
//         if (document.exitFullScreen) {
//            document.exitFullScreen();
//         } else if (document.webkitExitFullScreen) {
//            document.webkitExitFullScreen();
//         } else if (document.webkitCancelFullScreen) {
//            document.webkitCancelFullScreen();
//         } else if (document.mozCancelFullScreen) {
//            document.mozCancelFullScreen();
//         } else if (document.msExitFullScreen) {
//            document.msExitFullScreen();
//         } else if (document.msCancelFullScreen) {
//            document.msCancelFullScreen();
//         } else {
//            console.log('不存在退出全屏的方法！ =&gt; undefined');
//         }
//      } else if (isFullScreen !== null) {
//         if (document.exitFullScreen) {
//            document.exitFullScreen();
//         } else if (document.webkitExitFullScreen) {
//            document.webkitExitFullScreen();
//         } else if (document.webkitCancelFullScreen) {
//            document.webkitCancelFullScreen();
//         } else if (document.mozCancelFullScreen) {
//            document.mozCancelFullScreen();
//         } else if (document.msExitFullScreen) {
//            document.msExitFullScreen();
//         } else if (document.msCancelFullScreen) {
//            document.msCancelFullScreen();
//         } else {
//            console.log('不存在退出全屏的方法！ =&gt; null');
//         }
//      } else {
//        console.log('元素已经是非全屏状态了！');
//        return true;
//      }
//   } else {
//     console.log('不支持全屏模式！');
//   }
// }