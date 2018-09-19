// 1 - hover na submenu (sekcja header)

var menu = document.querySelector("ul").children;
var submenu = document.querySelector(".submenu");

submenu.style.display = 'none';

for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('mouseover', function() {
        this.lastElementChild.style.display = 'block';
    });
    submenu.addEventListener('mouseout', function() {
        this.style.display = 'none';
    });
}

// 2 - hover na obrazkach (sekcja featured)

var featuredImg = document.querySelectorAll('.featured_img');

for (var i = 0; i < featuredImg.length; i++) {
    featuredImg[i].addEventListener('mouseover', function () {
        this. firstElementChild.style.display = 'none';
    });
    featuredImg[i].addEventListener('mouseout', function () {
        this. firstElementChild.style.display = 'block';
    });
}

// 3 - slider w sekcji intro

var prev = document.querySelector('.intro').firstElementChild;
var next = document.querySelector('.intro').lastElementChild;
var sliderLi = document.querySelector('.intro__slider').children;
var index = 0;

sliderLi[index].className = 'visible';

next.addEventListener('click', function () {
   sliderLi[index].classList.remove('visible');
   index += 1;
   if (index === sliderLi.length) {
       index = 0;
   }
   sliderLi[index].className = 'visible';
});

prev.addEventListener('click', function () {
   sliderLi[index].classList.remove('visible');
   index -= 1;
   if (index < 0) {
       index = sliderLi.length - 1;
   }
   sliderLi[index].className = 'visible';
});

// 4 - skomponuj swoje krzesło

// 4.1 - dropdowny z opcjami

var dropdownArrow = document.querySelectorAll('.list_arrow');


for (var i = 0; i < dropdownArrow.length; i++) {
    dropdownArrow[i].addEventListener('click', function () {
        if (this.nextElementSibling.style.display === 'block') {
            this.nextElementSibling.style.display = 'none';
        }
        else {
            this.nextElementSibling.style.display = 'block';
        }
    });
}

// 4.2 dodawanie opcji do podsumowania

var option1 = document.querySelector('#chair_type').querySelectorAll('li');
var option2 = document.querySelector('#chair_color').querySelectorAll('li');
var option3 = document.querySelector('#chair_fabric').querySelectorAll('li');
var option4 = document.querySelector('#transport');

var choice1 = document.querySelector('h4.title');
var choice2 = document.querySelector('span.color');
var choice3 = document.querySelector('span.pattern');
var choice4 = document.querySelector('span.transport');

/* SPRYTNY SPOSÓB - do wykminienia
var option = 'option';
var choice = 'choice';

for (var k = 1; k < 4; k++) {
    for (var i = 0; i < option1.length; i++) {
        var index = k;
        option.concat(index)[i].addEventListener('click', function () {
            choice.concat(index).innerText = this.innerText;
        });
    }
}
*/

// opcja1: typ fotela

for (var i = 0; i < option1.length; i++) {
    option1[i].addEventListener('click', function () {
        choice1.innerText = this.innerText;
        document.querySelector('.title_value').innerText = this.dataset.price;
        sumPrice();
    });
}

// opcja2: kolor fotela

for (var i = 0; i < option2.length; i++) {
    option2[i].addEventListener('click', function () {
        choice2.innerText = this.innerText;
        document.querySelector('.color_value').innerText = this.dataset.price;
        sumPrice();
    });
}

// opcja3: materiał fotela

for (var i = 0; i < option3.length; i++) {
    option3[i].addEventListener('click', function () {
        choice3.innerText = this.innerText;
        document.querySelector('.pattern_value').innerText = this.dataset.price;
        sumPrice();
    });
}

// opcja4: transport

option4.addEventListener('change', function () {
    if (choice4.innerText === 'Transport') {
        choice4.innerText = '';
        document.querySelector('.transport_value').innerText = '';
    }
    else {
        choice4.innerText = 'Transport';
        document.querySelector('.transport_value').innerText = option4.dataset.transportPrice;
    }
    sumPrice();
});

// 4.3 Suma

var sum = document.querySelector('.sum').querySelector('strong');

var sumPrice = function() {
    sum.innerText = (Number(document.querySelector('.title_value').innerText)
        + Number(document.querySelector('.color_value').innerText)
        + Number(document.querySelector('.pattern_value').innerText)
        + Number(document.querySelector('.transport_value').innerText))
        + ' zł';
}

// 5 - checkbox w sekcji kontakt

var agree = document.querySelector('.checkbox-icon');

agree.addEventListener('click', function () {
    this.classList.toggle('checkbox-icon-checked');
})

