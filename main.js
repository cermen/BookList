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

const contentList = document.querySelector('.content');
const add = document.querySelector('.new-article__post');
add.addEventListener("click", () => {
    const img = "img/book.jpg";
    const title = document.querySelector('.link').value;
    const comment = document.querySelector('.comment').value;

    const newContent = `
        <div class="article">
            <img src=${img} alt="book" class="article__img" />
            <div class="article__info">
                <div class="article__title">
                    ${title}
                </div>
                <div class="article__author"></div>
                <div class="article__comment">
                    ${comment}
                </div>
            </div>
        </div>
    `;
    contentList.innerHTML += newContent;

    document.querySelector('.link').value = '';
    document.querySelector('.comment').value = '';
})