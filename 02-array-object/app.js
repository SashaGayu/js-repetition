const inputElement = document.querySelector('#title');
const createBtn = document.querySelector('#create');
const listElement = document.querySelector('#list');

const notes = [
    { title: 'выучить блок про массивы', completed: false },
    { title: 'повторить теорию объектов', completed: true }
];

// Отобразить заметки
function render() {
    listElement.innerHTML = ''; // Очистить список

    if (notes.length === 0) {
        listElement.innerHTML = "Нет заметок";
    }

    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML(
            "beforeend",
            getNoteTemplate(notes[i], i)
        );
    }
}

render();

function getNoteTemplate(note, index) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">
                ${note.title}
            </span>
            <span>
                <span
                    class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"
                    data-index="${index}"
                    data-type="toggle"
                >
                    &check;
                </span>
                <span
                    class="btn btn-small btn-danger"
                    data-index="${index}"
                    data-type="remove"
                >
                    &times;
                </span>
            </span>
        </li>`;
}

// Добавить новую заметку
createBtn.onclick = function () {
    if (inputElement.value.length === 0) return;

    const newNote = { title: inputElement.value, completed: false };
    notes.push(newNote);
    render();
    inputElement.value = '';
};

// Обработать действия с заметками (переключение и удаление)
listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index);
        const type = event.target.dataset.type;

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed; // Переключить статус выполнения
        } else if (type === 'remove') {
            notes.splice(index, 1); // Удалить заметку
        }

        render();
    }
};
