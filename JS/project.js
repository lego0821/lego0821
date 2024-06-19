let url = location.href;
let projectURL;
let projectKey = url.substr(url.length - 1,1);
console.log(projectKey);
let AjaxData;

//  html要素の取得
const thumbNail = document.getElementById('thumbnail');
const toScratch = document.getElementById('scr');
const toTW = document.getElementById('tur');
const JSopen = document.getElementById('js');
const detail = document.getElementById('detail');
const useing = document.getElementById('useing');
const projectName = document.getElementById('projectName');

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

function loadProject(){  //  0: オンライン広場;1: 怪盗ゲーム;2: 弓矢ゲーム3: ミニゲーム2;
      projectURL = [`https://scratch.mit.edu/projects/${AjaxData[projectKey].id}`,
                    `https://turbowarp.org/${AjaxData[projectKey].id}`,
                    `https://lego0821.github.io/projects/${AjaxData[projectKey].id}`];
      console.log(AjaxData[projectKey].name);
      document.title = AjaxData[projectKey].name;

      if(AjaxData[projectKey].type === 'scratch'){
        document.getElementById('open2').style.display = 'none';

        //  各ボタンへのリンクの割り当て
        
        toScratch.href = projectURL[0];
        
        toTW.href = projectURL[1];
        
      } else if(AjaxData[projectKey].type === 'JS'){
        document.getElementById('open1').style.display = 'none';
        JSopen.href = projectURL[2];
      }
      
      
  
      thumbnail.src = `https://lego0821.github.io/lego0821/image/${AjaxData[projectKey].name}.png`;
      detail.textContent = AjaxData[projectKey].detail;
      projectName.textContent = AjaxData[projectKey].name;
      AjaxData[projectKey].HowToUse.forEach(function(item){
        const span = document.createElement('span');
        span.textContent = item;
        //console.log(span);
        useing.appendChild(span);
        //console.log(item);
        const br = document.createElement('br');
        //console.log(br);
        useing.appendChild(br);
      });
      if(AjaxData[projectKey].tag !== undefined){
        AjaxData[projectKey].tag.forEach(function(item,index){
          const anker = document.createElement('a');
          anker.textContent = item;
          anker.href = '#';
          document.getElementById('tag').appendChild(anker);
        });
      }
      if(AjaxData[projectKey].urls !== undefined){
        const h2 = document.createElement('h2');
        h2.textContent = 'リンク';
        document.getElementById('urls').appendChild(h2);
        AjaxData[projectKey].urls.forEach(function(item,index){
          const block = document.createElement('div');
          const anker = document.createElement('a');
          anker.textContent = item.text;
          anker.href = item.url;
          block.textContent = item.label;
          switch(item.place){
            case 'before':
              block.innerHTML = `${item.label}<a href="${item.url}">${item.text}</a>`;
              break;
            case 'after':
              block.innerHTML = `<a href="${item.url}">${item.text}</a>${item.label}`;
              break;
          }
          document.getElementById('urls').appendChild(block);
        });
      }

  }
