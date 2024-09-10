const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;
const big = 1_000_000;
const negative = -10;

// Максимальные и минимальные значения чисел в JavaScript
console.log(Number.MAX_SAFE_INTEGER); // Максимальное безопасное целое
console.log(Math.pow(2, 53) - 1); // То же самое через Math
console.log(Number.MIN_SAFE_INTEGER); // Минимальное безопасное целое
console.log(Number.MAX_VALUE); // Максимальное представимое число
console.log(Number.MIN_VALUE); // Минимальное положительное число
console.log(Number.POSITIVE_INFINITY); // Положительная бесконечность
console.log(Number.NEGATIVE_INFINITY); // Отрицательная бесконечность
console.log(Number.isFinite(Infinity)); // Проверка на конечное число
console.log(23 / undefined); // NaN (Not-a-Number)

const weird = 23 / undefined;
console.log(Number.isNaN(weird)); // Проверка на NaN

const strInt = '42';
const strFloat = '42.42';

// Преобразование строк в числа
console.log(Number(strInt)); // Преобразование к числу
console.log(Number(strFloat));
console.log(parseInt(strFloat)); // Преобразование в целое
console.log(parseFloat(strFloat)); // Преобразование в число с плавающей точкой
console.log(+strInt, +strFloat); // Быстрое преобразование

console.log(parseFloat((0.1 + 0.2).toFixed(1))); // Округление до 1 знака

// BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n); // BigInt вычисления
console.log(-42n);
console.log(parseInt(10n) - 4); // Преобразование BigInt в обычное число
console.log(10n - BigInt(4));
console.log(5n / 2n); // Целочисленное деление

// Math
console.log(Math.E); // Число Эйлера
console.log(Math.PI); // Число Пи

const myNum = 4.9;

// Математические операции
console.log(Math.sqrt(25)); // Квадратный корень
console.log(Math.pow(2, 3)); // Возведение в степень
console.log(Math.abs(-42)); // Абсолютное значение
console.log(Math.max(2, 5, 42, 199, 0)); // Максимальное значение
console.log(Math.min(2, 5, 42, 199, 0)); // Минимальное значение
console.log(Math.floor(myNum)); // Округление вниз
console.log(Math.ceil(myNum)); // Округление вверх
console.log(Math.round(myNum)); // Округление до ближайшего целого
console.log(Math.trunc(myNum)); // Удаление дробной части
console.log(Math.random()); // Случайное число от 0 до 1

// Генерация случайного числа в диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const num1 = getRandomNumber(10, 100);
console.log(num1);
