'use strict'
import errorsNotifications from '../js/notifications.js';

const baseUrl = 'https://pixabay.com/api/';
const apiKey = '19822910-e1604133cab26f9f8c66cd9c6';

 function fetchImages(name){
     return fetch(`${baseUrl}?image_type=photo&orientation=horizontal&q=${name}&page=номер_страницы&per_page='12&key=${apiKey}`)
     .then(response => response.json())
      .then((hits) => {
        return hits;
      })
      .catch(error => {
          errorsNotifications('Nothing was found for your request. Enter the correct country name');
    return error;
    });
}

 export default {fetchImages};