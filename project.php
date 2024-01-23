<?php
$comment = $_GET['ID'];
echo $comment;
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
  </head>
  <body>
    <form action='project.html' method='GET'>
      <input type='text' name='ID'><br>
      <input type='submit' value='送信'>
    </form>
  </body>
</html>
