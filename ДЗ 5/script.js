let img = document.querySelectorAll('img');
let images = {
    0: img[0],
    1: img[1],
    2: img[2],
}
img[0].onclick = function(){
    alert(images[0].getAttribute('src'));
}
img[1].onclick = function(){
    alert(images[1].getAttribute('src')); 
}
img[2].onclick = function(){
    alert(images[2].getAttribute('src')); 
}
let link = document.querySelector('a');
let href = link.getAttribute('href');
let i = 0;

function addLink() {
    if (i === 0) {
        link.textContent += '   ' + href;
        console.log(href);
    }
    i++;
}
link.addEventListener('mousemove', addLink.bind(link));
link.removeEventListener('mouseout', addLink.bind(link));
let input = document.querySelectorAll('input');
let paragraph = document.getElementById('text');
const inputs = {
    0: input[0],
    1: input[1],
    2: input[2],

    Write0() {
        paragraph.innerHTML = inputs[0].value;
    },
    Write1() {
        paragraph.innerHTML = inputs[1].value;
    },
    Write2() {
        paragraph.innerHTML = inputs[2].value;
    }
}
inputs[0].addEventListener('focusout', inputs.Write0.bind(inputs));
inputs[1].addEventListener('focusout', inputs.Write1.bind(inputs));
inputs[2].addEventListener('focusout', inputs.Write2.bind(inputs));
let q = 0;
let w = 0;
let e = 0;


