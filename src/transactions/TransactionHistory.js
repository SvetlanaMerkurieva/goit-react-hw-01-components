import transactions from './transactions.json';
import styles from './Transactions.module.css';

export const Transactions = () => {
    return (
        <table className={styles.Table}>
            <thead>
                <tr className={styles.TitleTr}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <tr className={styles.TableTr}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}