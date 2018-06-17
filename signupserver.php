<?php

include('config.php');



if(! empty($_GET['UID_post'])){
$UID =   $_GET['UID_post']; 
}
else{
	echo "Error UID_post";
	exit();
}

if(! empty($_GET['NAME_post'])){
$NAME =   $_GET['NAME_post']; 
}
else{
	echo "Error NAME_post";
	exit();
}

if(! empty($_GET['EMAIL_post'])){
$EMAIL =   $_GET['EMAIL_post']; 
}
else{
	echo "Error EMAIL_post";
	exit();
}



if(! empty($_GET['PHONE_post'])){
$PHONE =   $_GET['PHONE_post']; 
}
else{
	echo "Error PHONE_post";
	exit();
}

if(! empty($_GET['TOKEN_post'])){
$TOKEN =   $_GET['TOKEN_post']; 
}
else{
	$TOKEN = "null";
}

$dt = new DateTime();
$LASTONLINE = $dt->format('Y-m-d H:i:s'); 
$REGITIME = $dt->format('Y-m-d H:i:s'); 
$PhotoURL =   $_GET['PhotoURL_post']; 
$fileExt = explode(".",basename($PhotoURL))[1];
$name = $UID. "." . $fileExt ;

$sql = "INSERT INTO Users (uid,email,lastonlinetime,name,regitime,token,phone,proimg)

VALUES ('$UID','$EMAIL','$LASTONLINE','$NAME','$REGITIME','$TOKEN','$PHONE','$fileExt')";

if ($conn->query($sql) === TRUE) {
    echo "User Successfully Created";
	
	
	
    include_once("ImageMagic.php");

    if (file_put_contents("UserPropics/$name", file_get_contents($PhotoURL))) {
	 
        echo " The file ". $name . " has been uploaded.";
	
        $target_file = "UserPropics/$name";
        $resized_file = "UserPropics/$name";
        $wmax = 100;
        $hmax = 100;
        ak_img_resize($target_file, $resized_file, $wmax, $hmax, $fileExt);
		
		
    } else {
        echo " Sorry, there was an error uploading your file.";
    }
	
	
	
	
	
} else {
    echo "Error " . $conn->error;
}

$conn->close();   
?>