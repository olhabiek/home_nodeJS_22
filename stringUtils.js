"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
exports.reverseString = reverseString;
// Функция для капитализации первой буквы строки
function capitalize(str) {
    if (!str)
        return str; // Возврат пустой строки, если входная строка пустая
    return str.charAt(0).toUpperCase() + str.slice(1); // Капитализация первой буквы
}
// Функция для переворота строки
function reverseString(str) {
    return str.split("").reverse().join(""); // Переворот строки
}
