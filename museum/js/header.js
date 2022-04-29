const burger = document.querySelector('.burger');
const menu = document.querySelector('.header');
const header = document.querySelector('.header-wrapper');
const info = document.querySelector('.info');
const main = document.querySelector('main');
const navPanel = document.querySelector('.nav-panel');

//heder hide and go back depending on scroll direction
// const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
// const containHide = () => header.classList.contains('hide');

// let lastScroll = 0;

// window.addEventListener('scroll', function() {
//     if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > 130) {
//         header.classList.add('hide');
//         if(menu.classList.contains('active')) {
//             menu.classList.remove('active');
//         }
//     } else if(scrollPosition() < lastScroll && containHide()) {
//         header.classList.remove('hide');
//     }

//     lastScroll = scrollPosition();
// });

//burger menu
main.addEventListener('click', function() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        info.classList.remove('hidden');
    }
});

navPanel.addEventListener('click', function() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        info.classList.remove('hidden');
    }
});

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    info.classList.toggle('hidden');
});

console.log(`Ваша оценка - 137 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) Форма покупки билетов 

2) Форма покупки билетов 

3) Форма покупки билетов 

4) Результат проверки скорости сайта для мобильных устройств: 0 to 49 (red): Poor - не выполнено 0 ,баллов; 50 to 89 (orange): Needs Improvement - частично выполнено - 4 баллов; 90 to 100 (green): Good - выполнено полностью - 8 баллов 

Частично выполненные пункты:
1) Секция Video 

2) слайдера сравнения изображений в секции 'Explore' 

Выполненные пункты:
1) Блок header 

2) Секция Welcome 

3) Секция Visiting 

4) Секция Explore 

5) Секция Gallery 

6) Секция Tickets 

7) Секция Contacts 

8) Блок footer  

9) Блок header 

10) Секция Welcome 

11) Секция Visiting 

12) Секция Explore 

13) Секция Video 

14) Секция Gallery 

15) Секция Tickets 

16) Секция Contacts 

17) Блок footer  

18) Блок header 

19) Секция Welcome 

20) Секция Visiting 

21) Секция Explore 

22) Секция Video 

23) Секция Gallery 

24) Секция Tickets 

25) Секция Contacts 

26) Блок footer  

27) Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки,  элементы не должны скрываться, обрезаться, наезжать друг на друга, если это не предусмотрено макетом. 

28) слайдера в секции 'Welcome' 

29) кастомного видеоплеера в секции 'Video' 

30) слайдера в секции 'Video' 

31) YouTube-видео в плейлисте в секции 'Video', маленькие видео выровнены по краям большого 

32) галереи изображений и изображений в ней 

33) карты 

34) при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку 

35) ссылки в меню работают, обеспечивая плавную прокрутку по якорям 

36) при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается 

37) вёрстка меню соответствует макету на всех проверяемых разрешениях 

`);