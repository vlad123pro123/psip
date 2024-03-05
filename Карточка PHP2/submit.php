<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = isset($_POST['fullName']) ? $_POST['fullName'] : 'Не указано';
    $comment = isset($_POST['comment']) ? $_POST['comment'] : 'Не указано';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : 'Не указано';



    echo "Телефон: " . htmlspecialchars($phone) . "<br>";
    echo "Комментарий: " . htmlspecialchars($comment) . "<br>";
} else {
    echo "Форма не была отправлена!";
}
?>


<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = isset($_POST['fullName']) ? $_POST['fullName'] : 'Не указано';
    $comment = isset($_POST['comment']) ? $_POST['comment'] : 'Не указано';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : 'Не указано';

    $a = $phone;
    $b = $comment;
    $data = sprintf("телефон:".$a. "\nкомментарий:". $b);
    file_put_contents('fio.txt', $data);

    exit;
} else {
    echo "Форма не была отправлена!";
}
?>
