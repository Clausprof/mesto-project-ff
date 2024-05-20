import './pages/index.css'
import './scripts/cards.js'


import { initialCards } from './scripts/cards.js'
import { createCardElement } from './components/card.js';
import { deleteCard } from './components/card.js';
import { openPopup } from './components/modal.js';
import { closePopup } from './components/modal.js';

const placeList = document.querySelector('.places__list');



const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupTypeNewCard = document.querySelector('.popup_type_new-card')

const editProfileButton = document.querySelector('.profile__edit-button')
const editCardButton = document.querySelector('.profile__add-button')

const popupButtonClose = document.querySelectorAll('.popup__close')

const formElement = document.querySelector('[name = edit-profile]')
const formAddCard = document.querySelector('[name = new-place]')


// Создание карточек из списка
initialCards.forEach((cardData) => {
    const cardElement = createCardElement(cardData, deleteCard, openImgPopup, activeLike)
    placeList.append(cardElement);
});

// Слушатели кнопок

editProfileButton.addEventListener('click', openPopupProfile)
editCardButton.addEventListener('click', openPopupCard)

// Слушатели форм
formElement.addEventListener('submit', handleFormSubmit)
formAddCard.addEventListener('submit', addNewCard)


const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

export function handleFormSubmit(evt) {
    evt.preventDefault()
    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')

    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup(popupTypeEdit)
}

function openImgPopup(imgSrc, imgName) {
    
    const imgPopup = document.querySelector('.popup_type_image')
    const popupImg = imgPopup.querySelector('.popup__image')
    const caption = imgPopup.querySelector('.popup__caption')
    popupImg.src = imgSrc
    popupImg.alt = imgName
    caption.textContent = imgName
    openPopup(imgPopup)
}

function activeLike (evt) {
    evt.classList.toggle('card__like-button_is-active')
}

function openPopupCard () {
    openPopup(popupTypeNewCard)
}

export function openPopupProfile () {
    
    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')
  
    const nameValue = profileTitle.textContent
    const jobValue = profileDescription.textContent
  
    nameInput.value = nameValue
    jobInput.value = jobValue
    openPopup(popupTypeEdit)
}
  
function addNewCard (evt) {
    evt.preventDefault()
    const placeInput = document.querySelector('.popup__input_type_card-name')
    const imgInput = document.querySelector('.popup__input_type_url')
    const cardData = {
        link: imgInput.value,
        name: placeInput.value
    }
  
    const newCard = createCardElement(cardData, deleteCard, openImgPopup, activeLike)
  
    placeList.prepend(newCard)
    const formReset = document.querySelector('.popup_type_new-card .popup__form')
    formReset.reset()
    closePopup(popupTypeNewCard)
}
