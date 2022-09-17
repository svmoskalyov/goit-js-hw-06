const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

const createListEl = options => {
  return options.map((element, i) => {
    galleryListEl.insertAdjacentHTML('beforeend', `<li><img></li>`);
    galleryListEl.children[i].classList.add('js-item');

    const galleryImgEl = galleryListEl.children[i].children[0];
    galleryImgEl.classList.add('js-img');
    galleryImgEl.src = element.url;
    galleryImgEl.alt = element.alt;
    galleryImgEl.width = 250;
  });
};

createListEl(images);
