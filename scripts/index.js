// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placeList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCardElement(cardData, callbackDeleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    const elementImage = cardElement.querySelector('.card__image');
    const elementTitle = cardElement.querySelector('.card__title');
    elementImage.src = cardData.link;
    elementImage.alt = cardData.name;
    elementTitle.textContent = cardData.name;

    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => { callbackDeleteCard(cardElement)});
    // let likeButton = cardElement.querySelector('.card__like-button');

    return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard (cardElement) {
    cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData) => {
    const cardElement = createCardElement(cardData, deleteCard)
    placeList.append(cardElement);
});