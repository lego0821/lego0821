window.addEventListener('scroll',function(){
  const elm = document.getElementById('top');
  const scroll = window.pageYOffset;
  if(scroll > 150){
    elm.style.opacity = '1';
    elm.style.zIndex = '1';
  }else{
    elm.style.opacity = '0';
    elm.style.zIndex = '-1';
  }
});
