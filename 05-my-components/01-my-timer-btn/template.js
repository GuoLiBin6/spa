 function timerBtn(config) {

  var $btn = $('<input type="button" id="glb-timer-btn">'),
      time = config.timeLength,
      timer;
  $(config.container).append($btn);
  $btn.attr('style','height:'+config.height+';+width:'+config.width+';font-size:'+config.fontSize);
  

  if(config.enabled == true){
    enabled();
    $btn.click(function(){
      disabled(time);
    })
  }else{
    disabled(time);
    $btn.click(function(){
      alert('即将跳转页面');
    });
  }

  function disabled(time){
    var t = time;
    
    $btn.attr('disabled','disabled');
    timer = window.setInterval(function(){
      $btn.val(config.text+'（'+t+'）');
      if(t == 0){
         window.clearInterval(timer);
         enabled();
       }
      t--;
    },1000);
    
  }
  function enabled(){
    $btn.removeAttr('disabled');
    $btn.val(config.text);
  }
  return $btn;

}

