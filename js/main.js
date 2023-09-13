const modalShowButton = document.querySelector('.add-button');
const modalHideButton = document.querySelector('.close-button');
const modal = document.querySelector('.modal');
const container = document.getElementById('wrapper');
const input = document.getElementById('input');
const textarea = document.getElementById('textarea');
const button = document.querySelector('.send');

console.log(container)

modalShowButton.addEventListener('click', () => {
    modal.classList.add('modal_active');
})

modalHideButton.addEventListener('click', () => {
    modal.classList.remove('modal_active');
})


let news = [
    {
        name: "Заголовок новости 1",
        text: "Текст новости 1"
    },
    {
        name: "Заголовок новости 2",
        text: "Текст новости 2"
    },
    {
        name: "Заголовок новости 3",
        text: "Текст новости 3"
    },
    {
        name: "Заголовок новости 4",
        text: "Текст новости 4"
    },
    {
        name: "Заголовок новости 5",
        text: "Текст новости 5"
    }
];

function addNews() {
    let name = document.getElementById('input').value;
    let text = document.getElementById('textarea').value;

    let news__item = {
        name: name,
        text: text
    };


    news.push(news__item);
    document.getElementById('textarea').value = '';
    document.getElementById('input').value = '';

    renderNews();
}

function renderNews() {

    container.innerHTML = '';


    news.forEach((item) => {
        container.innerHTML += taskCreator(item)
    })


}

news.forEach((item, index) => {
    container.innerHTML += taskCreator(item, index)
})
function taskCreator(task) {
    return `
        <div class="news-item">
            <h3 class="h3">${task.name}</h3>
            <p class="news-item__p">
            ${task.text}
            </p>
        </div>
	`
}

let send = document.querySelector('.send');



renderNews();

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'b') {
        var body = document.querySelector('body');
        body.style.background = '#2f2f2f';
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 'w') {
        var body = document.querySelector('body');
        body.style.background = '#ffffff';
    }
});


button.addEventListener('click', function (event) {
    event.preventDefault();
    let inputText = input.value;
    let textareaText = textarea.value;

    if (inputText.trim() === '' || textareaText.trim() === '') {
        alert('Поля не должны быть пустыми');
        return;
    }

    if (inputText.length < 8) {
        alert('Поле Название должно содержать не менее 8 символов');
        return;
    }

    if (textareaText.length < 8) {
        alert('Поле Текст должно содержать не менее 8 символов');
        return;
    }

    if (textareaText.length > 300) {
        alert('Поле Текст должно содержать не более 300 символов');
        return;
    }

    modal.classList.remove('modal_active');
    addNews();

});

