let url = location.href;
let projectURL;
let projectKey = url.substr(url.length - 1,1);
console.log(projectKey);
let AjaxData;

//  html要素の取得
const thumbNail = document.getElementById('thumbnail');
const toScratch = document.getElementById('scr');
const toTW = document.getElementById('tur');
const detail = document.getElementById('detail');
const useing = document.getElementById('useing');

$(document).ready(function(){
  //ファイルの読み込み
  $.ajax({url: 'https://lego0821.github.io/lego0821/projects.json', dataType: 'json'})
  .done(function(data){
    console.log(data);
    AjaxData = data;
    loadProject();
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });
});

function loadProject(){  //  0: オンライン広場;1: 怪盗ゲーム;2: 弓矢ゲーム;
  switch(projectKey){
    case 0 || '0':
      projectURL = [`https://scratch.mit.edu/projects/${AjaxData[0].id}`,`https://turbowarp.org/${AjaxData[0].id}`];
      console.log(AjaxData[0].name);
      document.title = AjaxData[0].name;
      toScratch.addEventListener('click',function(){
        console.log(projectURL[0]);
        location.href = projectURL[0];
      },false);
      toTW.addEventListener('click',function(){
        console.log(projectURL[1]);
        location.href = projectURL[1];
      },false);
      thumbnail.src = `https://lego0821.github.io/lego0821/image/${AjaxData[0].name}.png`;
      detail.textContent = AjaxData[0].detail;
      AjaxData[0].HowToUse.forEach(function(item){
        const span = document.creatElement('span');
        span.textContent = item;
        useing.appentChild(span);
        console.log(item);
        const br = document.createElement('br');
        console.log(br);
        useing.appendChild(br);
      });
  }
}
