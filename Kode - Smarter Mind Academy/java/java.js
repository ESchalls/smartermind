
// Gives the element with ID "burger-bars" the dropdownIcon variable, as this is the icon you click
const dropdownIcon = document.getElementById('burger-bars');

// Gives the element with ID "dropdown" the dropdownMenu variable, as this is used to control the menu showing
const dropdownMenu = document.getElementById('dropdown');

// When you click dropdownIcon you toggle the class "show" which makes it visible
dropdownIcon.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// If you click anywhere outside of the dropdown menu you remove the class "show"
window.addEventListener('click', function(event) {
  if (!event.target.matches('#burger-bars')) {
    if (dropdownMenu.classList.contains('show')) {
      dropdownMenu.classList.remove('show');
    }
  }
});
