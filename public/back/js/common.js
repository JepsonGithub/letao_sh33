/**
 * Created by 54721 on 2019/1/4.
 */

// 进度条方法初体验
// 开启进度条
//NProgress.start();

//setTimeout(function() {
//  // 结束进度条
//  NProgress.done();
//}, 500)


// 添加进度条效果:
// 1. 在第一个ajax开始发送时, 开启进度条
// 2. 在所有的ajax完成时, 结束进度条

// ajax 全局事件
// .ajaxComplete()   每个ajax完成时, 都会调用  (不管成功还是失败都调用)
// .ajaxSuccess()    每个成功的ajax, 都会调用
// .ajaxError()      每个失败的ajax, 都会调用
// .ajaxSend()       每个ajax准备发送时, 调用

// .ajaxStart()      第一个ajax发送时, 调用   (开启进度条)
// .ajaxStop()       当所有的ajax都完成时, 调用  (结束进度条)

$(document).ajaxStart(function() {
  // 开启进度条
  NProgress.start();
})
$(document).ajaxStop(function() {
  // 模拟网络延迟
  setTimeout(function() {
    // 结束进度条
    NProgress.done();
  }, 500)
})