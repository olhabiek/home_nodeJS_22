// Функция для генерации последовательности Фибоначчи до указанного числа
export function generateFibonacci(n: number): number[] {
  const sequence: number[] = [0, 1];
  while (sequence.length < n) {
    const nextNumber =
      sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);
  }
  return sequence.slice(0, n); // Возврат первых n чисел
}

// Функция для генерации простых чисел до указанного числа
export function generatePrimeNumbers(n: number): number[] {
  const primes: number[] = [];
  for (let num = 2; num < n; num++) {
    if (isPrime(num)) {
      primes.push(num);
    }
  }
  return primes;
}

// Вспомогательная функция для проверки простоты числа
function isPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1; // Возврат true, если число простое
}
