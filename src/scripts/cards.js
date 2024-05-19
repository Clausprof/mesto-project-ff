export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const cardTemplate = document.querySelector('#card-template').content;

const popupTypeEdit = document.querySelector('.popup_type_edit')
const popupTypeNewCard = document.querySelector('.popup_type_new-card')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')

export function createCardElement(cardData, callbackDeleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  
  const elementImage = cardElement.querySelector('.card__image');
  elementImage.addEventListener('click', () => {openImgPopup(cardData.link, cardData.name)})


  const elementTitle = cardElement.querySelector('.card__title');

  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => { callbackDeleteCard(cardElement)});


  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like-button_is-active')
  });

  return cardElement;
}

export function openImgPopup(imgSrc, imgName) {
  const imgPopup = document.querySelector('.popup_type_image')
  const popupImg = imgPopup.querySelector('.popup__image')
  const caption = imgPopup.querySelector('.popup__caption')
  popupImg.src = imgSrc
  popupImg.alt = imgName
  caption.textContent = imgName
  document.addEventListener('keydown', closePopupEsc)
  document.addEventListener('click', closePopupOverlay)
  imgPopup.classList.add('popup_is-opened')
}

export function openPopupCard () {
  popupTypeNewCard.classList.add("popup_is-opened")
  document.addEventListener('keydown', closePopupEsc)
  document.addEventListener('click', closePopupOverlay)
}

export function closePopupEsc (evt) {
  if (evt.keyCode === 27) {
      closePopup()
  }
}

export function closePopupOverlay (evt) {
  if(evt.target.classList.contains('popup') && !evt.target.classList.contains('popup__content')) {
      closePopup()
  }
}

export function closePopup () {
  const popup = document.querySelector('.popup_is-opened')
  if (popup) {
      popup.classList.remove ('popup_is-opened')
  }
}

export function openPopupProfile () {
  popupTypeEdit.classList.add("popup_is-opened")
  
  const profileTitle = document.querySelector('.profile__title')
  const profileDescription = document.querySelector('.profile__description')

  const nameValue = profileTitle.textContent
  const jobValue = profileDescription.textContent

  nameInput.value = nameValue
  jobInput.value = jobValue

  document.addEventListener('keydown', closePopupEsc)
  document.addEventListener('click', closePopupOverlay)
}

export function addNewCard (evt) {
  evt.preventDefault()
  const placeInput = document.querySelector('.popup__input_type_card-name')
  const imgInput = document.querySelector('.popup__input_type_url')
  const cardData = {
      link: imgInput.value,
      name: placeInput.value
  }

  const newCard = createCardElement(cardData, deleteCard)

  placeList.prepend(newCard)
  const formReset = document.querySelector('.popup_type_new-card .popup__form')
  formReset.reset()
  closePopup()
}

export function deleteCard (cardElement) {
  cardElement.remove();
}

export const placeList = document.querySelector('.places__list');