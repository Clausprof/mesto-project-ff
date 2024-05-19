import './pages/index.css'
import './scripts/cards.js'
import './scripts/modal.js'

import { initialCards } from './scripts/cards.js'
import { createCardElement } from './scripts/cards.js';
import { openImgPopup } from './scripts/cards.js';
import { openPopupCard } from './scripts/cards.js';
import { openPopupProfile } from './scripts/cards.js';
import { closePopup } from './scripts/cards.js';
import { handleFormSubmit } from './scripts/modal.js';
import { addNewCard } from './scripts/cards.js';
import { deleteCard } from './scripts/cards.js';
import { placeList } from './scripts/cards.js';

// Создание карточек из списка
initialCards.forEach((cardData) => {
    const cardElement = createCardElement(cardData, deleteCard, openImgPopup)
    placeList.append(cardElement);
});


const editProfileButton = document.querySelector('.profile__edit-button')
const editCardButton = document.querySelector('.profile__add-button')

const popupButtonClose = document.querySelectorAll('.popup__close')

const formElement = document.querySelector('[name = edit-profile]')
const formAddCard = document.querySelector('[name = new-place]')

// Слушатели кнопок

editProfileButton.addEventListener('click', openPopupProfile)
editCardButton.addEventListener('click', openPopupCard)

// Слушатели форм
formElement.addEventListener('submit', handleFormSubmit)
formAddCard.addEventListener('submit', addNewCard)

// Слушатели для элементов коллекции
for (let buttonClose of popupButtonClose) {
    buttonClose.addEventListener('click', closePopup);
}

// if(popupButtonClose.lenght > 0) {
//     popupButtonClose.forEach(btn => {
//         btn.addEventListener('click', closePopup)
//     })
// }
