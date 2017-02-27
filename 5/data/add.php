<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("test", $con);

$title = $_REQUEST['title'];
$content = $_REQUEST['content'];
$result = mysql_query("INSERT INTO `news`(`newstitle`, `newscontent`) VALUES ('".$title."','".$content."')");
if($result){
	$result = array('status'=>"ok");
	echo json_encode($result);
}
else{
	$result = array('status'=>"error");
	echo json_encode($result);
}
mysql_close($con); 
?>