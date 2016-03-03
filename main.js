
document.querySelector('#thanks button').addEventListener('click', function () {
    alert('yowch! don\'t click me so hard!');
});

document.querySelector('#double button').addEventListener('click', function () {
    var el = document.querySelector('#compoundInvestment');
    el.innerHTML = parseInt(el.innerHTML) * 2;
});

document.querySelector('#color-circle button').addEventListener('click', function () {
    var color = document.querySelector('#circle-bw');
    if (color.style.backgroundColor === 'white') {
        color.style.backgroundColor = 'black';
    } else {
        color.style.backgroundColor = 'white';
    }
});

document.querySelector('#blow-up button').addEventListener('click', function () {
    var circle = document.querySelector('.circle-red');
    if (parseInt(circle.style.width) <= 320) {
        circle.style.width = parseInt(circle.style.width) * 2 + 'px';
        circle.style.height = parseInt(circle.style.height) * 2 + 'px';
    } else {
        circle.style.width = 40 + 'px';
        circle.style.height = 40 + 'px';
    }
});

document.querySelector('#remove button').addEventListener('click', function () {
    var userlist = document.querySelector('#userList');
    var inactive = userlist.querySelectorAll('.inactive');
    var list = Array.prototype.slice.call(inactive);
    for (var i = 0; i < inactive.length; i++) {
        userlist.removeChild(list[i]);
    }
});

document.querySelector('#reverse-squares button').addEventListener('click', function () {
    var box = document.querySelector('#reverse-squares .answer-box');
    var list = Array.prototype.slice.call(box.children);
    for (var i = list.length - 1; i >= 0; i--) {
        box.removeChild(list[i]);
        box.appendChild(list[i]);
    }
});

document.querySelector('#pig-latin button').addEventListener('click', function () {
    var rewind = document.querySelector('#tasks');
    var retread = Array.prototype.slice.call(rewind.children);
    for (var i = 0; i < retread.length; i++) {
        var text = retread[i].innerHTML;
        retread[i].innerHTML = text.split('').reverse().join('');
    }
});
var counter = 1;
document.querySelector('#cycle-image button').addEventListener('click', function () {
    var base = 'http://lorempixel.com/400/200/city/';
    var cities = document.querySelector('#city-img');

    if (counter >= 11) {
        counter = 1;
    }
    cities.setAttribute('src', base + counter);
    counter++;
});