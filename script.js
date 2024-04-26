const taseem = document.querySelector(".taseem");
const mo33 = document.querySelector(".mo33");
const bigbig = document.querySelector('.bigbig');
const dwnbtn = document.querySelector('.dwnbtn');
const cancelanimation = document.querySelector('.cancelanimation')
console.log(bigbig , dwnbtn , cancelanimation);

dwnbtn.addEventListener ('click' , function() {
    bigbig.classList.remove ('hidden');
    cancelanimation.innerHTML = '<i class="fa-solid dwnbtn cursor-pointer fa-chevron-up mt-1 text-2xl bg-black/50 cus2:mt-1 w-full text-center text-white block "></i>';
    cancelanimation.classList.remove ('hidden')
})

cancelanimation.addEventListener ('click' , function () {
    bigbig.classList.add ('hidden');
    cancelanimation.classList.add ('hidden')
})