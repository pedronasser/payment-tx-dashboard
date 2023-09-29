import { useService } from "../hooks/useService";
import { TransactionData, fetchTransactions } from "../sevices/transactions";
import TransactionDetails from "./transaction";

function TransactionsList(): JSX.Element {
    const { result, error, isLoading } = useService<TransactionData[]>(fetchTransactions);

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{error.message}</div>
    }

    return (
        <div className="flex flex-col">
            {result?.data?.map(transaction => (
                <TransactionDetails key={transaction.id} {...transaction} />
            ))}
        </div>
    )
}

export default TransactionsList;