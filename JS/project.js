let url = location.href;
let projectURL;
let projectKey = url.substr(url.length - 1,1);
console.log(projectKey);
let AjaxData;

//  html要素の取得
const thumbNail = document.getElementById('thumbnail');
const toScratch = document.getElementById('scr');
const toTW = document.getElementById('tur');
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
    case 0:
      projectURL = [`https://scratch.mit.edu/projects/${AjaxData[0].id}`,`https://turbowarp.org/${AjaxData[0].id}`];
      toScratch.addEventListener('click',function(){
        console.log(projectURL[0]);
        location.href = projectURL[0];
      },false);
      toTW.addEventListener('click',function(){
        console.log(projectURL[1]);
        location.href = projectURL[1];
      },false);
      document.title = AjaxData[0].name;
  }
}
