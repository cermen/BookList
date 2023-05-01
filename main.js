const sectionForm = document.querySelector('.section__form');
const openHide = document.querySelector('.open-hide');
openHide.addEventListener('click', () => {
    if (sectionForm.classList.contains('hidden')) {
        sectionForm.classList.remove('hidden');
        openHide.innerHTML = "취소";
    } else {
        sectionForm.classList.add('hidden');
        openHide.innerHTML = "올리기";
    }
});