<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("test", $con);
$id= $_REQUEST["id"];
$result = mysql_query("DELETE FROM news WHERE id=".$id);
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