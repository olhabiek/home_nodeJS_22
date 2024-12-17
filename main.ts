import { capitalize, reverseString } from "./stringUtils"; // Импорт функций
import { Finance } from "./finance"; // Импорт пространства имен для финансовых операций
import { UserManagement } from "./userManagement"; // Импорт пространства имен для управления пользователями
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils"; // Импорт функций для последовательностей

// Код для тестирования строковых функций
const testString1 = "hello";
console.log(capitalize(testString1)); // Вывод: "Hello"

const testString2 = "world";
console.log(reverseString(testString2)); // Вывод: "dlrow"

// Код для работы с финансами
const loanCalculator = new Finance.LoanCalculator(20000, 5, 5); // 20,000, 5% на 5 лет
console.log(
  `Monthly Payment: ${loanCalculator.calculateMonthlyPayment().toFixed(2)}`
);

const taxCalculator = new Finance.TaxCalculator(50000, 20); // 50,000 доход, 20% налог
console.log(`Tax Amount: ${taxCalculator.calculateTax()}`);

// Код для управления пользователями
const adminUser = new UserManagement.Admin.AdminUser(
  "Alice",
  "alice@example.com",
  true
);
console.log(`Admin: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`);
adminUser.changeAccess(false);
console.log(`Admin: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`);

// Код для работы с числовыми последовательностями
const fibonacciSequence = generateFibonacci(10);
console.log(`Fibonacci Sequence (10 numbers): ${fibonacciSequence.join(", ")}`);

const primeNumbers = generatePrimeNumbers(50);
console.log(`Prime Numbers (up to 50): ${primeNumbers.join(", ")}`);
