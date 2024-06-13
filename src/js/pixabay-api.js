import { renderPhotos } from './render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '../css/styles.css';
import iconUrl from '../img/octagon.svg';

const loader = document.querySelector('.loader');
const formBox = document.querySelector('.gallery-box');

const iziToastSet = {
  message:
    'Sorry, there are no images matching your search query. Please try again!',
  backgroundColor: ' #EF4040',
  maxWidth: '432px',
  messageColor: '#FAFAFB',
  messageSize: '16',
  messageLineHeight: '24',
  position: 'topRight',
  iconUrl,
  progressBarColor: '#B51B1B',
};

export function fetcPhotos(search) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = 'api/';
  const params = new URLSearchParams({
    key: '5078704-abab538ab7558d1cf73264192',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  formBox.style.display = 'none';
  loader.style.display = 'block';

  return fetch(url)
    .then(response => {
      loader.style.display = 'none';
      formBox.style.display = 'block';
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length > 0) {
        const lightbox = new SimpleLightbox('.link-card', {
          captionsData: 'alt',
          captionDelay: 250,
        });
        renderPhotos(data.hits);
        lightbox.refresh();
      } else {
        iziToast.show(iziToastSet);
        renderPhotos(data.hits);
      }
    })
    .catch(error => console.log('Error:', error));
}
