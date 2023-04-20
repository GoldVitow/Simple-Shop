alert('для переключения темы нажмите соответствующую иконку в header; для переключения картинки item photo, нажмите на соответствующее превью слева в блоке view; кнопки и поиск анимированны')

// Search function & animation
const placeholder = document.querySelector('.header__placeholder');
const input = document.querySelector('.header__input');
const searchIcon = document.querySelector('.header__search-icon');

input.addEventListener('focus', () => {
   placeholder.classList.add('active');
   searchIcon.classList.add('active');
});
input.addEventListener('blur', () => {
   placeholder.classList.remove('active');
   searchIcon.classList.remove('active');
});
document.addEventListener( 'keyup', event => {
   if( event.code === 'Enter' ) {
      input.blur();
      input.value ='';
   }
});
placeholder.addEventListener('click', () => {
   input.focus();
});
searchIcon.addEventListener('click', () => {
   input.focus();
});




// ThemeChange

const ThemeIcon = document.querySelector('.header__icon_theme-change');
const body = document.querySelector('body');

ThemeIcon.addEventListener('click', () => {
   ThemeIcon.classList.toggle('active');
   body.classList.toggle('dark')
});



// item change
const itemOne = document.querySelector('.main__item_one');
const itemTwo = document.querySelector('.main__item_two');
const itemBlock = document.querySelector('.main__items-block');

itemOne.addEventListener('click', () => {
   itemBlock.classList.remove('background-two');
})
itemTwo.addEventListener('click', () => {
   itemBlock.classList.add('background-two');
})