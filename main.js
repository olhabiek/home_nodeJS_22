"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringUtils_1 = require("./stringUtils"); // Импорт функций
var finance_1 = require("./finance"); // Импорт пространства имен для финансовых операций
var userManagement_1 = require("./userManagement"); // Импорт пространства имен для управления пользователями
var sequenceUtils_1 = require("./sequenceUtils"); // Импорт функций для последовательностей
// Код для тестирования строковых функций
var testString1 = "hello";
console.log((0, stringUtils_1.capitalize)(testString1)); // Вывод: "Hello"
var testString2 = "world";
console.log((0, stringUtils_1.reverseString)(testString2)); // Вывод: "dlrow"
// Код для работы с финансами
var loanCalculator = new finance_1.Finance.LoanCalculator(20000, 5, 5); // 20,000, 5% на 5 лет
console.log("Monthly Payment: ".concat(loanCalculator.calculateMonthlyPayment().toFixed(2)));
var taxCalculator = new finance_1.Finance.TaxCalculator(50000, 20); // 50,000 доход, 20% налог
console.log("Tax Amount: ".concat(taxCalculator.calculateTax()));
// Код для управления пользователями
var adminUser = new userManagement_1.UserManagement.Admin.AdminUser("Alice", "alice@example.com", true);
console.log("Admin: ".concat(adminUser.name, ", Super Admin: ").concat(adminUser.isSuperAdmin));
adminUser.changeAccess(false);
console.log("Admin: ".concat(adminUser.name, ", Super Admin: ").concat(adminUser.isSuperAdmin));
// Код для работы с числовыми последовательностями
var fibonacciSequence = (0, sequenceUtils_1.generateFibonacci)(10);
console.log("Fibonacci Sequence (10 numbers): ".concat(fibonacciSequence.join(", ")));
var primeNumbers = (0, sequenceUtils_1.generatePrimeNumbers)(50);
console.log("Prime Numbers (up to 50): ".concat(primeNumbers.join(", ")));
