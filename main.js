var closeButton = document.querySelector('.closeButton');
var welcomeVanish = document.querySelector('.WelcomeBanner');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeVanish.style.display = "none";

}

var main = document.querySelector('main');
var transactions = document.querySelector('.transactions');
var main2 = document.querySelector('.main2');

transactions.addEventListener('click', changePage);

function changePage() {
  main.style.display = "none";
  transactions.classList.add("buttonSelect");
  main2.classList.remove("main2");

}
