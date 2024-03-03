document.addEventListener('DOMContentLoaded',function(){
  const cookieScript = document.createElement('script');
  cookieScript.src = 'https://github.com/js-cookie/js-cookie/releases/download/v2.0.2/js.cookie-2.0.2.min.js';
  document.body.prepend(cookieScript);
});
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

window.addEventListener('load',function(){
  const notiIndex = Cookies.get('notification');
  if(Number(notiIndex) < 2 || notiIndex === undefined || notiIndex === null){
    document.querySelectorAll('li a')[2].style.color = '#fcb6aa';
    document.querySelectorAll('li a')[2].class = document.querySelectorAll('li a')[2].class + ' ' + 'dot';
  }
  if(location.href === 'https://lego0821.github.io/lego0821/pages/notification/'){
    Cookies.set('notification',2,{expires: 30});
  }
});
