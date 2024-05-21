const cardTemplate = document.querySelector('#card-template').content;

export function createCardElement(cardData, callbackDeleteCard, callbackOpenCard, callbackLike) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  
  const elementImage = cardElement.querySelector('.card__image');
  const elementTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button')

  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => {callbackDeleteCard(cardElement)});
  elementImage.addEventListener('click', () => {callbackOpenCard(cardData.link, cardData.name)})
  cardLikeButton.addEventListener('click', () => {callbackLike(cardLikeButton)})

  return cardElement;
}

export function deleteCard (cardElement) {
    cardElement.remove();
}

export function activeLike (evt) {
  evt.classList.toggle('card__like-button_is-active')
}
