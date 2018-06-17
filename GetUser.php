<?php

include('config.php');



if(! empty($_GET['UID_post'])){
$UID =   $_GET['UID_post']; 
}
else{
	echo "Error UID_post";
	exit();
}


$sql = "SELECT * FROM users WHERE uid ='$UID'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		
		$myObj = new StdClass;
		$myObj->uid = $row["uid"];
        $myObj->token = $row["token"];
        $myObj->description = $row["description"];
		$myObj->name = $row["name"];
        $myObj->lastonlinetime = $row["lastonlinetime"];
		$myObj->phone = $row["phone"];
		$myObj->email = $row["email"];
		$myObj->proExt = $row["proimg"];
		$myObj->regitime = $row["regitime"];

        $User = json_encode($myObj);

		
		echo $User;
    }
} else {
      $myObj = new StdClass;
		$myObj->userID = "NO";  

        $User = json_encode($myObj);
		echo $User;
}

$conn->close();   
?>