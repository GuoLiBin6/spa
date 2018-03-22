$(function(){
  var psView;
  $('#ppsw1').click(function(){
     psView = new pswView({
       'container':'.glb-psw-viewing',
        'width':'200px',
        'height':'50px'
    });
  });
  
  $('#ppsw2').click(function(){
    console.log(psView.getPsw());
  });

});
