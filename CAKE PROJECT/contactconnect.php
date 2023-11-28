<?php
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
// $firstname = $_POST['firstname'];
// $firstname = $_POST['firstname'];

// database connection
$conn = new mysqli('localhost','root','','test');
if($conn->connect_error)
{
    die('Connection Failed :'.$conn->connect_error);
}
else
{
    $stmt = $conn->prepare("insert into contact(firstname,lastname,email,phone)values(?,?,?,?)");
    $stmt->bind_param("sssi",$firstname,$lastname,$email,$phone);
    $stmt->execute();

    echo"Contact form submitted successfully.......";
    $stmt->close();
    $conn->close();
    
}

?>