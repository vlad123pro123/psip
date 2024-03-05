let n36 = document.getElementById('36');
let ziz = 'Размер-'

function changeColor(elm) {
    document.querySelector('.size').innerHTML = ziz + elm;
}
document.querySelector('.up').addEventListener('click',
    function() {
        document.getElementById('glav').src = 'img/kart/Rectangle 88.svg'
    });
document.querySelector('.sideways').addEventListener('click',
    function() {
        document.getElementById('glav').src = 'img/kart/Rectangle 83.svg'
    });
document.querySelector('.lap').addEventListener('click',
    function() {
        document.getElementById('glav').src = 'img/kart/Rectangle 89.svg'
    });
document.getElementById('add').addEventListener('click', function () {
    let kol = document.getElementById('kolvo').value;
    let kol_sklad = document.getElementById('kolvo-sklad').innerText; // Получаем текстовое содержимое
    if (kol <= kol_sklad) {
        alert('Произошло успешно');
    }
    else{
        alert('Превышено число на складе');
    }

})

let price = parseFloat(document.getElementById('price').innerText); // Преобразуем строку в число
let kol = document.getElementById('kolvo'); // Получаем ссылку на элемент input

kol.addEventListener('input', function () {
    let quantity = parseInt(kol.value);

    // Устанавливаем новую цену
    let newPrice = quantity * price; // Умножаем цену на количество
    document.getElementById('ob-summa').textContent = newPrice + 'р'; // Обновляем общую сумму
});
