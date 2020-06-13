import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionsList } from "./components/TransactionsList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className='App'>
      <GlobalProvider>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionsList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
