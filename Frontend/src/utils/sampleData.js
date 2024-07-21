export const sampleTransactions = [
    { dateTime: "2024-06-16 06:27:23", amount: 2122.55, type: "Expense", category: "Healthcare", title: "Rent", currency: "EUR", note: "Transaction related to Healthcare" },
    { dateTime: "2023-08-07 02:52:46", amount: 2654.26, type: "Expense", category: "Shopping", title: "Dining Out", currency: "JPY", note: "Transaction related to Shopping" },
    { dateTime: "2024-01-17 09:30:41", amount: 1565.53, type: "Expense", category: "Travel", title: "Insurance", currency: "JPY", note: "Transaction related to Travel" },
    { dateTime: "2023-09-08 14:54:28", amount: 3219.42, type: "Income", category: "Investment", title: "Rental Income", currency: "USD", note: "Transaction related to Investment" },
    { dateTime: "2024-03-29 01:16:00", amount: 24.56, type: "Expense", category: "Entertainment", title: "Education", currency: "JPY", note: "Transaction related to Entertainment" },
    { dateTime: "2023-12-12 20:52:47", amount: 15000, type: "Expense", category: "Food", title: "Insurance", currency: "EUR", note: "Transaction related to Food" },
    { dateTime: "2023-12-12 20:52:47", amount: 20000, type: "Expense", category: "shoes", title: "Insurance", currency: "EUR", note: "Transaction related to Food" },
    { dateTime: "2023-12-12 20:52:47", amount: 20000, type: "Income", category: "bonus", title: "Insurance", currency: "EUR", note: "Transaction related to Food" },
    { dateTime: "2023-12-20 20:52:47", amount: 100000, type: "Income", category: "job", title: "Insurance", currency: "EUR", note: "Transaction related to Food" },
    { dateTime: "2023-12-20 20:52:47", amount: 4400, type: "Expense", category: "travel", title: "Insurance", currency: "EUR", note: "Transaction related to Food" },
    { dateTime: "2023-12-20 20:52:47", amount: 10000, type: "Expense", category: "game", title: "Insurance", currency: "EUR", note: "Transaction related to Food" }
  ];
  
  // Function to extract date components and include them in each transaction
  function addDateComponents(transactions) {
    return transactions.map(transaction => {
      const [date, time] = transaction.dateTime.split(' ');
      const [year, month, day] = date.split('-');
      return {
        ...transaction,
        year,
        month,
        day
      };
    });
  }
  
  const transactionsWithDateComponents = addDateComponents(sampleTransactions);
  
  // Function to group transactions into the desired nested array format
  function groupTransactionsByDate(transactions) {
    const grouped = {};
  
    transactions.forEach(transaction => {
      const { year, month, day } = transaction;
  
      if (!grouped[year]) {
        grouped[year] = {};
      }
      if (!grouped[year][month]) {
        grouped[year][month] = {};
      }
      if (!grouped[year][month][day]) {
        grouped[year][month][day] = [];
      }
  
      grouped[year][month][day].push(transaction);
    });
  
    return Object.keys(grouped).sort().map(year =>
      Object.keys(grouped[year]).sort().map(month =>
          Object.keys(grouped[year][month]).reverse().map(day =>
              grouped[year][month][day]
          )
      )
  );
  }
  
export  const groupedTransactions = groupTransactionsByDate(transactionsWithDateComponents);
console.log(groupedTransactions)
  
