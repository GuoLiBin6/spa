window.onload=function(){
  //验证码倒计时案例
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
    },1000);
  });


  //密码框可见案例
  var text = '';
  $('#pwd').on('input',function(){
    text = $('#pwd').val();
  });
  $('#pwd2').on('input',function(){
    text = $('#pwd2').val();
  })
  $('img').mouseover(function(){
    $('img').attr('src','img/open-eye.png');
    $('#pwd').attr('style','display:none');
    $('#pwd2').attr('style','display:inline-block');
    $('#pwd2').val(text);
  });
  $('img').mouseout(function(){
    $('img').attr('src','img/close-eye.png');
    $('#pwd2').attr('style','display:none');
    $('#pwd').attr('style','display:inline-block');
    $('#pwd').val(text);

  });

  //进度条案例
  var prog_bar = $('#prog-bar');
  var start = $('#start');
  var stop = $('#stop');
  var reset = $('#reset');
  var timer2;
  var j = 0;

  start.click(function(){
    timer2 = window.setInterval(function(){
      prog_bar.attr('value',j++);
     
    },50);
  });

  stop.click(function(){
    clearInterval(timer2);
  });
  reset.click(function(){
    j = 0;
    prog_bar.attr('value',0);
  });

  //滑动条案例
  $('#range').change(function(){
    $('#val').html('你获取的值是：'+$('#range').val());
  });
};

