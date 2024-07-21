export const sampleTransactions = [
    { dateTime: "2024-06-16 06:27:23", amount: 2122.55, type: "Expense", category: "Healthcare", title: "Rent", currency: "EUR", note: "Rent expense related to Healthcare" },
    { dateTime: "2023-08-07 02:52:46", amount: 2654.26, type: "Expense", category: "Shopping", title: "Dining Out", currency: "JPY", note: "Dining Out expense related to Shopping" },
    { dateTime: "2024-01-17 09:30:41", amount: 1565.53, type: "Expense", category: "Travel", title: "Insurance", currency: "JPY", note: "Insurance expense related to Travel" },
    { dateTime: "2023-09-08 14:54:28", amount: 3219.42, type: "Income", category: "Investment", title: "Rental Income", currency: "USD", note: "Rental Income related to Investment" },
    { dateTime: "2024-03-29 01:16:00", amount: 24.56, type: "Expense", category: "Entertainment", title: "Education", currency: "JPY", note: "Education expense related to Entertainment" },
    { dateTime: "2023-12-12 20:52:47", amount: 15000, type: "Expense", category: "Food", title: "Insurance", currency: "EUR", note: "Insurance expense related to Food" },
    { dateTime: "2023-12-12 20:52:47", amount: 20000, type: "Expense", category: "shoes", title: "Insurance", currency: "EUR", note: "Insurance expense related to shoes" },
    { dateTime: "2023-12-12 20:52:47", amount: 20000, type: "Income", category: "bonus", title: "Insurance", currency: "EUR", note: "Insurance income related to bonus" },
    { dateTime: "2023-12-20 20:52:47", amount: 100000, type: "Income", category: "job", title: "Insurance", currency: "EUR", note: "Insurance income related to job" },
    { dateTime: "2023-12-20 20:52:47", amount: 4400, type: "Expense", category: "travel", title: "Insurance", currency: "EUR", note: "Insurance expense related to travel" },
    { dateTime: "2023-12-20 20:52:47", amount: 10000, type: "Expense", category: "game", title: "Insurance", currency: "EUR", note: "Insurance expense related to game" },
    { dateTime: "2024-07-15 08:35:00", amount: 1300.00, type: "Income", category: "Freelance", title: "Project Payment", currency: "USD", note: "Project Payment income from freelance work" },
    { dateTime: "2024-02-21 11:22:33", amount: 750.75, type: "Expense", category: "Education", title: "Online Course", currency: "USD", note: "Expense for online course enrollment" },
    { dateTime: "2024-05-05 19:45:12", amount: 5600.00, type: "Income", category: "Salary", title: "Monthly Salary", currency: "USD", note: "Monthly salary payment" },
    { dateTime: "2024-08-30 14:05:50", amount: 300.50, type: "Expense", category: "Travel", title: "Flight Booking", currency: "EUR", note: "Expense for flight booking" },
    { dateTime: "2024-06-20 09:10:20", amount: 200.00, type: "Expense", category: "Food", title: "Groceries", currency: "USD", note: "Groceries expense" },
    { dateTime: "2024-09-10 16:40:15", amount: 950.00, type: "Income", category: "Investment", title: "Stock Dividends", currency: "GBP", note: "Stock dividends income" },
    { dateTime: "2024-10-05 21:55:45", amount: 1200.00, type: "Expense", category: "Healthcare", title: "Medical Bills", currency: "USD", note: "Medical bills expense" },
    { dateTime: "2024-07-25 13:30:00", amount: 450.00, type: "Expense", category: "Entertainment", title: "Concert Tickets", currency: "JPY", note: "Concert tickets expense" },
    { dateTime: "2024-11-12 15:22:00", amount: 3000.00, type: "Income", category: "Bonus", title: "Year-end Bonus", currency: "EUR", note: "Year-end bonus payment" },
    { dateTime: "2024-12-01 17:00:00", amount: 680.00, type: "Expense", category: "Travel", title: "Hotel Booking", currency: "USD", note: "Hotel booking expense" }
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
  
