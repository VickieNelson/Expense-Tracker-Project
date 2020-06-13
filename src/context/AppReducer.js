export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        //new state use spread op
        ...state,
        //and then what we want to change send back all transactions minus the one deleted
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        //take values from the array and the new transaction being added from payload
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
