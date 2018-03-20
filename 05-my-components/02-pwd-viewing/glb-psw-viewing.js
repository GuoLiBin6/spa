function pswView(config){
  var $btn = $('<input type="password" id="glbPwd1"><input type="text" id="glbPwd2" style="display:none"><img src="img/close-eye.png">');
  $(config.container).append($btn);
  
console.log($(config.container).width());
  
  var glbImg = $(config.container+' img')
      glbPwd1 = $('#glbPwd1'),
      glbPwd2 = $('#glbPwd2'),
      text = '';
  //glbPwd1.width($(config.container).width());
  //glbPwd1.height($(config.container).height());
  //glbImg.width($(config.container).height()-3);
  
  //glbImg.css({position,'relative','left':'-50px','top':'0'})
  glbPwd1.on('input',function(){
    text = glbPwd1.val();
  });
  glbPwd2.on('input',function(){
    text = glbPwd2.val();
  });
  glbImg.mouseover(function(){
    glbImg.attr('src','img/open-eye.png');
    glbPwd1.attr('style','display:none');
    glbPwd2.attr('style','display:inline-block');
    glbPwd2.val(text);
  });
  glbImg.mouseout(function(){
    glbImg.attr('src','img/close-eye.png');
    glbPwd2.attr('style','display:none');
    glbPwd1.attr('style','display:inline-block');
    glbPwd1.val(text);
  });


  return $btn;
}

