window.onload = function(){
  var rectangle__width = $('#rectangle__width'),
      rectangle__height = $('#rectangle__height'),
      rectangle__calc = $('#rectangle__calc'),
      rectangle__area = $('#rectangle__area'),
      rectangle__cir = $('#rectangle__cir'),
      len = $('#len'),
      hei = $('#hei');
  var obj = {
    x:false,
    y:false
  };
  //长度输入框自动获得焦点
  rectangle__width.focus();
  rectangle__width.blur(function(){
    wordCheck(rectangle__width,len,'长',obj);
  });

  rectangle__height.blur(function(){
    wordCheck(rectangle__height,hei,'宽',obj);
  });
  rectangle__calc.click(function(){
    clickFun(obj);
  });
 };

//点击计算按钮
function clickFun(obj){
  if(obj.x && obj.y)
  {
    var widVal = $('#rectangle__width').val();
    var heiVal = $('#rectangle__height').val();
    var cir = 2*parseFloat(widVal)+parseFloat(heiVal)*2;
    var area = widVal * heiVal;
    $('#rectangle__area').val(Math.round(area * 100000)/100000);
    $('#rectangle__cir').val(Math.round(cir * 100000)/100000);
  }
}
function wordCheck(source,target,str,val){
  //alert(source.value)
   if(source.val() == ''){
      target.html(str + '度不能为空！');
      source.focus();
      if(str == '长')
        val.x = false;
      else
        val.y = false;
    }
   else if(isNaN(source.val())){
      target.html(str + '度必须是数字！');
      source.focus();
      if(str == '长')
        val.x = false;
      else
        val.y = false;
   }
   else if(source.val()<0){
      target.html(str + '度必须大于零！');
      source.focus();
      if(str == '长')
        val.x = false;
      else
        val.y = false;
   }else{
      target.html('');
      if(str == '长')
        val.x = true;
      else
        val.y = true;
   }

}

