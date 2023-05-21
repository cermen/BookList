const sectionForm = document.querySelector('.section__form');
const openHide = document.querySelector('.open-hide');

const contentList = document.querySelector('.content');
const add = document.querySelector('.new-article__post');

window.addEventListener('load', () => {
    function sendGetRequest(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                callback(response);
            }
        };
        xhr.send();
    }

    // Example usage
    const url = "/book_comment";
    sendGetRequest(url, function (response) {
        const comments = response['comments'];
        comments.forEach((com) => {
            const bookTitle = com.title;
            const author = com.author;
            const comment = com.comment;

            const newContent = `
                <div class="article">
                    <div class="article__info">
                        <div class="article__title">
                            ${bookTitle}
                        </div>
                        <div class="article__author">
                            ${author}
                        </div>
                        <div class="article__comment">
                            ${comment}
                        </div>
                    </div>
                </div>
            `;
            contentList.innerHTML += newContent;
        })
    });
})

openHide.addEventListener('click', () => {
    if (sectionForm.classList.contains('hidden')) {
        sectionForm.classList.remove('hidden');
        openHide.innerHTML = "취소";
    } else {
        sectionForm.classList.add('hidden');
        openHide.innerHTML = "올리기";
    }
});

add.addEventListener("click", () => {
    function sendPostRequest(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                callback(response);
            }
        };
        const jsonData = JSON.stringify(data);
        xhr.send(jsonData);
    }

    const url = "/book_comment";
    const bookTitle = document.querySelector('.book-title').value;
    const author = document.querySelector('.author').value;
    const comment = document.querySelector('.comment').value;
    const data = {
        'title': bookTitle,
        'author': author,
        'comment': comment
    }

    // Example usage
    sendPostRequest(url, data, function (response) {
        console.log(response);
    });

    document.querySelector('.book-title').value = '';
    document.querySelector('.author').value = '';
    document.querySelector('.comment').value = '';
    window.location.reload();
})