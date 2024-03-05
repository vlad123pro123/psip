

let ak = document.getElementById('ak');
let prof = document.getElementById('prof');
prof.addEventListener('click', function() {
    document.querySelector('.container-right').style.display = 'none';
    document.querySelector('.container-right1').style.display = 'block';
})

ak.addEventListener('click', function() {
    document.querySelector('.container-right').style.display = 'block';
    document.querySelector('.container-right1').style.display = 'none';
});
document.querySelector(".katalogh").addEventListener("click", function() {
    let name = document.getElementById("name-field").value;
    let last = document.getElementById("last-field").value;
    document.querySelector('.hello-txt').innerText = "Приветствтуем " + name + " " + last;
})


