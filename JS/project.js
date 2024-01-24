let url = location.href;
let projectKey = substr(url.length(),1);
$(document).ready(function(){
  //ファイルの読み込み
  $.ajax({url: 'https://lego0821.github.io/lego0821/projects.json', dataType: 'json'})
  .done(function(data){
    console.log(data);
  })
  .fail(function(){
    window.alert('読み込みエラー');
  });
});
