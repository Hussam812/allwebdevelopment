(function(){
    "use strict"

    const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImage = 0;
    const container = document.getElementById('content');
    const nextbtn = document.getElementById('next');
    const previousbtn = document.getElementById('previous');
    function swapimg(){
        const newSlide = document.createElement('img');
        newSlide.src = `imgs/${myPhotos[currentImage]}`;
        newSlide.className = 'fadeinimg';

        container.appendChild(newSlide);
        if(container.children.length > 2){
            container.removechild(container.children[0]);
        }
    };
    nextbtn.addEventListener('click', function(evt){
        evt.preventDefault();
        currentImage++;
        if(currentImage > myPhotos.length-1){currentImage = 0};
        swapimg();
    });
    previousbtn.addEventListener('click', function(evt){
        evt.preventDefault();
        currentImage--;
        if(currentImage < 0){currentImage =myPhotos.length-1};
        swapimg();
    });
})();