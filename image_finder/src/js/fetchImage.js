import cardTemplates from '../templates/card.hbs';
import API from './apiService';
import refs from './refs';
import pagination from './pagination';


refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    let query = refs.input.value;

    API.fetchImages(query).then(renderCard);
    }

    function cardMarkup(cards) {
        return cardTemplates(cards);
      }
      

function renderCard() {
    API.fetchImages().then((hits) => {
    refs.cardContainer.insertAdjacentHTML('afterbegin', cardMarkup(hits));
    })
}
    
    
