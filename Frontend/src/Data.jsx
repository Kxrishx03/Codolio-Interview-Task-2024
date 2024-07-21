const sampleTransactions = [
    {
        dateTime: "2024-06-16 06:27:23",
        amount: 2122.55,
        type: "Expense",
        category: "Healthcare",
        title: "Rent",
        currency: "EUR",
        note: "Transaction related to Healthcare"
    },
    {
        dateTime: "2023-08-07 02:52:46",
        amount: 2654.26,
        type: "Expense",
        category: "Shopping",
        title: "Dining Out",
        currency: "JPY",
        note: "Transaction related to Shopping"
    },
    {
        dateTime: "2024-01-17 09:30:41",
        amount: 1565.53,
        type: "Expense",
        category: "Travel",
        title: "Insurance",
        currency: "JPY",
        note: "Transaction related to Travel"
    },
    {
        dateTime: "2023-09-08 14:54:28",
        amount: 3219.42,
        type: "Income",
        category: "Investment",
        title: "Rental Income",
        currency: "USD",
        note: "Transaction related to Investment"
    },
    {
        dateTime: "2024-03-29 01:16:00",
        amount: 24.56,
        type: "Expense",
        category: "Entertainment",
        title: "Education",
        currency: "JPY",
        note: "Transaction related to Entertainment"
    },
    {
        dateTime: "2023-12-12 20:52:47",
        amount: 440.6,
        type: "Expense",
        category: "Food",
        title: "Insurance",
        currency: "EUR",
        note: "Transaction related to Food"
    }
];

const groupByYearMonthDay = (transactions) => {
    const groupedTransactions = {};

    transactions.forEach((transaction) => {
        const date = new Date(transaction.dateTime);
        const yearMonthDay = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

        if (!groupedTransactions[yearMonthDay]) {
            groupedTransactions[yearMonthDay] = [];
        }
        groupedTransactions[yearMonthDay].push(transaction);
    });

    return groupedTransactions;
};

const groupedTransactions = groupByYearMonthDay(sampleTransactions);

console.log(groupedTransactions);
