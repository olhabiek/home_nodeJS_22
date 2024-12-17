// Функция для капитализации первой буквы строки
export function capitalize(str: string): string {
  if (!str) return str; // Возврат пустой строки, если входная строка пустая
  return str.charAt(0).toUpperCase() + str.slice(1); // Капитализация первой буквы
}

// Функция для переворота строки
export function reverseString(str: string): string {
  return str.split("").reverse().join(""); // Переворот строки
}
