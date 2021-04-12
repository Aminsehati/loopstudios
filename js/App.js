const btnBars = document.querySelector('.btn-bars');
const sidbar = document.querySelector('.sidbar');
const close = document.querySelector('.close');
console.log(close);
close.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.remove('active');
});
btnBars.addEventListener('click',(e)=>{
    e.preventDefault();
    sidbar.classList.add('active');
});