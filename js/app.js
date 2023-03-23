
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
  let search = document.querySelectorAll('a[data-caption]');
  search.forEach(photo => {
    if (photo.getAttribute('data-caption').toLowerCase().includes(currentValue)) {
      photo.parentNode.style.display = 'block';
    } else {
      photo.parentNode.style.display = 'none';
    }
  })
});









