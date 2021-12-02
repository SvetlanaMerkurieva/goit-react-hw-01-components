import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export const Transactions = ({ items }) => {
   return (
      <table className={s.table}>
         <thead>
            <tr className={s.titleTr}>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </thead>
         <tbody>
            {items.map(item => (
               <tr className={s.tableTr} key={item.id}>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
               </tr>
            ))}
         </tbody>
      </table>
   );
};
Transactions.propTypes = {
   transactions: PropTypes.array,
};
