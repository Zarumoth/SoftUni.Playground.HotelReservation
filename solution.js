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
}

function showThanksPage(e) {
    e.preventDefault();
    changeContent('thank-you-content');
}
