window.onload=function(){
  var i = 5;

  $('#timer-btn').click(function(){
    //设置按钮不可点击
    $('#timer-btn').attr('disabled','disabled');
    var timer = window.setInterval(function(){
      $('#timer-btn').val("验证码倒计时"+i);
      i--;
      if(i<0){
         window.clearInterval(timer);
         $('#timer-btn').val('点击获取验证码');
         $('#timer-btn').removeAttr('disabled');
         i = 5;
      }
    }
   
      ,1000);
   
  }); 

};

