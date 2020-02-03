var closeButton = document.querySelector('.closeButton');
var welcomeVanish = document.querySelector('.WelcomeBanner');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeVanish.style.display = "none";

}

var main = document.querySelector('main');
var transactions = document.querySelector('.transactions');
var main2 = document.querySelector('.main2');
// var dashboard = document.querySelector('.dashboard');

transactions.addEventListener('click', changePage);

function changePage() {
  main.style.display = "none";
  transactions.classList.add("buttonSelect");
  main2.classList.remove("main2");
  dashboard.classList.remove("buttonSelect");
  main2.style.display = "block";
  // transactions.classList.add("buttonSelect");
}
var dashboard = document.querySelector('.dashboard');

dashboard.addEventListener('click', changePageMain);

function changePageMain() {
  main2.style.display = "none";
  dashboard.classList.add("buttonSelect");
  main.style.display = "block";
  transactions.classList.remove("buttonSelect");
}
