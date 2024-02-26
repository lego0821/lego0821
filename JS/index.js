document.addEventListener('DOMContentLoaded',function(){
  const cookieScript = document.createElement('script');
  cookieScript.src = 'https://github.com/js-cookie/js-cookie/releases/download/v2.0.2/js.cookie-2.0.2.min.js';
  document.body.InsertAdjacentHTML('afterbegin',String(cookieScript));
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

window.addEventListner('load',() => {
  const notiIndex = Cookies.get('notification');
  if(Number(notiIndex) < 2){
    document.querySelectorAll('#navigations li')[1].style.color = '#f55';
  }
  if(location.href === 'https://lego0821.github.io/lego0821/pages/notification/'){
    Cookies.set('notification',2,{expires: 30});
  }
});
