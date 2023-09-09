let list = document.querySelectorAll('.navigation li');

function activeLink() {
    list.forEach((item) => item.classList.remove('hovered'));
    this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// Prevent default link behavior
list.forEach((item) => item.addEventListener('click', function (e) {
    e.preventDefault();
}));

let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');


toggle.onclick = function () {
  navigation.classList.toggle('active');
  main.classList.toggle('active');

  

  
}
document.addEventListener("DOMContentLoaded", function() {
  const icons = document.querySelectorAll(".icon");
  
  icons.forEach(icon => {
      icon.addEventListener("click", function() {
          icons.forEach(icon => {
              icon.classList.remove("active-item", "active-item-opposite");
          });
          this.classList.add("active-item", "active-item-opposite");
      });
  });
});


//drop down
document.addEventListener("DOMContentLoaded", function() {
  const arrowIcon = document.querySelector(".arrow-icon");
  const dropdown = document.querySelector(".dropdown");
  const topColor = document.querySelector(".top-color");
  
  arrowIcon.addEventListener("click", function() {
      dropdown.classList.toggle("active");
      topColor.classList.toggle("active");
  });
});
