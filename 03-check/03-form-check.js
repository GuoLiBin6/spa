window.onload = function(){
  
  var rectangle__width = document.getElementById('rectangle__width'),
      rectangle__height = document.getElementById('rectangle__height'),
      calc = document.getElementById('rectangle__calc'),
      rectangle__area = document.getElementById('rectangle__area'),
      rectangle__cir = document.getElementById('rectangle__cir'),
      len = document.getElementById('len'),
      hei = document.getElementById('hei');
  //长度输入框自动获得焦点
  rectangle__width.focus();
  //点击计算，进行验证
  calc.onclick = function(){
    formCheck(rectangle__width,len,'宽');
    formCheck(rectangle__height,hei,'高');
    clickFun(rectangle__width,rectangle__height,rectangle__area,rectangle__cir);
  }
 };
//字段验证，错误提示函数
function formCheck(source,target,str){
  if(source.value == ''){
      target.innerHTML = str + '度不能为空！';
    }
   else if(isNaN(source.value)){
      target.innerHTML = str + '度必须是数字！';
   }
   else if(source.value<0){
      target.innerHTML = str + '度必须大于零！';
   }else{
      target.innerHTML = '';
   }

}
//点击计算按钮
function clickFun(wid,hid,aid,cid){
  var widVal = wid.value;
  var heiVal = hid.value;
  var cir = 2*parseFloat(widVal)+parseFloat(heiVal)*2;
  var area = widVal * heiVal;
  aid.value = Math.round(area * 100000)/100000;
  cid.value = Math.round(cir * 100000)/100000;
}//长度输入框自动获得焦//长度输入框自动获得焦点点


