function getCardNumberFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('card');
}

const cardPhotos = {
    '1': './assets/images/maintenance.jpg',
    '2': './assets/images/cleaning.jpg',
    '3': './assets/images/child-care.jpg',
    '4': './assets/images/pet-care.jpg',
    '5': './assets/images/concierge.jpg',
    '6': './assets/images/catering.jpg',
    '7': './assets/images/courier.jpg',
    '8': './assets/images/laundry.jpg',
};

const cardNumber = getCardNumberFromUrl();

console.log('cardNumber', cardNumber);
console.log('cardPhotos', cardPhotos);

const displayedPhoto = document.getElementById('displayed-photo');
if (cardNumber && cardPhotos[cardNumber]) {
    displayedPhoto.src = cardPhotos[cardNumber];
}

document.addEventListener("DOMContentLoaded", function () {
    const contactLink = document.getElementById('contact-link');

    contactLink.addEventListener('click', function (event) {
        event.preventDefault();

        const cardNumber = getCardNumberFromUrl();
        const formUrl = `service_form.html?card=${cardNumber}`;
        window.location.href = formUrl;
    });
});