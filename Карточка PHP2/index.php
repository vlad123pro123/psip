<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="Ключевые слова">
    <link rel="stylesheet" href="style.css">
    <title>карточка 2</title>
</head>
<body>

<?php
    $connection = mysqli_connect('localhost','root','12629','kartwo')
?>


<form action="submit.php" method="POST">
    <div>
        <input type="text" id="email" name="fullname" required placeholder="Имя">
    </div>
    <div>
        <input type="text" id="password" name="phone" required placeholder="Телефон">
    </div>
    <div>
        <input type="text" id="fullName" name="comment" required placeholder="Комментарий">
    </div>

    <div>
        <button type="submit">Перезвоните мне</button>
    </div>
</form>

</body>
</html>