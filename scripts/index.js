// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const placeList = document.querySelector('.places__list');

// @todo: Функция создания карточки

function createCardElement(cardData, CallbackDeleteCard) {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    let elementImage = cardElement.querySelector('.card__image');
    let elementTitle = cardElement.querySelector('.card__title');
    elementImage.src = cardData.link;
    elementImage.alt = cardData.name;
    elementTitle.textContent = cardData.name;

    let deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', () => { CallbackDeleteCard(cardElement)});
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