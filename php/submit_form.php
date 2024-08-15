<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

  
    $to = 'tommy098864@gmail.com'; 
    $subject = '新的聯絡信息';
    $body = "姓名: $name\nEmail: $email\n電話: $phone\n留言:\n$message";


    if (mail($to, $subject, $body)) {
        echo '消息發送成功。';
    } else {
        echo '消息發送失败。';
    }

  
}
?>
