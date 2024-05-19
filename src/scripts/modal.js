import { closePopup } from "./cards"

const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_description')


export function handleFormSubmit(evt) {
    evt.preventDefault()
    const profileTitle = document.querySelector('.profile__title')
    const profileDescription = document.querySelector('.profile__description')

    profileTitle.textContent = nameInput.value
    profileDescription.textContent = jobInput.value
    closePopup()
}

