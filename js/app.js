
baguetteBox.run('.gallery');


// const anchors = document.querySelectorAll('a[data-caption]');

// searchBox.addEventListener('keyup', e =>{
//   console.log(e.target.value)
//   console.log(anchors)
// })

const searchBox = document.getElementById('search-box');
searchBox.addEventListener('keyup', e => {
    let currentValue = e.target.value.toLowerCase();
    console.log(currentValue);
    let search = document.querySelectorAll('data-caption');
    search.forEach(photo => {
        if (photo.textContent.toLowerCase().includes(currentValue)) {
            photo.parentNode.parentNode.style.display = 'block';
        } else {
            photo.parentNode.parentNode.style.display = 'none';
        }
    })
});