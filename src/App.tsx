import React from "react";

const TransactionsList = React.lazy(() => import("./components/transactions-list"));

function App() {
  return (
    <div className="App">
        <TransactionsList />
    </div>
  );
}

export default App;
