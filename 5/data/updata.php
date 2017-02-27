<?php
$con = mysql_connect("localhost","root","");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }
mysql_select_db("test", $con);

// $id= $_REQUEST["id"];
$id = $_REQUEST['id'];  
// $thisclass = $_REQUEST['thisclass'];  
$thisvalue= $_REQUEST['thisvalue'];

$indexnum = $_REQUEST['thisindex'];
switch ($indexnum) {
	case '1':
		$content = "newstitle";
		break;
	case '2':
		$content = "newscontent";
		break;
}
$result = mysql_query("UPDATE `news` SET ".$content." = '$thisvalue' where id='$id'");
// if($indexnum=='1')
// {
// 	$result = mysql_query("UPDATE `news` SET newstitle= '$thisvalue' where id='$id'");
// }
// else{
// 	$result = mysql_query("UPDATE `news` SET newscontent= '$thisvalue' where id='$id'");
// }
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