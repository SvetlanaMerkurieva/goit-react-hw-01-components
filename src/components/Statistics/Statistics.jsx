import PropTypes from 'prop-types';
import s from './Statistics.module.css';
/*import backgroundColor from '../../functions/getRandomColor';*/

export const Statistics = ({ title, stats }) => {
   return (
      <section className={s.statistics}>
         <h2 className={s.title}>{title}</h2>
         <ul className={s.list}>
            {stats.map(obj => (
               <li
                  className={s.item}
                  style={{ backgroundColor: 'backgroundColor' }}
                  key={obj.id}
               >
                  <span className="label">{obj.label}</span>
                  <span className="percentage">{obj.percentage}</span>
               </li>
            ))}
         </ul>
      </section>
   );
};
Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.array,
};
