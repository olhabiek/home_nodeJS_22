"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFibonacci = generateFibonacci;
exports.generatePrimeNumbers = generatePrimeNumbers;
// Функция для генерации последовательности Фибоначчи до указанного числа
function generateFibonacci(n) {
    var sequence = [0, 1];
    while (sequence.length < n) {
        var nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextNumber);
    }
    return sequence.slice(0, n); // Возврат первых n чисел
}
// Функция для генерации простых чисел до указанного числа
function generatePrimeNumbers(n) {
    var primes = [];
    for (var num = 2; num < n; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}
// Вспомогательная функция для проверки простоты числа
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1; // Возврат true, если число простое
}
