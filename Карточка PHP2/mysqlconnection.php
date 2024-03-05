<?php
$connection = mysqli_connect('localhost','root','12629','доставка_пиццы');
if(!$connection)
    die("нет подключения");

// Вывод полей из таблицы "Сотрудники"
$query = "SELECT * FROM доставка_пиццы.клиенты";
$result = mysqli_query($connection, $query);

if($result) {
    echo "<h2>Клиенты</h2>";
    while ($row = mysqli_fetch_assoc($result)) {
        foreach ($row as $key => $value) {
            echo "$key: $value<br>";
        }
        echo "<hr>";
    }
} else {
    echo "Ошибка при выполнении запроса: " . mysqli_error($connection);
}

$query2 = "SELECT * FROM доставка_пиццы.клиенты WHERE дата = '2024-03-15'";
$result2 = mysqli_query($connection, $query2);

if($result2) {
    echo "<h2>Клиенты 2024-03-15</h2>";
    while ($row = mysqli_fetch_assoc($result2)) {
        foreach ($row as $key => $value) {
            echo "$key: $value<br>";
        }
        echo "<hr>";
    }
} else {
    echo "Ошибка при выполнении запроса: " . mysqli_error($connection);
}




mysqli_close($connection);
?>
