let url = location.href;
let projectURL;
let projectKey = substr(url.length - 1,1);
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

function loadProject(){
  switch(projectKey){
    case 0:
      projectURL = `https://scratch.mit.edu/projects/${AjaxData[1].id}`;
      toScratch.
  }
}
