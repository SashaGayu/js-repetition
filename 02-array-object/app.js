/* --- Array Theory

const array = [1, 2, 3, 4, 5, 20, 42];
const arrayStrings = ['a', 'b', 'c', 'd', 'e'];
const array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

console.log(array[array.length]);
console.log(array[0]);
console.log(array[array.length - 1]); // array[6-1]
// console.log(array[10])
array[0] = 'Hello!'
console.log(array)
array[array.length] = 'World' // bad idea*/

const inputElement = document.querySelector('#title');
const createBtn = document.querySelector('#create');
const listElement = document.querySelector('#list');

const notes = [
    {
        title: 'выучить блок про массивы',
        completed: false,
    },
    {
        title: 'повторить теорию объектов',
        completed: true,
    },
]

function render() {
    listElement.innerHTML = ''
    if(notes.length === 0) {
        listElement.innerHTML = "Нет заметок"
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i))
    }
}

render()

function getNoteTemplate(note, index) {
    return `
        <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${note.completed ? 'text-decoration-line-through': ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"
            data-index="${index}" data-type="toggle"
            >&check;</span>
            <span class="btn btn-small btn-danger"
            data-index="${index}" data-type="remove"
            >&times;</span>
          </span>
        </li>`
}


createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote))
    notes.push(newNote);
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if(event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if(type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }

        render()
     }
}