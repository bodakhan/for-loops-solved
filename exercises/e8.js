
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  let maxId = 0;
  let maxBalance = undefined;
  for(let account of array) {
    const { id, balance}= account;
    if (maxBalance === undefined || (balance > maxBalance && balance > 0)) {
      maxBalance = balance;
      maxId = id;
    }
  }
  return [array[maxId - 1]]
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
