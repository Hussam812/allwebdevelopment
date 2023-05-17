(function(){
    "use strict"
    const myImges = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImage = 0;
    function nextPhoto(){
        currentImage ++;
        if (currentImage > myImges.length -1 ){currentImage =0;};
        document.getElementById('myimage').src = `imgs/${myImges[currentImage]}`;

    }
    function prevPhoto(){
        currentImage--;
        if (currentImage < 0 ){currentImage = myImges.length -1;};
        document.getElementById('myimage').src = `imgs/${myImges[currentImage]}`;

    }


    document.getElementById('next').onclick = nextPhoto;  
    document.getElementById('previous').onclick = prevPhoto;

})();