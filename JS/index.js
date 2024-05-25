document.addEventListener('DOMContentLoaded',function(){
  const cookieScript = document.createElement('script');
  cookieScript.src = 'https://github.com/js-cookie/js-cookie/releases/download/v2.0.2/js.cookie-2.0.2.min.js';
  document.body.prepend(cookieScript);
  
  const fontAwesome = document.createElement('script');
  fontAwesome.src = 'https://kit.fontawesome.com/99b9e4fa5f.js';
  fontAwesome.crossorigin = 'anonymous';
  document.head.appendChild(fontAwesome);

  const navigationIcon = document.createElement('li');
  const settingIcon = document.createElement('a');
  settingIcon.className = 'fa-solid fa-gear whiteURL';
  settingIcon.href = 'https://lego0821.github.io/lego0821/pages/setting/';
  navigationIcon.appendChild(settingIcon);
  navigationIcon.style.float = 'right';
  navigationIcon.style.color = 'white';
  navigationIcon.style.marginLeft = 'auto';
  navigationIcon.style.cursor = 'pointer';
  navigationIcon.className = 'navs';
  document.querySelector('nav ul').appendChild(navigationIcon);
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
window.addEventListener('load',async function(){
  const response = await fetch('https://lego0821.github.io/lego0821/notification.json');
  console.log(response.ok);
  const ResponseData = await response.json();
  console.log(ResponseData);
},false);

window.addEventListener('load',function(){
  const notiIndex = Cookies.get('notification');
  if((Number(notiIndex) < 4 || notiIndex === undefined || notiIndex === null) && (!location.href === 'https://lego0821.github.io/lego0821/pages/notification/')){
    document.querySelectorAll('li a')[2].className = 'navs dot';
  }
  if(location.href === 'https://lego0821.github.io/lego0821/pages/notification/'){
    Cookies.set('notification',4,{expires: 30});
  }
});
