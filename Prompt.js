function thankUser() {
    alert("Grateful for your time and attention!");
    document.getElementById("followUp").style.display = "block";
}
function respondYes() {
    alert("That's great! Happy cooking!");
}

function respondNo() {
    alert("No worries! Maybe next time.");
}
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}