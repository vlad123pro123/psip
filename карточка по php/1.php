<!-- 1.php -->
<?php
// Присвоение значений переменным
$a = 10;
$b = 5.7;

// Вывод значений переменных на экран
echo "Значение переменной \$a: $a\n";
echo "Значение переменной \$b: $b\n";

// Вычисление разности и присвоение переменной $c
$c = $a - $b;

// Увеличение значения переменной $c в два раза
$c *= 2;

// Вывод значения переменной $c на экран
echo "Значение переменной \$c (разность \$a и \$b, увеличенное в два раза): $c";


for ($i = 1; $i <= 26; $i++) {
    echo "ПЗТ-34\n";
}
// Создание массива из 5 целых элементов
$array = array(10, 5, 8, 15, 3);

// Нахождение максимального элемента в массиве
$maxElement = max($array);

// Вывод результата
echo "Массив: " . implode(', ', $array) . "\n";
echo "Максимальный элемент: $maxElement";

?>
