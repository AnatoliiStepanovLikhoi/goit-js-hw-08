import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import imageTemplate from './gallery-template.hbs' 

// Add imports above this line
import { galleryItems }  from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryDivRef = document.querySelector('.gallery');

galleryDivRef.insertAdjacentHTML('beforeend', imageTemplate({ galleryItems }))

// const galleryMarkup = createGalleryItems(galleryItems);

// galleryDivRef.insertAdjacentHTML('beforeend', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.9,
    showCounter: false,
    disableRightClick: true,
    disableScroll: true,
    // spinner: false,
    // nav: false,
 });

// function createGalleryItems(items) {
//     return items.map(item => imageTemplate(item)).join('');
// };
