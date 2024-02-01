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
      projectURL = [`https://scratch.mit.edu/projects/${AjaxData[projectKey].id}`,`https://turbowarp.org/${AjaxData[projectKey].id}`];
      console.log(AjaxData[projectKey].name);
      document.title = AjaxData[projectKey].name;
      toScratch.addEventListener('click',function(){
        console.log(projectURL[0]);
        location.href = projectURL[0];
      },false);
      toTW.addEventListener('click',function(){
        console.log(projectURL[1]);
        location.href = projectURL[1];
      },false);
      thumbnail.src = `https://lego0821.github.io/lego0821/image/${AjaxData[projectKey].name}.png`;
      detail.textContent = AjaxData[projectKey].detail;
      AjaxData[projectKey].HowToUse.forEach(function(item){
        const span = document.createElement('span');
        span.textContent = item;
        console.log(span);
        useing.appendChild(span);
        console.log(item);
        const br = document.createElement('br');
        console.log(br);
        useing.appendChild(br);
      });
      if(AjaxData[projectKey].urls !== undefined){
        AjaxData[projectKey].urls.forEach(function(item,index){
          const block = document.createElement('div');
          const anker = document.createElement('a');
          anker.textContent = item.text;
          block.textContent = item.label;
          switch(item.place){
            case 'before':
              block.innerHTML = `${item.label}${anker}`;
              break;
            case 'after':
              block.innerHTML = `${anker}${item.label}`;
              break;
          }
          document.getElementById('urls').appendChild(block);
        });
      }
  }
