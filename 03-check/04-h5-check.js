window.onload = function(){
  var rectangle__width = document.getElementById('rectangle__width'),
      rectangle__height = document.getElementById('rectangle__height'),
      calc = document.getElementById('rectangle__calc'),
      rectangle__area = document.getElementById('rectangle__area'),
      rectangle__cir = document.getElementById('rectangle__cir'),
      col1 = document.getElementById('col1'),
      col2 = document.getElementById('col2');
  //长度输入框自动获得焦点
  rectangle__width.focus();
  //对按键进行检测
  rectangle__width.onblur = function(){
     charCheck(rectangle__width,col1);
  };
  rectangle__height.onblur = function(){
      charCheck(rectangle__height,col2);
  }
  //计算按钮点击事件
  calc.onclick =function(){
      clickFun(rectangle__width,rectangle__height,rectangle__area,rectangle__cir);
  } ;
};

//计算数值，写入数据函数
function clickFun(wid,hid,aid,cid){
  var widVal = wid.value;
  var heiVal = hid.value;
  var cir = 2*parseFloat(widVal)+parseFloat(heiVal)*2;
  var area = widVal * heiVal;
  aid.value = Math.round(area * 100000)/100000;
  cid.value = Math.round(cir * 100000)/100000;
}

function charCheck(source,target){
  //alert(source.value)
   if(source.value<0 || source.value == '')
    target.style.color = 'red';
   else
    target.style.color = 'green';

}


