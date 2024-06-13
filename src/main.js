import { fetcPhotos } from './js/pixabay-api';

const form = document.querySelector('form');

let search = '';

form.addEventListener('submit', e => {
  e.preventDefault();
  search = form.elements.search.value;
  if (search === '') {
    return;
  }

  fetcPhotos(search);

  form.reset();
});
