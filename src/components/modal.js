
export function openPopup(popupElement) {
    popupElement.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('click', closePopupOverlay);
    document.addEventListener('click', xClose);
    
};
export function closePopup(popupElement) {
    popupElement.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
    document.removeEventListener('click', closePopupOverlay);
    document.removeEventListener('click', xClose);
};
function closePopupEsc(event) {
    if(event.key === 'Escape') {
       closePopup(document.querySelector('.popup_is-opened'));
    }
}
function closePopupOverlay(event) {
    if(event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
};



function xClose (evt) {
    if (evt.target.classList.contains('popup__close')) {
        closePopup(evt.target.closest('.popup'))
    }
}
