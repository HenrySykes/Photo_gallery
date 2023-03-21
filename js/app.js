
baguetteBox.run('.gallery');

let searchBox = document.querySelector('#search-box');
let images = document.querySelectorAll('.input-container .image-container .photo-1 .photo-2 .photo-3 .photo-4 .photo-5 .photo-6 .photo-7 .photo-8 .photo-9 .photo-10 .photo-11 .photo-12');

searchBox.oninput = () =>{
    images.forEach(hide => hide.style.display = 'none');
    let value = searchBox.value;
    images.forEach(filter =>{
        let title = filter.getAttribute('data-caption');
        if(value == title){
            filter.style.display = 'block';
        }
        if(searchBox.value = ''){
            filter.style.display = 'block';
        }
    })
}