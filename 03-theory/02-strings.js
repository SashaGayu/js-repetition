const firstName = 'Sasha';
const age = 17;

function getAge() {
    return age;
}

// Методы работы со строками
console.log(firstName.length); // Длина строки
console.log(firstName.toUpperCase()); // В верхнем регистре
console.log(firstName.toLowerCase()); // В нижнем регистре
console.log(firstName.charAt(2)); // Символ по индексу
console.log(firstName.indexOf('a')); // Индекс первого вхождения
console.log(firstName.toLowerCase().startsWith('sa')); // Начинается с
console.log(firstName.toLowerCase().endsWith('sha')); // Заканчивается на
console.log(firstName.repeat(2)); // Повторить строку

const password = '    my super pass      ';
console.log(password.trim()); // Удалить пробелы с краев
