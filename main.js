var closeButton = document.querySelector('.closeButton');
var welcomeVanish = document.querySelector('.WelcomeBanner');

closeButton.addEventListener('click', closeWelcome);

function closeWelcome() {
  welcomeVanish.style.display = "none";

}
