import React, { useState } from "react";

function AddExpense() {
    const options = ["Food", "Travel", "Groceries", "Debt", "Medical", "EMI"];
    const currencyList = [
        { key: "rupee", value: "\u20B9" },
        { key: "dollar", value: "\u0024" },
        { key: "pound", value: "\u00A3" },
    ];

    const [expenseType, setExpenseType] = useState(options[0]);
    const [currency, setCurrency] = useState(currencyList[0].value);

    // const Expense = expenseType.map((expense, key) => {
    //     <option value={key}>{expense}</option>;
    //     console.log(key, expense);
    // });
    // console.log(Expense);

    let handleSelect = (event) => setExpenseType(event.target.value);
    let handleCurrencySelect = (event) => setCurrency(event.target.value);

    return (
        <div>
            <form>
                <select
                    value={currency}
                    onChange={(event) => handleCurrencySelect(event)}
                >
                    {currencyList.map((selectedCurrency) => (
                        <option key={selectedCurrency.key}>
                            {selectedCurrency.value}
                        </option>
                    ))}
                </select>
                <input id="name" type="text" autoComplete="name" required />
                <select
                    value={expenseType}
                    onChange={(event) => handleSelect(event)}
                >
                    {options.map((selectedOption) => (
                        <option key={selectedOption}>{selectedOption}</option>
                    ))}
                </select>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpense;
