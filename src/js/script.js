//  let answer = confirm ('Вам есть 18 лет?');
//  console. log(answer);
// let answer = prompt ('Вам есть 18 лет?', '');
//  console. log(answer);
// let isChecked = true,
//     isClose = false;
// console.log (isChecked && isClose); оператор и
// console.log (isChecked || isClose);

// if (2*4 == 8*2) {
//     console.log('Верно');
// } else {
//     console.log('Ошибка');
// // }
// let answer = confirm('Вам есть 18 лет?');
// if (answer) {
//     console.log('Ok');
// } else {
 // console.log('Stop');
// }

// const num = prompt('how old are you?', '');
// if (num < 21) {
//     console.log('bad');
// } else if (num > 45) {
//     console.log('good');
// } else {
//     console.log('ok');
// }

// for (let i = 1; i < 8 ; i++ ) {
//     console.log(i);
// }

// function logging (a, b) {
//     console.log(a + b);
// }
// logging(3, 5);


// logging(6, 8);


$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        // variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right_arrow.svg"></button>',
        responsive: [  
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
        
    });
    $('.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.container').find('div.catalog__content')
          .removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i). toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i). toggleClass('catalog-item__list_active');
            })
        });  
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');  
});



let activeTab = document.querySelector(".catalog__tab.active");
const tabs = document.querySelector(".catalog__tabs");

// tabs.addEventListener("click", onClickTabs);

function onClickTabs(event) {
    const target = event.target.closest(".catalog__tab");
    if (target !== null) {
        activeTab.classList.remove("active");
        target.classList.add("active");
        activeTab = target;
    }
}

