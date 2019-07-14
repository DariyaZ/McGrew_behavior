let menu = document.querySelector('#menu');
let navBar = document.querySelector('.navbar');

let links = document.querySelectorAll('.menu li');
let submenu = document.querySelectorAll('.submenu');
let inner = document.querySelector('.inner_submenu');
let innerParent = inner.parentElement;

function showMenu() {
    if (navBar.style.display === 'block') {
        navBar.style.display = 'none';
    }
    else {
        navBar.style.display = 'block';
    }
}
menu.addEventListener('click', showMenu);

for (let i = 0; i < links.length; i++) {
    for (let j = 0; j < submenu.length; j++) {
        if (links[i].contains(submenu[j])) {
            links[i].addEventListener('mouseover', function showSubmenu() {
                submenu[j].style.display = 'block';

                if(links[i].firstElementChild.className === 'active') {
                    links[i].firstElementChild.className = 'was_active';
                }
            });
            
            links[i].addEventListener('mouseout', function hideSubmenu() {
                submenu[j].style.display = 'none';
                if(links[i].firstElementChild.className === 'was_active') {
                    links[i].firstElementChild.className = 'active';
                }
            });
        }
        else if (submenu[j].contains(inner)) {
            innerParent.addEventListener('mouseover', function showSubmenu() {
                inner.style.display = 'block';
            });
            
            innerParent.addEventListener('mouseout', function hideSubmenu() {
                inner.style.display = 'none';
            });
        }
    }
}

$("#slider > div:gt(0)").hide();

setInterval(function() { 
  $('#slider > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .appendTo('#slider');
},  3000);