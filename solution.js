// Provide a local fallback for changeContent if not defined elsewhere
function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    const el = document.querySelector(`.${className}`);
    if (el) el.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('#confirm-back-btn');
    if (backBtn) backBtn.addEventListener('click', (e) => getBackToPersonalData(e));

    const confirmBtn = document.querySelector('#confirm-reservation');
    if (confirmBtn) confirmBtn.addEventListener('click', (e) => showThanksPage(e));

    // Show confirm-reservation view for testing
    changeContent('confirm-reservation-content');
});

function getBackToPersonalData(e) {
    e.preventDefault();
    changeContent('guest-details-form-content');
let reservation =
{
    startDate: null,
    endDate: null,
    guestsCount: 0,
    roomType: null,
    name: null,
    phone: null,
    email: null
}

changeContent('search-form-content');
document.querySelector('#search-form-button').addEventListener('click', (e) => searchFormData(e));

function searchFormData(e) {
    e.preventDefault();
    const data = e.target.parentElement;
    const checkIn = data.querySelector('#check-in').value;
    const checkOut = data.querySelector('#check-out').value;
    const people = data.querySelector('#people').value;
    if (checkIn != '' && checkOut != '' && people != '' &&
        new Date(checkIn) <= new Date(checkOut)) {
        reservation.startDate = checkIn;
        reservation.endDate = checkOut;
        reservation.guestsCount = people;
        console.log(reservation);
        changeContent('search-result-form-content');
    }
}

function changeContent(className) {
    document.querySelectorAll('.custom-form').forEach(div => div.classList.add('hidden'));
    if (document.querySelector(`.${className}`) != null) {
        document.querySelector(`.${className}`).classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const newResBtn = document.querySelector('#new-reservation');
    if (newResBtn) newResBtn.addEventListener('click', (e) => cleanData(e));

    const backBtn = document.querySelector('#guest-details-back-btn');
    if (backBtn) backBtn.addEventListener('click', (e) => fillRoomForm(e));

    const nextBtn = document.querySelector('#guest-details-next-btn');
    if (nextBtn) nextBtn.addEventListener('click', (e) => getPersonalData(e));
    // Show the personal information form by default for testing
    changeContent('guest-details-form-content');
});

function fillRoomForm(e) {
    e.preventDefault();
    changeContent('search-result-form-content');
}

function getPersonalData(e) {
    e.preventDefault();
    const data = e.target.parentElement.parentElement;

    const name = data.querySelector('#name').value;
    const phone = data.querySelector('#phone-number').value;
    const email = data.querySelector('#email').value;

    if (name != '' && phone != '' && email != '') {
        reservation.name = name;
        reservation.phone = phone;
        reservation.email = email;
        console.log(reservation);
        changeContent('confirm-reservation-content');
        fillConfirmReservationData(reservation);
    }
}

function fillConfirmReservationData(customReservation) {
    document.querySelector('.confirm-reservation #guest-name').textContent = `Name: ${customReservation.name}`;
    document.querySelector('.confirm-reservation #guest-phone').textContent = `Phone Number: ${customReservation.phone}`;
    document.querySelector('.confirm-reservation #guest-email').textContent = `Email: ${customReservation.email}`;
    document.querySelector('.confirm-reservation #guest-room-type').textContent = `Room Type: ${customReservation.roomType}`;
    document.querySelector('.confirm-reservation #guest-data-in').textContent = `Date-in: ${customReservation.startDate}`;
    document.querySelector('.confirm-reservation #guest-data-out').textContent = `Date-out: ${customReservation.endDate}`;
}

function showThanksPage(e) {
    e.preventDefault();
    changeContent('thank-you-content');
}

document.querySelector('#search-back-btn').addEventListener('click', (e) => fillSearchForm(e));

function fillSearchForm(e) {
    e.preventDefault();
    changeContent('search-form-content');
    document.querySelector('#check-in').value = reservation.startDate;
    document.querySelector('#check-out').value = reservation.endDate;
    document.querySelector('#people').value = reservation.guestsCount;
}


document.querySelectorAll('.room-type').forEach(room => {
    room.addEventListener("click", (e) => selectRoomType(e))
});

function selectRoomType(e) {
    let myTarget = undefined;
    e.preventDefault;
    if (e.target.querySelector('img') != null) {
        myTarget = e.target;
    } else {
        myTarget = e.target.parentElement;
    }
    document.querySelectorAll('.room-type').forEach(room =>
        room.classList.remove('selected-room'));
    myTarget.classList.add('selected-room');
}

document.querySelector('#search-next-btn').addEventListener('click', (e) => findRoom(e));

function findRoom(e) {
    e.preventDefault();
    const roomInfo = e.target.parentElement.parentElement.querySelector('.selected-room h4').textContent;
    reservation.roomType = roomInfo;
    console.log(reservation);
    changeContent('guest-details-form-content');

}
