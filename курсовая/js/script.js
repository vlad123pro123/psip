const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if ((maxVal - minVal) < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});


// function changeColor(element) {
//     // Сначала сбрасываем цвет всех элементов sod-size
//     var elements = document.getElementsByClassName("sod-size");
//     for (var i = 0; i < elements.length; i++) {
//         elements[i].style.backgroundColor = null;
//     }

//     // Затем меняем цвет только для выбранного элемента
//     element.style.backgroundColor = "red"; // Здесь вы можете указать нужный вам цвет
// }

function changeColor(element) {
    element.classList.toggle("selected");
}


function color(elem) {
    elem.classList.toggle("lalil");
}
$('.closes').click(function() {
    window.location.reload(true);

});



document.querySelector('.brg').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'block';
})
document.querySelector('.burger-icon').addEventListener('click', function() {
    document.querySelector('.burger-menu').style.display = 'none';
})

// При прокрутке страницы показываем или скрываем кнопку
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// При клике на кнопку, прокручиваем страницу вверх
document.getElementById("myBtn").addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});