// Your code goes here
// const btns = document.querySelector(".btn");
// btns.addEventListener("mouseover", event => {
//     console.log('Buttons');
//     event.target.style.color = "brown";
//     setTimeout(function() {
//         event.target.style.color = "";
//     }, 500);
// }, false);

const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', e => {
    console.log(`'btn' fired a click event!`);
    e.stopPropagation();
});

const navLinks = document.querySelectorAll('a');
navLinks[0].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color = "teal";
});
navLinks[1].addEventListener('click', function (e) {
     e.preventDefault();
    e.target.style.color = "pink";
});
navLinks[2].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color = "orange";
});
navLinks[3].addEventListener('click', function (e) {
    e.preventDefault();
    e.target.style.color = "green";
});

const letsGo = document.querySelector('.intro h2');
letsGo.addEventListener('mousedown', function (e) {
    e.target.style.fontSize = "120px";
});

letsGo.addEventListener('mouseup', function (e) {
    e.target.style.fontSize = "32px";
});

const header = document.querySelector('body');
header.addEventListener('keydown', function (e) {
    e.target.style.backgroundColor = "pink"; 
});

header.addEventListener('keyup', function (e) {
    e.target.style.backgroundColor = "white";
});

const funBus = document.querySelector('h1');
funBus.addEventListener('mouseenter', function (e) {
    e.target.style.color = "red";
});

funBus.addEventListener('mouseleave', function (e) {
    e.target.style.color = "black";
});

const btns = document.querySelectorAll('.btn');
btns[0].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'yellow';
});
btns[1].addEventListener('dblclick', function (e) {
    e.target.style.backgroundColor = 'blue';
});
btns[2].addEventListener('contextmenu', function (e) {
    e.target.style.backgroundColor = 'yellow';
});


//  const scrolls = document.querySelectorAll('.content-section h2');
//  scrolls[0].addEventListener('scroll', function (e) {
//      e.target.style.fontSize = "65px";
//  });
//  scrolls[1].addEventListener('scroll', function (e) {
//     e.target.style.fontSize = "65px";
//  }); 