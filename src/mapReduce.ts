// ============================================
// MAP & REDUCE FUNCTION TESTS
// ============================================

// Sample Data
const numbers = [1, 2, 3, 4, 5];
const users = [
    { id: 1, name: 'Alice', age: 25, salary: 50000 },
    { id: 2, name: 'Bob', age: 30, salary: 60000 },
    { id: 3, name: 'Charlie', age: 28, salary: 55000 }
];

// ============================================
// MAP FUNCTION EXAMPLES
// ============================================

console.log('=== MAP FUNCTION ===');

// 1. Double each number
const doubled = numbers.map(n => n * 2);
console.log('1. Double numbers:', doubled);
// Output: [2, 4, 6, 8, 10]

// 2. Square each number
const squared = numbers.map(n => n * n);
console.log('2. Square numbers:', squared);
// Output: [1, 4, 9, 16, 25]

// 3. Extract user names
const names = users.map(user => user.name);
console.log('3. User names:', names);
// Output: ['Alice', 'Bob', 'Charlie']

// 4. Extract user salaries
const salaries = users.map(user => user.salary);
console.log('4. User salaries:', salaries);
// Output: [50000, 60000, 55000]

// 5. Create formatted strings
const formatted = users.map(user => `${user.name} is ${user.age} years old`);
console.log('5. Formatted info:', formatted);
// Output: ['Alice is 25 years old', 'Bob is 30 years old', 'Charlie is 28 years old']

// 6. Apply 10% salary increase
const increasedSalaries = users.map(user => ({
    ...user,
    salary: user.salary * 1.1
}));
console.log('6. Increased salaries:', increasedSalaries);

// ============================================
// REDUCE FUNCTION EXAMPLES
// ============================================

console.log('\n=== REDUCE FUNCTION ===');

// 1. Sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('1. Sum of numbers:', sum);
// Output: 15

// 2. Multiply all numbers
const product = numbers.reduce((acc, n) => acc * n, 1);
console.log('2. Product of numbers:', product);
// Output: 120

// 3. Find max value
const max = numbers.reduce((acc, n) => n > acc ? n : acc);
console.log('3. Max value:', max);
// Output: 5

// 4. Find min value
const min = numbers.reduce((acc, n) => n < acc ? n : acc);
console.log('4. Min value:', min);
// Output: 1

// 5. Total salaries
const totalSalary = users.reduce((acc, user) => acc + user.salary, 0);
console.log('5. Total salary:', totalSalary);
// Output: 165000

// 6. Group by age
const groupedByAge = users.reduce((acc, user) => {
    const age = user.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(user.name);
    return acc;
}, {} as Record<number, string[]>);
console.log('6. Grouped by age:', groupedByAge);
// Output: { 25: ['Alice'], 28: ['Charlie'], 30: ['Bob'] }

// 7. Count occurrences
const items = ['apple', 'banana', 'apple', 'cherry', 'apple', 'banana'];
const count = items.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
}, {} as Record<string, number>);
console.log('7. Item count:', count);
// Output: { apple: 3, banana: 2, cherry: 1 }

// 8. Create lookup object
const userLookup = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {} as Record<number, typeof users[0]>);
console.log('8. User lookup by ID:', userLookup);

// ============================================
// COMBINING MAP + REDUCE
// ============================================

console.log('\n=== MAP + REDUCE COMBINED ===');

// 1. Map then reduce - total of doubled numbers
const doubledSum = numbers
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0);
console.log('1. Sum of doubled numbers:', doubledSum);
// Output: 30

// 2. Map salaries with increase, then reduce for total
const totalWithIncrease = users
    .map(user => user.salary * 1.1)
    .reduce((acc, salary) => acc + salary, 0);
console.log('2. Total with 10% increase:', totalWithIncrease);
// Output: 181500

// 3. Get average salary
const averageSalary = users
    .map(user => user.salary)
    .reduce((acc, salary) => acc + salary, 0) / users.length;
console.log('3. Average salary:', averageSalary);
// Output: 55000

// Export for React component usage
export const mapReduceTests = {
    doubled,
    squared,
    names,
    salaries,
    sum,
    product,
    max,
    min,
    totalSalary,
    groupedByAge,
    count,
    doubledSum,
    totalWithIncrease,
    averageSalary
};
