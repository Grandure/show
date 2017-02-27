<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("test", $con);

$result = mysql_query("SELECT * FROM news");
$data =array();
while($row = mysql_fetch_array($result))
  {
  $innerarr = array('id'=>$row['id'],'title'=>$row['newstitle'],'content'=>$row['newscontent']);
  array_push($data, $innerarr); 
  }
echo json_encode($data);
mysql_close($con); 
?>