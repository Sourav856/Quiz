
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<link rel="stylesheet" href="m56.css">
<body>

<Center>
    <form action=" " method="POST">
        <h2>Registration form</h2>
        Fname<input type="text" name="fname" required><br><br>
        Lname<input type="text" name="lname" required><br><br>
        email<input type="email"  name="email"><br><br>
        password<input type="password" name="psw" required><br><br>
        Mobile<input type="text" name="mobile" required><br><br>
        <p>Gender
        <input type="radio" value="male" name="gender">Male
        <input type="radio" value="female" name="gender">Female</p>
        <input type="Submit" value="Login" name= "reg">
</center>
</form>
</body>
</html>
<?php include "Database.php" ?>
<?php
if(isset($_POST['reg']))
{
    $a =$_POST['fname'];
    $b =$_POST['lname'];
    $c =$_POST['email'];
    $d =$_POST['psw'];
    $e =$_POST['mobile'];
    $f =$_POST['gender'];
    $sql="INSERT INTO user(Fname,Lname,email,password,Mobile,Gender) values('$a','$b','$c','$d','$e','$f')";
    $data=mysqli_query($conn,$sql);
    if($data){
        echo "Data Insert Sucessfully";
    }
    else{
        echo "Error".mysqli_error($conn);
    }
}

?>